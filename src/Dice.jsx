// import './Dice.css'

import Die from "./Die"

function Dice({dice}) {
    // console.log(dice)

    return (
        <>
        {dice.map((die, dieIdx) =>
            <Die {...{dice, dieIdx}} />
        )}
        </>
    )
}

export default Dice
