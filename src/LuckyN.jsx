// import './LuckyN.css'

import { useEffect, useState } from "react"
import Dice from "./Dice"

function LuckyN({dieAmount=2, dieMaxValue=6, winningNum=10}) {
    const dieArr = [...Array(dieAmount).keys()]
    const [dice, setDice] = useState(dieArr.map(die => ({rollResult:null, dieMaxValue:dieMaxValue})))
    const [resultSum, setResultSum] = useState(null)
    const [userWinningNum, setUserWinningNum] = useState(winningNum)

    const rollDie = () => 
        setDice(prevDice => prevDice.map(die => (
            {...die, rollResult: Math.floor(Math.random() * dieMaxValue + 1)}
        )))

    const getResultSum = () => {
        const rollSum = dice.reduce((sum, currentValue) => sum + currentValue.rollResult, 0)
        setResultSum(prevResultSum => prevResultSum = rollSum)
        console.log('rollSum', rollSum)
    }

    useEffect(getResultSum, [dice, userWinningNum])

    return (
        <>
        <div>Which sum of roll results should win?
            <input type="number" name="winningNum" id="winningNum" placeholder="winning number" value={userWinningNum} onChange={(e) => setUserWinningNum(+e.target.value)} />
        </div>
        <div>resultSum: {resultSum}</div>
        <div>{resultSum === userWinningNum && 'Game Won!'}</div>
        <Dice {...{dice}} />
        <button type="button" onClick={rollDie}>roll die</button>
        </>
    )
}

export default LuckyN
