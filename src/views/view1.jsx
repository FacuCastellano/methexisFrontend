import { NavBar } from "../components/navbar";
import { ButtonsT1Table } from "../components/buttons-t1-table";
import { ProgramSelector } from "../components/programSelector";
import "./css-views/view1.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function View1() {
  const [niveles, setNiveles] = useState([]);
  const [seleccion, setSeleccion] = useState(localStorage.getItem("programSelected") || "647130e06b0c8618063f71c3");//
  localStorage.setItem("programSelected", seleccion);
  const navigate = useNavigate();
  
  const handleClickButtonsLevels = (buttonName) => {
    localStorage.setItem("levelSelected", buttonName);
    navigate("/subject");
  };

  return (
    <div className="view1">
      <NavBar />
      <ProgramSelector
        seleccion={seleccion}
        setSeleccion={setSeleccion}
        setNiveles={setNiveles}
      />
      <ButtonsT1Table
        buttonsT1={niveles}
        buttonFunctionOnClik={handleClickButtonsLevels}
      />
    </div>
  );
}
