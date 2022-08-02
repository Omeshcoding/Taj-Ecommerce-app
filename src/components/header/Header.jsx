import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import Taj from '../../assets/Taj-ecom.png'
const Header = () => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img src={Taj} alt="taj" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    )
}
export default Header;