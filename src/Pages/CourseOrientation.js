import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import './Style/CourseOrientation.css'
import "../Component/Input"
import "../Component/ButtonBleu"
import Input from '../Component/Input';
import ButtonBleu from '../Component/ButtonBleu';
import TextRetour from '../Component/TextRetour'
import axios from 'axios';
import { accountService } from '../_services/acount.service';
import { useNavigate } from 'react-router-dom';

function CourseOrientation(){

  let navigate = useNavigate()

  const [scanResult, setScanResult] = useState("")

  const token = accountService.getToken()

  let idQr = [""]

  let itsok = [""];

  const idEquipe =  accountService.getIdEquipe()

  const addQrCode = (event) => {
    event.preventDefault();

    /// requette choper id qrcode
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/qr-codes?fields=Code',
      headers: {'Authorization': "bearer "+token},
      data: {
        data: {
          Code: scanResult
        }
      }
    })
    .then(res => {
      console.log(res)
      // console.log(res.data.data)
      const result = res.data.data;
      console.log(result[0].id)
      console.log(result[0].attributes.Code)
      for(let i = 0; i <= result.length; i++){
        const value = result[i].attributes.Code
        console.log(value)
        if(value === scanResult){
          const id = (result[i].id);
          idQr = [id]
          console.log(idQr)
        }
      }
    })
    .catch(error => {
      console.log(error)
    });


    /// requete ajout de qr code
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/equipes/'+idEquipe+'?populate=*',
      headers: {'Authorization': "bearer "+token}
    })
    .then(res => {
      console.log(res.data.data.attributes.qr_codes.data)
      var ide = ([res.data.data.attributes.qr_codes.data])
      //setQrCode(ide.map((item) => (item.map((id2) => ((id2.id))))))
      ide = ide.map((item) => (item.map((id2) => {return(id2.id)})))
      //console.log(qrCode)
      // console.log(ide.map(item => mesId = mesId+{item}+","))
      //ide = ide.map(item => item.map(item2 => {mesId = mesId+toString({item2})+","}))
      ide = [ide[0]]
      const mesQrid = ide[0].concat(idQr[0])
      console.log(idQr)
      console.log(mesQrid)
      axios({
        method: 'put',
        url: 'http://localhost:1337/api/equipes/'+idEquipe+'?populate=*',
        data: {
          data: {
            qr_codes: mesQrid
          }
        },
        headers: {'Authorization': "bearer "+token}
      })
      .then(res => {
        console.log(res)
        localStorage.setItem("visit", "");
        navigate("../successcanning/"+scanResult)
      })
      .catch(error => {
        console.log(error)
      });
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    });
    
    return false;
  }

  const handleClick = (event) => {
    addQrCode(event)
    addQrCode(event)
  }

  useEffect(() => {    

    const scanner = new Html5QrcodeScanner('reader',{
      qrbox: {
        width: 250, 
        height: 250
      },
      fps : 5,
    })
  
    scanner.render(success, error);

    function success(result){
      scanner.clear()
      setScanResult(result)
      console.log(result)
    }
    
    function error(err){
      console.warn(err);
    }
  },[]);

  

  return (
    <div className="App">
      <h1 class="mt-2 mb-4 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">Course D'orientation</h1>
      <br></br>
      { scanResult 
      ?<div>
        Success: <a href={"http:/"+scanResult}>{scanResult}</a> 
        <button onClick={handleClick} class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Valider les points</button>
      </div>
      :<div id='reader'></div>
      }
      <h1>Si le scanning ne fonctionne pas</h1>
      <form>
        <Input type={"text"} texte={"Code Du QrCode"}/>
        <ButtonBleu texte={"Valider"}/>
      </form>
      <TextRetour chemin={"/multiactivites"} />
    </div>
  );
};

export default CourseOrientation
