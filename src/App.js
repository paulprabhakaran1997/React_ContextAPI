import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/users/:id' element={<EditUser />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
