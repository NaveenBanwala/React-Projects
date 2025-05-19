import styles from "./CalculatorButtons.module.css";

function CalculatorButton({buttonsNames}){

    return (
        <div className={styles.CalculatorButtons}>

            {buttonsNames.map((buttonName) =>(
                <button key={buttonName} className="btn btn-primary">
                    {buttonName}
                </button>
            ))}
            </div>
    );
}
export default CalculatorButton;