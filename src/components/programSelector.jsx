import "./css/programselector.css";
import { useEffect } from "react";
export function ProgramSelector({ seleccion, setSeleccion, setNiveles }) {
  const handleSelectionChange = async (event) => {
    const newSelection = event.target.value;
    setSeleccion(newSelection);
    localStorage.setItem("programSelected", seleccion); // esto quizas lo deberia hacer con redux, pero yo lo guardo en variables en el localstore
    try {
      const response = await fetch(
        `http://localhost:3000/get-levels?programStringId=${newSelection}`
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();

      setNiveles(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  ///
  useEffect(() => {
    // Lógica para cargar los niveles iniciales cuando se monta el componente
    const loadInitialLevels = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/get-levels?programStringId=${seleccion}` //
        );

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log(data);
        setNiveles(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadInitialLevels();
  }, [seleccion, setNiveles]);

  return (
    <div className="programSelector">
      <select value={seleccion} onChange={handleSelectionChange}>
        <option value="647130e06b0c8618063f71c3">
          Ministerio de Educación República Argentina - Básico
        </option>

        <option value="647a3c8e7de9338cb6803d46">
          Ministerio de Educación Córdoba - Secundario - Orientación Ciencias Naturales
        </option>

        <option value="647a3c8e7de9338cb6803d45">
          Ministerio de Educación Córdoba - Secundario - Orientación Ciencias Sociales y Humanidades
        </option>

        <option value="647a3c8e7de9338cb6803d47">
          Ministerio de Educación Córdoba - Secundario - Orientación Economía y Administración
        </option>

        <option value="647130e06b0c8618063f71c4">
        Ministerio de Educación República Argentina - Programa Reducido
        </option>

        <option value="647130e06b0c8618063f71c5">
        Ministerio de Educación República Argentina - Programa Extendido
        </option>
      </select>
    </div>
  );
}
