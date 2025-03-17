import { Link, Outlet, useLocation } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='app-body'>
      <nav className='app-nav-bar'>
        <span>Lista de usuarios</span>
      </nav>
      <div className='app-main-container'>
        <aside className='app-nav-menu'>
          <ul>
            <MenuOption to='/add_user' title='Añadir usuario' />
            <MenuOption to='/users_list' title='Usuarios' />
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}

export default App

type Routes = '/users_list' | '/add_user';

interface MenuOptionProps {
  to: Routes;
  title: string;
}
const MenuOption: React.FC<MenuOptionProps> = ({ to, title }) => {
  const location = useLocation();
  const path = location.pathname
  return <li className={`${path === to || (path === '/' && to === '/add_user') ? 'selected-li' : ''}`}><Link to={to}><span>{title}</span></Link></li>
}
