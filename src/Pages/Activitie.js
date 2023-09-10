import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Style/Activite.css'
import TextRetour from '../Component/TextRetour';
import axios from 'axios';
import { accountService } from '../_services/acount.service';
import { Link } from 'react-router-dom';

function Activitie() {

    let {uid} = useParams();
    console.log(uid);

    const [score, setscore] = useState(0)

    const token = accountService.getToken()

    const idEquipe = accountService.getIdEquipe()

    const handleClick = (e) => {
        if(e.target.value === '+'){
            setscore(score+1);
        }else
        setscore(score-1);
        console.log(e.target.value)
    }

    const handleClickSendScore = () => {

        axios({
            method: 'post',
            url: 'http://localhost:1337/api/points-equipes',
            data: {
                data: {
                    Equipe: idEquipe,
                    Points: score,
                    Source: uid
                }
            },
            headers: {'Authorization': "bearer "+token}
            
        }).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
        
        

        
    }

    return (
        <div className='Activite' class="flex h-screen pb-20">
            <div class="m-auto items-center text-center">
                <h1 class="mt-2 mb-4 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">{uid}</h1>
                <h2 class="mb-4 text-lg font-medium leading-6 text-gray-900">Score</h2>
                <div className='Score'>
                    <button onClick={handleClick} value="-" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">-</button>
                    <input value={score} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"></input>
                    <button onClick={handleClick} value="+" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">+</button>
                </div>
                <button onClick={handleClickSendScore} class="py-2 px-4 mt-4 mb-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Valider</button>
                <TextRetour chemin={"/multiactivites"}/>
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
    )
}

export default Activitie