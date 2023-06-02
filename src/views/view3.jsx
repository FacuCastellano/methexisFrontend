import { NavBar } from "../components/navbar";
import { Unit } from "../components/unit";
import "./css-views/view1.css";
import { useState, useEffect } from "react";


export function View3() {
  const [allUnits, setAllUnits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const program = localStorage.getItem("programSelected");
        const level = localStorage.getItem("levelSelected");
        const subject = localStorage.getItem("subjectSelected");

        const response = await fetch(
          `http://localhost:3000/get-units?programStringId=${program}&levelStringId=${level}&subjectStringId=${subject}`
        );
        const data = await response.json();
        setAllUnits(data.units);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view1">
      <NavBar />

      {allUnits.map((unit) => {
        return <Unit unitName={unit[0]} topics={unit.slice(1)} key={unit[0]} />;
      })}
    </div>
  );
}
