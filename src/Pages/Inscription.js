import React, { useState } from 'react'
import './Style/Inscription.css'
import '../Component/Input'
import '../Component/ButtonBleu'
import '../Component/TextRetour'
import TextRetour from '../Component/TextRetour'
import axios from 'axios'

function Inscription() {

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [age, setAge] = useState("");
    const [mail, setMail] = useState("");
    const [mdp, setMdp] = useState("");
    const [sexe, setSexe] = useState("");
    const [departement, setDepartement] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [villeNaissance, setVilleNaissance] = useState("");
    const [depNaissance, setDepNaissance] = useState("");
    const [paysNaissance, setPaysNaissance] = useState("");
    const [numEtud, setNumEtud] = useState("");
    const [anneeEtude, setAnneeEtude] = useState("");
    const [role, setRole] = useState();

    const handleChangePrenom = (event) => {
        setPrenom(event.target.value)
    }
    const handleChangeNom = (event) => {
        setNom(event.target.value)
    }
    const handleChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleChangeMail = (event) => {
        setMail(event.target.value)
    }
    const handleChangeMdp = (event) => {
        setMdp(event.target.value)
    }

    const handleChangeNaissance = (event) => {
        setDateNaissance(event.target.value)
    }

    const handleChangeVilleNaissance = (event) => {
        setVilleNaissance(event.target.value)
    }

    const handleChangeDepNaissance = (event) => {
        setDepNaissance(event.target.value)
    }

    const handleChangePaysNaissance = (event) => {
        setPaysNaissance(event.target.value)
    }

    const handleChangeNumEtud = (event) => {
        setNumEtud(event.target.value)
    }

    const handleClickSexe = (event) => {
        setSexe(event.target.value);
        console.log(event.target.value)
    }

    const handleClickDep = (event) => {
        setDepartement(event.target.value);
        console.log(event.target.value)
    }

    const handleClickAnneeEtude = (event) => {
        setAnneeEtude(event.target.value);
        console.log(event.target.value)
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();

        if(anneeEtude > 1){
            setRole("4")
        }else{
            setRole("1")
        }

        axios({
            method: 'post',
            url: 'http://localhost:1337/api/users', 
            data: {
                username: mail,
                email: mail,
                password: mdp,
                confirmed: "true",
                role: role,
                Nom: nom,
                Prenom: prenom,
                Civilite: sexe,
                Age: age,
                Departement: departement,
                DateNaissance: dateNaissance,
                NumEtud: numEtud,
                VilleNaissance: villeNaissance,
                DepNaissance: depNaissance,
                PaysNaissance: paysNaissance,
                AnneeEtude: anneeEtude
            },
            headers: {'Authorization': "bearer c0e44419d02b83bbdcf9b6e06f0faf94aa06b18c370fe4c6ea270c5a5128e1d7a7839d8dc94649aa53644c82969b4a117ccafc72cddad38e03664f6e74a718d82b1ea85de6b293bef3b058ce1b88dc686cf9b28ac9d5ca1d73065ce5b8be8e93f7021d56f9384826a420353b96c49202efab3e6e4803ae8fbb57f00e581ef3c8"} //token d'inscription
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(error))

        return false;
    }

    return (
        <div className='Inscription' class="flex h-screen pb-20">
            <div class="m-auto items-center text-center">
                <h1 class="mt-2 mb-4 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">Inscription</h1>
                <form>
                <div class="inscription-input">
                        <p>Num Etudiant :</p>
                        <input type="number" name="numEtud" value={numEtud} onChange={handleChangeNumEtud} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Prénom :</p>
                        <input type="text" name="prenom" value={prenom} onChange={handleChangePrenom} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Nom de famille :</p>
                        <input type="text" name="nom" value={nom} onChange={handleChangeNom} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Age :</p>
                        <input type="number" name="age" value={age} onChange={handleChangeAge} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Date de naissance :</p>
                        <input type="date" name="Naissance" value={dateNaissance} onChange={handleChangeNaissance} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Ville de naissance :</p>
                        <input type="text" name="villeNaissance" value={villeNaissance} onChange={handleChangeVilleNaissance} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Département de naissance :</p>
                        <input type="text" name="depNaissance" value={depNaissance} onChange={handleChangeDepNaissance} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Pays de naissance :</p>
                        <input type="text" name="paysNaissance" value={paysNaissance} onChange={handleChangePaysNaissance} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Civilité :</p>
                        <select onClick={handleClickSexe} name="sexe" class="m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-46 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-baseline focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="">--Choisie ta civilité--</option>
                            <option onClick={handleClickSexe} value="Femme">Femme</option>
                            <option onClick={handleClickSexe} value="Homme">Homme</option>
                        </select>
                    </div>
                    <div class="inscription-input">
                        <p>Département :</p>
                        <select onClick={handleClickDep} name="departement" class="m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-70 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-baseline focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="">--Choisie ton département d'étude--</option>
                            <option onClick={handleClickDep} value="Génie Biologique">Génie Biologique</option>
                            <option onClick={handleClickDep} value="Génie Civil & Construction Durable">Génie Civil & Construction Durable</option>
                            <option onClick={handleClickDep} value="Génie Mécanique et Productique">Génie Mécanique et Productique</option>
                            <option onClick={handleClickDep} value="Gestion des Entreprise et Administation">Gestion des Entreprise et Administation</option>
                            <option onClick={handleClickDep} value="Techique de Commercialisation">Techique de Commercialisation</option>
                            <option onClick={handleClickDep} value="Informatique">Informatique</option>
                        </select>
                    </div>
                    <div class="inscription-input">
                        <p>Année D'étude :</p>
                        <select onClick={handleClickAnneeEtude} name="departement" class="m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-70 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-baseline focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="">--Choisie ton année d'étude--</option>
                            <option onClick={handleClickAnneeEtude} value="1">But 1</option>
                            <option onClick={handleClickAnneeEtude} value="2">But 2</option>
                            <option onClick={handleClickAnneeEtude} value="3">But 3</option>
                        </select>
                    </div>
                    <div class="inscription-input">
                        <p>Email Etudiant :</p>
                        <input type="text" name="mail" value={mail} onChange={handleChangeMail} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <div class="inscription-input">
                        <p>Mot de passe :</p>
                        <input type="text" name="mdp" value={mdp} onChange={handleChangeMdp} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                    </div>
                    <button onClick={handleSubmit} class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Inscription</button>
                </form>
                <TextRetour chemin={"/"}/>
            </div>
        </div>
    )
}

export default Inscription
