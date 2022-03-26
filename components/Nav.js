import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'


export const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
            <Link href='/about'>about</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Nav