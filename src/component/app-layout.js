import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./header";
import Footer from "./footer";


const AppLayout = () => {
    
    
    return (
        <div className="site-wrapper">
            <AppHeader />
            <main>
                
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout