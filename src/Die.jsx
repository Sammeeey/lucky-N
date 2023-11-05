// import './Die.css'

function Die({dice, dieIdx}) {
    // console.log(dice)

    return (
        <>
        Die{dieIdx}: {dice[dieIdx].rollResult}
        </>
    )
}

export default Die
