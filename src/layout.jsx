import React from 'react';
import Header from './components/Header.jsx';
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (query) => {
    navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <>
      
      <Header onSearch={handleSearch} />
      <main>
        <Outlet />
      </main>

      </>
  );
};

export default Layout;