import leftArrow from "../../assets/left-arrow.svg"
import infoIcon from "../../assets/infoIcon.svg"
import { useState } from "react";

function Tooltip({ text }) {
  return (
    <span className="tooltip-container">
      <span className="tooltip-icon"><img className="infoIcon" src={infoIcon}></img></span>
      <span className="tooltip-text">{text}</span>
    </span>
  );
}


function Calculator(){
    const [buyerStatus, setBuyerStatus] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [income, setIncome] = useState("");
    const [dependents, setDependents] = useState("0");

    let isQuestionsFilled:boolean = false;

    if(buyerStatus != "" && employmentStatus != "" && income != ""){
        isQuestionsFilled = true;
    }

    return(
        <>
            <div className="calculator-questions">
                <h1>Personal Questions</h1>
                
                <form className="calculator-questions-form">
                    <label for="buyer-status">
                        Are You a First-Time Buyer or Mover?
                        <Tooltip text="A first-time buyer is someone purchasing their first home. A mover is someone relocating from a previous home."></Tooltip>
                    </label>
                    <select
                        id="buyer-status"
                        name="buyer-status"
                        value={ buyerStatus }
                        onChange={(e) => setBuyerStatus(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="First-Time Buyer">First-Time Buyer</option>
                        <option value="Mover">Mover</option>
                    </select>

                    <label for="employment-status">
                        What is Your Emplyment Status?
                        <Tooltip text="Employed means you have a regular job. Unemployed means you are not currently working."></Tooltip>
                    </label>
                    <select
                        id="employment-status" name="employment-status"
                        value = { employmentStatus }
                        onChange={(e) => setEmploymentStatus(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                    </select>

                    <label for="income">
                        What is Your Annual Income?
                        <Tooltip text="How much money do you earn in a year? This includes your yearly salary and other investments (Rent, Stocks etc.)."></Tooltip>
                    </label>
                    <input 
                        type="number"
                        id="income"
                        name="income"
                        value={ income }
                        onChange={(e) => setIncome(e.target.value)}
                        required
                    >
                    </input>

                    <label for="dependents">
                        How Many Dependents Do You Have?
                        <Tooltip text="How many people depend on you financially? This includes partners/spouses, children and elders."></Tooltip>
                    </label>
                    <select
                        id="dependents"
                        name="dependents"
                        value={ dependents }
                        onChange={(e) => setDependents(e.target.value)}
                        required
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                    </select>
                </form>
            </div>

            <button className={`calculator-next-button ${isQuestionsFilled ? "active":"inactive"}`}><img 
                src={leftArrow} 
                style={{
                    height: "10vh",
                    width: "10vw",
                    animationName: isQuestionsFilled ? "nextButton" : "nextButtonReversed",
                    animationDuration: "2s",
                    animationFillMode: "forwards",
                }}>
            </img></button>

            <div className="calculator-input">
                <h1>This is The Mortgage Calculator Itself.</h1>
                <p>It will not be accessible until the user has submitted the questions section first</p>
                <button className="calculator-calculate-button">Calculate</button>
            </div>
        </>
    )
}

export default Calculator;