import {Link, useLocation} from 'react-router-dom'

const navLinks = [
  {title: 'Main', path: '/'},
  {title: 'Login', path: '/login'},
  {title: 'Users', path: '/users'}
]

export default function Navigation() {
  const {pathname} = useLocation()
  return (
    <nav>
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navLinks.map(link => (
            <li
              key={link.title}
              className={pathname === link.path ? 'active' : ''}
            >
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
