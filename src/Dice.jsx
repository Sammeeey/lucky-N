// import './Dice.css'

import Die from "./Die"

function Dice({dieAmount=2, dieMaxValue=6, winningNum=10}) {
    const dieArr = [...Array(dieAmount).keys()]

    return (
        <>
        {dieArr.map(die => <Die {...{dieMaxValue}} />)}
        </>
    )
}

export default Dice
