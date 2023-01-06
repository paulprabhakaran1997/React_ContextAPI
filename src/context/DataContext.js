import { createContext , useState , useEffect } from "react";
import api from '../api/ApiData';
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) =>{

    const [UserData , setUserData] = useState([])

    const [loading , setLoading] = useState(true)

    const history = useNavigate()

    const [User , setUser] = useState({
        name : "",
        email : "",
        phone : ""
    })

    const fetchData = async () =>{
        try{
            const response = await api.get("/user");
            if(response && response.data)
            {
                setUserData(response.data)
                setLoading(false)
            }
        }
        catch(err)
        {
            console.log(err.message)
        }
    }

    useEffect(() =>{
        fetchData()
    },[])

    const handleSignup = async (e) => {
        // e.preventDefault()
        // console.log(User);

        const ExistingEmailcheck = UserData.filter((data) => (data.email).toLowerCase() === (User.email).toLowerCase())
        // console.log(ExistingEmailcheck)

        if (ExistingEmailcheck.length === 0) {
            try {
                const response = await api.post("/user", User);
                if (response && response.status === 201) {
                    console.log(response)
                }

            }
            catch (err) {
                console.log(err.message)
            }
        }
        else {
            alert("Email Already Exists")
        }

    }


    const handleDelete = async (id) =>{
        try{
            const response = await api.delete("/user/"+id)
            console.log(response)
            if(response && response.status === 200)
            {
                setUserData(UserData.filter((data) => data.id !== id))
            }
        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <DataContext.Provider value={{
            UserData , setUserData , loading , setLoading,
            User , setUser, handleSignup, handleDelete
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext;