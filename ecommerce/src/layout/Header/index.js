import React,  { useState } from 'react';
import { Collapse, Jumbotron, Nav, Navbar, 
    NavbarBrand, NavbarToggler, NavItem, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
//import {Form, Label, FormGroup, Input} from 'reactstrap';
import FormLogin from './FormLogin';
//import SignIn from './testeForm';
//import {iconeSpan} from  './ButtonLogin';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        
    }
    handleLogin(event) {
        this.toggleModal();
        
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            
        event.preventDefault();

    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }   

      handleLogout = (event) =>{
          event.preventDefault();
        localStorage.removeItem('username');
        localStorage.removeItem('remember');
        localStorage.removeItem('logado');
    } 
  
    render(){
        return(
            <React.Fragment>        
                <Navbar className="navbar-color" expand="lg">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>                
                            <NavbarBrand className='mr-auto' href='/'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} height="30" width="41" alt='Ristorante Con Fusion' />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem className="ml-3">
                                        <NavLink className='nav-link nav-estilo' to='/home'>
                                            <span className='fa fa-home fa-lg mr-1'/>
                                              Home
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem className="ml-3">
                                        <NavLink className='nav-link nav-estilo' to='/aboutus'>
                                            <span  className=' fa fa-info fa-lg mr-1'/>
                                             About Us
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem className="ml-3">
                                        <NavLink className='nav-link nav-estilo' to='/menu'>
                                            <span className='fa fa-list fa-lg mr-1'/>
                                            Menu
                                        </NavLink>
                                    </NavItem>
        
                                    <NavItem className="ml-3"> 
                                        <NavLink className='nav-link nav-estilo' to='/contactus'>
                                            <span className='fa fa-address-card fa-lg mr-1'/>
                                             Contact Us                                    
                                        </NavLink>
                                    </NavItem>                            
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                        <NavItem>
                                        <Button outline onClick={localStorage.getItem('logado')? this.handleLogout : this.toggleModal}>
                                            <span
                                               
                                                className = {localStorage.getItem('logado') ? "fa fa-sign-out fa-lg"
                                                                                             :  "fa fa-sign-in fa-lg"}                                                
                                            >
                                            </span>
                                            {localStorage.getItem('logado') ? "Logout" : "Login"}

                                        </Button>
                                        </NavItem>
                                    </Nav>
        
                            </Collapse>                
                    </div>
                </Navbar>
        
                <Jumbotron>
                    <div className='container'>
                        <div className='row-row-header'>
                            <div className='col-6 col sm-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p className='text-justify'>We take inspiration from the World's best cuisines,
                                 and create a unique fusion experience. Our lipsmacking 
                                 creations will tickle your culinary senses!</p>
        
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen} >
                <ModalHeader >Login</ModalHeader>
                <ModalBody> 
                    <FormLogin toggleModal= {() => this.toggleModal()}/>          
                </ModalBody>
            </Modal>
            </React.Fragment>
            );
        }   
    

}; export default Header;