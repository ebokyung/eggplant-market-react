import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import { Meta } from './libs/Meta';

function App() {
  return (
    <>
      <Meta />
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
      <Toaster />
    </>
  );
}
export default App;
