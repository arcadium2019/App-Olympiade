import React from 'react'
import './Style/Connexion.css'
import { useState } from 'react';
import TextRetour from '../Component/TextRetour';
import axios from 'axios';
import { accountService } from '../_services/acount.service';



function Connexion() {

  accountService.logout()

  const [id, setid] = useState("")
  const [mdp, setmdp] = useState("")

  const handleChangeId = (event) => {
    setid(event.target.value)
  }
  
  const handleChangeMdp = (event) => {
    setmdp(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(id, mdp);

    axios.post('http://localhost:1337/api/auth/local', {identifier: id, password: mdp})
      .then(res => {
        console.log(res.status, res.data.jwt)
        accountService.saveToken(res.data.jwt)
        window.location.href="/multiactivites"
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="Connexion" class="flex h-screen pb-20">
      <div class="m-auto items-center text-center">
        
        <h1 class="mt-2 mb-4 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">Connexion</h1>
        <form action='submit' onSubmit={handleSubmit} class="flex flex-col">
          <input type="email" placeholder='identifiant' name='identifier' value={id} onChange={handleChangeId} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
          <input type='text' placeholder='Mot de passe' name='mdp' value={mdp} onChange={handleChangeMdp} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
          <button class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Valider</button>
        </form>
        <TextRetour chemin={"/"}/>
      </div>
    </div>
  )
}

export default Connexion