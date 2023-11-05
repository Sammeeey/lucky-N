// import './Dice.css'

import Die from "./Die"

function Dice({dieAmount, winningNum}) {
    const dieArr = [...Array(dieAmount).keys()]

    return (
        <>
        {dieArr.map(die => <Die />)}
        </>
    )
}

export default Dice
