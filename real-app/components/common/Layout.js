import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    console.log(React.createContext)
    return (
    <>
        <Navbar/>
        <div className="main-temp">
        {children}
        </div>
        <Footer/>
    </>
)};

export default Layout;