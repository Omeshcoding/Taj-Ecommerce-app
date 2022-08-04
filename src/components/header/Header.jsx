import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


import './Header.scss';
import Taj from '../../assets/Taj-ecom.png'


const Header = ({ currentUser}) => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img src={Taj} alt="taj" />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ? 
                        <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                        : <Link className='options' to='/signin'>sign in</Link>
                }
            </div>
        </div>
    )
}
export default Header;