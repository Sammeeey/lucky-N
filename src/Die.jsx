// import './Die.css'

function Die({dice, dieIdx}) {
    console.log(dice)
    console.log(dieIdx)

    return (
        <>
        Die max value={dice[dieIdx].dieMaxValue}
        </>
    )
}

export default Die
