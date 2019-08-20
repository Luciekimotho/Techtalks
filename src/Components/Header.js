import React from 'react'
import { Navbar } from 'reactstrap';

function Header(){
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Tech Talks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Header