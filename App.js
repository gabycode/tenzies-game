import React from "react"
import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"


export default function App() {
    const [dice, setDice] = useState(allNewDice())
    
    function allNewDice() {
        const diceArr = []
        for (let i=0; i<10; i++) {
            diceArr.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return diceArr
    }
    console.log(allNewDice())

    function rollDice() {
        setDice(allNewDice)
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map( die => {
            return die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld}/>)


    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice-btn">Roll</button>
        </main>
    )
}