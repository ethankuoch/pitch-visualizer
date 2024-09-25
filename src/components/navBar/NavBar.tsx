import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
