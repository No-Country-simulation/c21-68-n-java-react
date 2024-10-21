import React from 'react';
import { useAuth } from '../../../core/auth/hook/useAuth';
import Layout from '../../../core/layouts/Layout';
import Card1 from '../../../core/components/Card1';
import Card2 from '../../../core/components/Card2';
import Banner from '../../../core/components/Banner';

const HomeView = () => {
  const { logOut, isLoggedIn } = useAuth();
  console.log("isLoggedIn:" + isLoggedIn);

  return (
    <>
      <Banner />
      <div className="mt-5 d-flex justify-content-center">
        <div className="text-center">
          <button onClick={logOut} className="mb-3">Cerrar sesión</button>
          <div className="d-flex flex-column align-items-center">
            <Card1 />
            <Card2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeView;