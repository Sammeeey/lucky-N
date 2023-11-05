// import './LuckyN.css'

import { useState } from "react"
import Dice from "./Dice"

function LuckyN({dieAmount=2, dieMaxValue=6, winningNum=10}) {
    const dieArr = [...Array(dieAmount).keys()]
    const [dice, setDice] = useState(dieArr.map(die => ({rollResult:null, dieMaxValue:dieMaxValue})))

    return (
        <>
        <Dice {...{dice}} />
        </>
    )
}

export default LuckyN
