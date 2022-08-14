import {ActiveLink} from "./ActiveLink"

import styles from "./Navbar.module.css"

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/aboutPage'
  },
  {
      text: 'Contact',
      href: '/contactPage'
  },
  {
      text: 'Pricing',
      href: '/pricingPage'
  },
];
export const Navbar = () => {
  return (
    <nav className={ styles['menu-container']}>

      {
        menuItems.map(item =>(
          <ActiveLink key={item.href} text={item.text} href={item.href} />
        ))
      }
      
      </nav>
  )
}
