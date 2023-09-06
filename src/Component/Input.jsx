import React from 'react'
import { useState } from 'react';

export default function Input({type, texte, name}) {

    const [nvid , setnvid] = useState("");

    const handleChange = (event) => {
        setnvid(event.target.value)
    }

    return (
        <div>
        <input type={type} placeholder={texte} name={name} value={nvid} onChange={handleChange} class=" m-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-48 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
        </div>
    )
}