import React, { lazy, Suspense, useEffect, useState } from "react";

import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import { UserContext } from "./utils/ContextComp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItems from "./Components/CartItems";
// import Instamart from "./Components/Instamart";

const Instamart = lazy(() => import('./Components/Instamart'))

const App = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    setUserName('Vamsi Ankabattula')
  },[])
  
  return (
    <Provider store={appStore}>
    <div >
      <UserContext.Provider value={{userName}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }, {
        path: '/cart',
        element: <CartItems />
      },
      {
        path: '/restaurants/:restId',
        element: <RestaurantDetails />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Instamart /></Suspense>
      },
    ],
    errorElement: <Error />
  },
  
])

export default App;
