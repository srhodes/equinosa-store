import { useState } from 'react'
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem 
} from 'reactstrap'
import { NavLink } from 'react-router-dom' 
import EquinosaLogo from '../app/assets/img/EquinosaRedLogo.png'
import { EQUINOSAS } from '../app/shared/EQUINOSAS'

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={EquinosaLogo} alt='equinosa logo' />
                <h1>Equinosa</h1>
            </NavbarBrand>
            <Nav className='ms-auto' navbar>
            <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-list fa-lg' /> Directory
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg' /> About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header