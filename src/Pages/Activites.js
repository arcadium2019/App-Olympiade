import React from 'react'
import './Style/Activites.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { accountService } from '../_services/acount.service'

function Activites() {

  let token = accountService.getToken()

  let navigate = useNavigate();

  axios({
    method:'get',
    url: 'http://localhost:1337/api/activites?populate=*',
    headers: {'Authorization': "bearer "+token}
    })
  .then(function (response) {
    console.log(response)
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/users/me?populate=*',
      headers: {'Authorization': "bearer "+token}
      
  }).then((result) => {
      console.log(result)
      console.log(result.data.equipe.id)
      accountService.saveIdEquipe(result.data.equipe.id)

      let idEquipe = accountService.getIdEquipe()

      axios({
        method: 'get',
        url: 'http://localhost:1337/api/equipes/'+idEquipe,
        headers: {'Authorization': "bearer "+token}
      })
      .then(res => {
        console.log("nom d'equipe = "+res.data.data.attributes.Nom)
          accountService.saveNomEquipe(res.data.data.attributes.Nom)
      })
      .catch(err => {
          console.log(err)
      })
  }).catch((err) => {
      console.log(err)
  })
  })
  .catch(error => navigate("../participant"))

  const handleClick = (event) => {
    console.log(event.target.value);
    navigate("../activiteunique/"+event.target.value)
  }

  return (
    <div className='Activites'>

      <Link to="/connexion" className='Back'><button class=" mt-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-80 h-10 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">Retour</button></Link>
      <Link to="/courseorientation" className='Link'><button class=" py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"><b>Course d'orientation</b></button></Link>
      <Link className='Link'><button onClick={handleClick} value='Tire Au But' class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Tirs au BUT</button></Link>
      <Link className='Link'><button onClick={handleClick} value='Course de relai' class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Course de relais</button></Link>
      <Link className='Link'><button onClick={handleClick} value='Chamboule tout'class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Chamboule tout</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Parcours a l'aveugle" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Parcours a l'aveugle</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Tire au panniers" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Tir au panier</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Molkki" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Molkky</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Balle Pong" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Balles pong</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Sac à Patates" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Sac à patates</button></Link>
      <Link className='Link'><button onClick={handleClick} value="Balle au prisonnier" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Balle au prisonnier</button></Link>
      <Link className='Link'><button onClick={handleClick} Value="Question pour un champion" class="py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Questions pour un champion</button></Link>

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
  )
}

export default Activites
