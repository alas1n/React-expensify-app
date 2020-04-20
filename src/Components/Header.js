import React from 'react'
import {NavLink } from 'react-router-dom'



const Header = () => (
    <div>
        <h1> Expense App </h1>
        <NavLink to="/" activeClassName="is-active" exact> home </NavLink> <br></br>
        <NavLink to="/create" activeClassName="is-active"> create </NavLink> <br></br>
        <NavLink to="/edit" activeClassName="is-active"> edit </NavLink> <br></br>
        <NavLink to="/help" activeClassName="is-active"> help </NavLink> <br></br>
    </div>
)

export default Header