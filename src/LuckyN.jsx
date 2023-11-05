// import './LuckyN.css'

import { useEffect, useState } from "react"
import Dice from "./Dice"

function LuckyN({dieAmount=2, dieMaxValue=6, winningNum=10}) {
    const dieArr = [...Array(dieAmount).keys()]
    const [dice, setDice] = useState(dieArr.map(die => ({rollResult:null, dieMaxValue:dieMaxValue})))
    const [resultSum, setResultSum] = useState(null)

    const rollDie = () => 
        setDice(prevDice => prevDice.map(die => (
            {...die, rollResult: Math.floor(Math.random() * dieMaxValue + 1)}
        )))

    const getResultSum = () => {
        const rollSum = dice.reduce((sum, currentValue) => sum + currentValue.rollResult, 0)
        setResultSum(prevResultSum => prevResultSum = rollSum)
        console.log('rollSum', rollSum)
    }

    useEffect(getResultSum, [dice, winningNum])

    return (
        <>
        <div>winningNum: {winningNum}</div>
        <div>resultSum: {resultSum}</div>
        <div>{resultSum === winningNum && 'Game Won!'}</div>
        <Dice {...{dice}} />
        <button type="button" onClick={rollDie}>roll die</button>
        </>
    )
}

export default LuckyN
