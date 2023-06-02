import { ButtonT1 } from "./button-t1";
import "./css/buttons-t1-table.css";
export function ButtonsT1Table({ buttonsT1, buttonFunctionOnClik}) {
  return (
    <div className="buttons-t1-table">
      {buttonsT1.map((level) => {
        return <ButtonT1 buttonName={level} key={level} onClick={buttonFunctionOnClik}/>;
      })}
    </div>
  );
}
