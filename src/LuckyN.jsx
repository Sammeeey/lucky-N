// import './LuckyN.css'

import { useState } from "react"
import Dice from "./Dice"

function LuckyN({dieAmount=2, dieMaxValue=6, winningNum=10}) {
    const dieArr = [...Array(dieAmount).keys()]
    const [dice, setDice] = useState(dieArr.map(die => ({rollResult:null, dieMaxValue:dieMaxValue})))

    const rollDie = () => 
        setDice(prevDice => prevDice.map(die => (
            {...die, rollResult: Math.floor(Math.random() * dieMaxValue + 1)}
        )))

    return (
        <>
        <Dice {...{dice}} />
        <button type="button" onClick={rollDie}>roll die</button>
        </>
    )
}

export default LuckyN
