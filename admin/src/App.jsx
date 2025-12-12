import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SideBar from './components/SideBar';
import Addmenu from './Pages/Addmenu';
import Listmenu from './Pages/Listmenu';
import AdminTable from './Pages/AdminTable';
import { ToastContainer } from 'react-toastify';

export const backendUrl = 'http://localhost:4000';

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') || "");

 
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-white min-h-screen">
      <ToastContainer />

      {token === "" ? (
        
        <Login setToken={setToken} />
      ) : (
       
        <div className="flex w-full">
          <SideBar setToken={setToken} />

          <div className="w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base">
            <Routes>
           
              <Route path="/" element={<Navigate to="/add" />} />

             
              <Route path="/add" element={<Addmenu token={token} />} />
              <Route path="/list" element={<Listmenu token={token} />} />
              <Route path="/table" element={<AdminTable token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

