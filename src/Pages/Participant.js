import React, { useEffect, useState } from 'react'
import { accountService } from '../_services/acount.service'
import TextRetour from '../Component/TextRetour';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Participant() {

  // 03cbc8a805c35af7b7553fb21b7d070e81413e779fe2ea1eec7c265f3903ed9bf80b291462316569e220d3ce3c8dfb095b5373b2dd80a6245ca3d5219287213d3c665c538b2810ca1606f64da218da8fcc2aff51d25de3cd0d0881b7c2630bc9b2984fb49bd9c572ef593fe41a38c5c49d37bf98250621e83f6f1492ee26efe2


  const token = accountService.getToken()

  const idEquipe = accountService.getIdEquipe()

  const [identifiant, setIdentifiant] = useState([
    {
      Nom: "",
      Prenom: ""
    }
  ])

  const [scoreEquipe, setScoreEquipe] = useState(0)

  const [qrCode, setQrcode] = useState([])

  const getInfoJoueur = () => {

    axios({
      method: 'get',
      url: 'http://localhost:1337/api/users/me?populate=*',
      headers: {'Authorization': "bearer "+token}
        
    }).then((result) => {
        console.log(result)
        setIdentifiant([
          {
            ...identifiant,
            Nom: result.data.Nom,
            Prenom: result.data.Prenom
          }
        ])
        console.log(identifiant)

        accountService.saveIdEquipe(result.data.equipe.id)
    }).catch((err) => {
        console.log(err)
    })

    let idEquipe = accountService.getIdEquipe()

    axios({
      method: 'get',
      url: 'http://localhost:1337/api/equipes/'+idEquipe+'?populate=*',
      headers: {'Authorization': "bearer 03cbc8a805c35af7b7553fb21b7d070e81413e779fe2ea1eec7c265f3903ed9bf80b291462316569e220d3ce3c8dfb095b5373b2dd80a6245ca3d5219287213d3c665c538b2810ca1606f64da218da8fcc2aff51d25de3cd0d0881b7c2630bc9b2984fb49bd9c572ef593fe41a38c5c49d37bf98250621e83f6f1492ee26efe2"}
    }).then((result) => {
        console.log(result.data.data.attributes.qr_codes.data)
        let QRcode = result.data.data.attributes.qr_codes.data

        const qrCodeCopy = [...qrCode]

        QRcode.forEach(function (element){
          console.log(element.attributes.Code)
          
          qrCodeCopy.push(element.attributes.Code)
          
        })

        setQrcode(qrCodeCopy)

        console.log(qrCode)
    }).catch((err) => {
        console.log(err)
    })

    axios({
      method: 'get',
      url: 'http://localhost:1337/api/points-equipes?populate=*',
      headers: {'Authorization': "bearer "+token}
    })
    .then(res => {
      console.log(res)
      let pointEquipe = res.data.data
      console.log(pointEquipe)

      let score = 0
      pointEquipe.forEach(element => {
        console.log(element)
        if(element.attributes.Equipe.data.id == idEquipe){
            console.log("plus "+element.attributes.Points+" points")
            score += element.attributes.Points
          }
      });
      setScoreEquipe(score)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    getInfoJoueur()
  }, [])

  return (
    <div class="flex h-screen pb-20">
      <div class="m-auto items-center text-center">
        <h2><u>Prénom :</u> {identifiant[0].Prenom}</h2>
        <h2><u>Nom :</u> {identifiant[0].Nom}</h2>

        <br/>

        <h2><u>Numéro de ton équipe :</u> {idEquipe}</h2>

        <br/>

        <h2><u>QrCode Scanné par l'équipe:</u></h2>
        {
          qrCode.map(qrcode => 
            <ul>{qrcode}</ul>
          )
        }

        <br/>

        <h2><u>Nombre de points de l'équipe</u></h2>
        <p>{scoreEquipe}</p>
        <TextRetour chemin={"/"}/>
        
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

export default Participant