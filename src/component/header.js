
import React from "react"
import { NavLink } from "react-router-dom"
import HomeCarousel from './home-carousel';
import { Button } from "react-bootstrap";

import SearchModal from './search-modal';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { appSearchAction } from "../store/search-slice";

const AppHeader = () => {

    const openSearchModal = useSelector(state => state.appSearch.openSearchModal)
    const dispatch = useDispatch();

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

    return (
        <>
            <header>
                {openSearchModal ? <SearchModal /> : ""}
            
                <NavLink className="site-logo" to="/">#Farzi</NavLink>
                <Button variant="primary" onClick={ () => 
                    dispatch(appSearchAction.showSearchModal()) 
                    // setShowSearchModal(true)
                    }>
                    Find your Farzi
                </Button>
                <div>
                    <NavLink to="/browse/android"
                        style={({ isActive }) => isActive ? activeStyles : null}> Android</NavLink>
                    <NavLink to="/browse/ios"
                        style={({ isActive }) => isActive ? activeStyles : null}> iOS</NavLink>
                    <NavLink to="/browse/web"
                        style={({ isActive }) => isActive ? activeStyles : null}> Web</NavLink>
                </div>
                <nav>
                    <NavLink to="/about"
                        style={({ isActive }) => isActive ? activeStyles : null}> About</NavLink>
                    <NavLink to="/products"
                        style={({ isActive }) => isActive ? activeStyles : null}>Products</NavLink>
                </nav>
        </header>
        <HomeCarousel/>
      </>
    )
}

export default AppHeader