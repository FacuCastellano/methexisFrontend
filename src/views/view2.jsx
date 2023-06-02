import { NavBar } from "../components/navbar";
import { ButtonsT1Table } from "../components/buttons-t1-table";
import { useState, useEffect } from "react";
import "./css-views/view1.css";
import { useNavigate } from "react-router-dom";

export function View2() {
  const [subjects, setSubjects] = useState([]);
  
  const navigate = useNavigate();
  const handleClickButtonssubjects = (buttonName) => {
    localStorage.setItem("subjectSelected", buttonName);
    navigate("/unit");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const program = localStorage.getItem("programSelected");
        const level = localStorage.getItem("levelSelected");

        const response = await fetch(
          `http://localhost:3000/get-subjects?programStringId=${program}&levelStringId=${level}`
        );
        const data = await response.json();
        setSubjects(data.subjects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="view1">
      <NavBar />
      <ButtonsT1Table
        buttonsT1={subjects}
        buttonFunctionOnClik={handleClickButtonssubjects}
      />
    </div>
  );
}
