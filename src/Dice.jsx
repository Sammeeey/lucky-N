// import './Dice.css'

import Die from "./Die"

function Dice({dice}) {
    // console.log(dice)

    return (
        <>
        {dice.map((die, dieIdx) =>
            <Die key={dieIdx} {...{dice, dieIdx}} />
        )}
        </>
    )
}

export default Dice
