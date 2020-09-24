import React from 'react'
import PlayerAndScore from "./PlayerAndScore" 

import score from "./score"

export default function Table() {
    return (
        <div className = "country-Table">
            <PlayerAndScore football ={score} />
            
        </div>
    )
}
