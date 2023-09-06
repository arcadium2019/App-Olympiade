import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonBleu({texte, chemin}) {
  return (
    <div>
      <Link to={chemin}><button class=" m-2 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-48 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">{texte}</button></Link>
    </div>
  )
}