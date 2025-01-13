import { getDiplomas } from '../api';
import { Outlet, NavLink } from 'react-router-dom';

export default function Diplomas() {
  const diploma = getDiplomas();

  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className='diplomas'>
        {diploma.map( dip => (
          <li key = {dip.id}>
            <NavLink
              to={dip.id}
              className={({ isActive}) => isActive ? 'diploma-active' : null}
            >
              { dip.name }
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
