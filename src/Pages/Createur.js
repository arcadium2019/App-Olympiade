import React from 'react'
import TextRetour from '../Component/TextRetour'

function Createur() {

  return (
    <div class="flex h-screen pb-20">
        <div class="m-auto items-center text-center">
            <div>
                <div class="w-60 p-5 mb-5 border-solid border-2 border-gray-500 rounded-3xl">
                    <img src={require('../Image/Photo_Teo.jpg')} width='100%' class="rounded-lg"/>
                    <p><b>Téo Lambert</b> développeur Front-end de l'application</p>
                </div>
                <div class="w-60 p-5 mb-5 border-solid border-2 border-gray-500 rounded-3xl">
                    <img src={require('../Image/Photo_Loic.jpg')} width='100%' class="rounded-lg"/>
                    <p><b>Loïc Cambray</b> développeur Back-end de l'application</p>
                </div>
            </div>
            <TextRetour chemin={"/"}/>
        </div>
    </div>
  )
}

export default Createur
