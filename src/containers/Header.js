import React from 'react';
import logo from '../logo.jpg';
const Header = () => (
    <div className="Header-container">
        <div className="Logo-and-header">
            <img className="App-logo" src={logo} alt="logo" />
            <h3 className="App-heading">Madeleine's Mind</h3>
        </div>
        <div className='Blog-posts-button'>
            <h3>Blog Posts</h3>
        </div>
    </div >
)
export default Header;