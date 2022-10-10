import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Col, Row, Button, Select, Steps, Form, Tabs, Typography, Layout, Image } from "antd";
import Navbar from './Navbar';

const Index = () => {
    return (
        <>
            <div className='m-0 p-0 box-border w-[100%] h-[100vh] absolute'>

                <Navbar />
                <div className=' px-8'>
                    <p className=" max-w-[758px] sm:text-[41px] text-3xl sm:py-6 sm:pb-[12px] mb-[12px]   sm:leading-[45px] font-sans  not-italic font-bold  text-white  order-none grow-0 mt-[90px]  ">
                        Download OS According to your choice
                    </p>
                    <p className=" max-w-[1246px] text-white  font-sans not-italic  tracking-[-0.2px] font-normal text-base indent-14 mt-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt</p>
                </div>
                <div className='justify-center flex mt-6'>
                    <Link to="/login" >
                        <Button style={{ background: "#FC6C00", borderColor: "black", borderRadius: "4px", width: "auto", height: "35px" }}><p className='text-white '>Start Your  Journey</p></Button>
                    </Link>
                </div>

            </div >
        </>
    )
}

export default Index