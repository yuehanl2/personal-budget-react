import React from 'react';
import { Link } from 'react-router-dom';
//import Budget from '../Components/Budget';
//import BudgetInput from '../Components/BudgetInput'

function Menu() {
  return (
<nav>
        <ul>

            <nav
                role="navigation"
                aria-label="Main Menu"
                itemScope
                itemType = "https://schema.org/SiteNavigationElement">


            <li><Link itemProp= "url" to ="/" rel='external no follow'> Home </Link></li>
            <li><Link itemProp="url" to ="/about">About</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
            </nav>
        </ul>
    </nav>
  );
}

export default Menu;