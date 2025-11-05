import leftArrow from "../../assets/left-arrow.svg"
import infoIcon from "../../assets/infoIcon.svg"
import { useState, useEffect } from "react";

function Tooltip({ text }) {
  return (
    <span className="tooltip-container">
      <span className="tooltip-icon"><img className="infoIcon" src={infoIcon}></img></span>
      <span className="tooltip-text">{text}</span>
    </span>
  );
}


function Calculator(){
    const totalMonths:number = 25*12;
    const interestRate:number = 1.04;
    let isQuestionsFilled:boolean = false;
    let isProposedDealFilled:boolean = false;
    let isEverythingFilled:boolean = false;

    const [requiredMortgage, setRequiredMortgage] = useState<number>();
    const [monthly, setMonthly] = useState<number>();
    const [mortgageDeal, setMortgageDeal] = useState<string>();

    const [buyerStatus, setBuyerStatus] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [income, setIncome] = useState("");
    const [dependents, setDependents] = useState("0");

    const [borrowLimit, setBorrowLimit] = useState<number>();

    const [propertyValue, setPropertyValue] = useState("");
    const [deposit, setDeposit] = useState("");

    
    if(buyerStatus != "" && employmentStatus != "" && income != ""){
        isQuestionsFilled = true;
    }

    if(propertyValue != "" && deposit != ""){
        isProposedDealFilled = true
    }

    if(isQuestionsFilled && isProposedDealFilled){
            isEverythingFilled = true;
    }

    useEffect (()=>{
        if(employmentStatus=="Employed" && isQuestionsFilled){
            const grossIncome = Number(income) * (1 - (Number(dependents)*0.05));
            const limit: number = grossIncome * 5;
            setBorrowLimit(limit);
        }else{
            setBorrowLimit(0);
        }

        if(isProposedDealFilled){
            if(deposit < propertyValue){
                setRequiredMortgage(Number(propertyValue) - Number(deposit));
            }
        }


        if(isEverythingFilled && requiredMortgage < borrowLimit){
            setMonthly((requiredMortgage/totalMonths)*interestRate);
            setMortgageDeal(`Your Mortgage Deal: £${monthly}/month for 25 Years`);
        }
    }, [
        income,
        dependents,
        deposit,
        propertyValue,
        isProposedDealFilled,
        requiredMortgage,
        isEverythingFilled,
        borrowLimit,
        monthly,
        totalMonths,
        interestRate,
    ]);

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
                <h1>Mortgage Calculator</h1>
                <p>You can borrow up to £{borrowLimit}</p>

                <form className="calculator-input-form">
                    <label for="property-value">
                        What is the Property Value?
                        <Tooltip text="How much does the house cost?"></Tooltip>
                    </label>
                    <input
                        type="number"
                        id="property-value"
                        name="property-value"
                        value={ propertyValue }
                        onChange={(e) => setPropertyValue(e.target.value)}
                    >
                    </input>

                    <label for="deposit">
                        What is the Deposit?
                        <Tooltip text="How much of your own money are you putting down"></Tooltip>
                    </label>
                    <input
                        type="number"
                        id="deposit"
                        name="deposit"
                        value={ deposit }
                        onChange={(e) => setDeposit(e.target.value)}
                    >
                    </input>
                </form>
                <h1>{mortgageDeal}</h1>
            </div>
        </>
    )
}

export default Calculator;