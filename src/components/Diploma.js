import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  return (
    <>
      <h2>{ diploma.name } Modules</h2>
      
      <ul className='modules-list'>
        { diploma.modules.map ( modules => (
          <li className='modules' key={ modules.id }>
            <NavLink to={ modules.id } className={({ isActive }) => isActive ? 'modules-active' : null}>
              <p className='modules-name'>{ modules.id } | { modules.name }</p>
              <p> {modules.position}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
