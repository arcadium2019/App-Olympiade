import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import Participant from './Pages/Participant';
import Activites from './Pages/Activites';
import Activitie from './Pages/Activitie';
import CourseOrientation from './Pages/CourseOrientation';
import SuccesScanning from './Pages/SuccesScanning';
import Createur from './Pages/Createur';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "connexion",
    element: <Connexion/>,
  },
  {
    path: "inscription",
    element: <Inscription/>,
  },
  {
    path: "multiactivites",
    element: <Activites/>,
  },
  {
    path: "participant",
    element: <Participant/>,
  },
  {
    path: "activiteunique/:uid",
    element: <Activitie/>,
  },
  {
    path: "courseorientation",
    element: <CourseOrientation/>,
  },
  {
    path: "successcanning/:uid",
    element: <SuccesScanning/>,
  },
  {
    path: "createur",
    element: <Createur/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();