import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App(){
  return (
    <div className='App' class="flex h-screen pb-20">
      <div class="m-auto items-center text-center">
        <h1 class="mt-2 mb-4 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">Olympiades 2023</h1>
        <Link to="/connexion"><button class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Connexion</button></Link>
        <Link to="/inscription"><button class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Inscription</button></Link>
      </div>
    </div>
  );
}

export default App;