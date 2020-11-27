import React, {Component} from 'react'
import {Nav, Navbar} from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img alt="logo" src="img/logo.png" width="25" height="25"/>
                        {' '}
                        Surge Analytics Inc.
                    </Navbar.Brand>
                </Navbar>
            </header>
        )
    }
}

export default NavBar
