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
        <footer class="w-full py-8 absolute inset-x-0 bottom-0 items-center	">
            <div class="w-full px-4 mx-auto items-center	">
                <ul class="flex flex-wrap justify-between w-full mx-auto text-lg font-light items-center">
                    <li class="my-2 items-center w-full">
                      <Link to={"/createur"}>
                        <p class=" hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">Créateur</p>
                      </Link>
                    </li>
                </ul>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default App;