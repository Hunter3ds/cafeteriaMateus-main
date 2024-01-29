import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap' ;
import './AppNavBar.css'
import Search from '../Search'

const AppNavBar = ()=>{
    return(
    <Navbar variant='dar4k' bg='dark'>
        <Container> 
            <Nav className='me-auto'>
                <div id='container-img'>
                    <img src='/imagens/logoSemFundo.png' alt='Logo principal'/>   
                </div>
                
                <Nav.Link href="#bebidas">Bebidas</Nav.Link>
                <Nav.Link href="#doces">Doces</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
                <Search/>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default AppNavBar