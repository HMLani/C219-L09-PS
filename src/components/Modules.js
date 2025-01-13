import { useParams } from "react-router-dom";
import { getModules } from "../api";

export default function Modules() {
  const { modulesId, dipId } = useParams(); 
  const { name, desc, assigned } = getModules({ moduleId: modulesId, dipId });

  return (
    <>
      <h3>{ name }</h3>
      <p>{ desc }</p>

      <span>
        <h4>{ assigned.name }</h4>
        { assigned.position }
      </span>
    </>
  );
}
