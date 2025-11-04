import leftArrow from "../../assets/left-arrow.svg"

function Calculator(){
    return(
        <>
            <div className="calculator-questions">
                <h1>This is where the Mortgage Calculator's Questions will be.</h1>
                <p>Any complex terminology can be explained when the user clicks an interactive question mark</p>
            </div>

            <button className="calculator-next-button"><img src={leftArrow}></img></button>

            <div className="calculator-input">
                <h1>This is The Mortgage Calculator Itself.</h1>
                <p>It will not be accessible until the user has submitted the questions section first</p>
                <button className="calculator-calculate-button">Calculate</button>
            </div>
        </>
    )
}

export default Calculator;