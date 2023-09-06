import React, { useState } from 'react'
import ButtonBleu from '../Component/ButtonBleu'
import axios from 'axios'
import { accountService } from '../_services/acount.service'
import './Style/SuccesScanning.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function SuccesScanning() {

    var item = [1,2,3,4]

    let {uid} = useParams();

    const maSource = uid

    const monEquipe = accountService.getNomEquipe()
    
    const token = accountService.getToken()

    let idEquipe = accountService.getIdEquipe() 

    let addPoint = "1"

    const verifSourceEquipe = (pointEquipe) => {

        pointEquipe[0].forEach(function (item){
            if(item.attributes.Source === maSource && item.attributes.Equipe.data.attributes.Nom === monEquipe){
                addPoint = "0"
                console.log(addPoint)
            }
        })
    }

    const ajoutPoint = () => {
        axios({
            method: 'post',
            url: 'http://localhost:1337/api/points-equipes',
            data: {
                data: {
                    Equipe: idEquipe,
                    Points: '10',
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

    const verifAjoutPoint = (event) => {

        axios({
            method: 'get',
            url: 'http://localhost:1337/api/points-equipes?populate=*',
            headers: {'Authorization': "bearer "+token}
        })
        .then(res => {
            const pointEquipe = ([res.data.data])
            verifSourceEquipe(pointEquipe)

            if(addPoint === "1"){
                console.log("ajout de points")
                ajoutPoint()
            }else{
                console.log("ces point on deja été ajouter")
            }
        })
        .catch(err => {console.log(err)})
    }

   
        
    useEffect(() => {
        
        verifAjoutPoint();

    },[]);
    

    return (
        <div className='SuccesScanning' >
            <h1>Bien jouer vous avez trouver ce QrCode</h1>
            <h2>Vous gagner 10 points</h2>
            <ButtonBleu texte={"Course D'Orientation"} chemin={"/courseorientation"} />
        </div>
    )
}

export default SuccesScanning