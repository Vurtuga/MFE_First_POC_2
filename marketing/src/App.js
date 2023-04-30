import React from 'react';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { StylesProvider , createGenerateClassName} from '@material-ui/core/styles';


import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
]);

export default() =>{
    return (
    <div>
        <StylesProvider generateClassName={generateClassName}>
            <RouterProvider router={router} />
        </StylesProvider>
    </div>
)};