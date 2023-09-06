import React from 'react'
import { Link } from 'react-router-dom'

export default function TextRetour({chemin}) {
  return (
    <div>
        <Link to={chemin}><p class="text-zinc-500">Retour</p></Link>
    </div>
  )
}
