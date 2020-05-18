import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Manage Member</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                         <Link to="/" className="nav-link">Information </Link>
                        </li>
                        <li className="navbar-item">
                         <Link to="/information" className="nav-link">Add Information</Link>
                        </li>
                        <li className="navbar-item">
                         <Link to="/member" className="nav-link">Add Member</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}