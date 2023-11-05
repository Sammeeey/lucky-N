// import './LuckyN.css'

import Dice from "./Dice"

function LuckyN() {

    return (
        <>
        <Dice dieAmount={3} dieMaxValue={4} winningNum={4} />
        </>
    )
}

export default LuckyN
