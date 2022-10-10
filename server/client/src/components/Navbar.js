import React, { useState, useEffect, useContext } from 'react';
import "../App.css";
import { Button, Select, Steps, Form, Tabs, Typography, Layout } from "antd";
import { SiWindowsxp, SiLinux, SiApple } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { userContext } from '../App';
// import React from 'react';
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import { Col, Row, Button, Select, Steps, Form, Tabs, Typography, Layout, Image } from "antd";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    const { state, dispatch } = useContext(userContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    {/* <Link to="/login">
            <Button style={{ background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>LogIn</p></Button>
          </Link>

          <Link to="signup">
            <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>SignUp</p></Button>
          </Link> */}


                </>
            )
        } else {
            return (
                <>
                    <Link to="/" className='cursor-pointer  rounded-sm ml-4' >
                        <img className='cursor-pointer w-[48px] rounded-sm '
                            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-coopera-web-design-12.png"
                            target="_blank"
                        />
                    </Link>


                    <div className='justify-end space-x-4 sm:px-4 px-3 mt-1.5 mr-4' >

                        <Link to="/login" >
                            <Button style={{ background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>Login</p></Button>
                        </Link>

                        <Link to="/signup">
                            <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>SignUp</p></Button>
                        </Link>
                    </div>
                    {/* <Link to="logout">
            <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>LogOut</p></Button>
          </Link> */}
                </>
            )
        }
    }
    return (
        <>
            <div className='m-0 p-0 box-border w-[100%] h-[100vh] absolute '>

                <nav className='rounded-sm   space-x-2  mt-3 h-[50px] w-auto flex justify-between content-center'>

                    <RenderMenu />
                    {/* <Link to="/" className='cursor-pointer w-13 rounded-sm' >
                        <img className='cursor-pointer w-[48px] rounded-sm '
                            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-coopera-web-design-12.png"
                            target="_blank"
                        />
                    </Link>

                    <div className='justify-end space-x-9 sm:px-8 px-4' >
                        <Link to="/login" >
                            <Button style={{ background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>Login</p></Button>
                        </Link>

                        <Link to="/signup">
                            <Button style={{ marginLeft: "8px", minWidth: "", background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>SignUp</p></Button>
                        </Link>
                    </div> */}
                </nav>
            </div >
        </>
    )
}

export default Navbar