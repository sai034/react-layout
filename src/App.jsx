import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import App1 from './components/Layout.jsx';
import axios from 'axios';
import { Image } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout.js';
import { Button } from 'antd';
function App() {
 
  

 return (
 <div>
 
    {/* <h1> hello</h1> */}
    <div className='cursor-pointer rounded-full hidden lg:block mt-6 mr-16 pr-1 pl-1 text-green-500 float-right'>
    <BellOutlined style={{fontSize: "20px"}}/>
    </div>
    <div className='cursor-pointer rounded-full flex-none lg:hidden mt-6 ml-12 pr-1 pl-1 text-green-500 float-right'>

    <BellOutlined style={{fontSize: "20px"}}/>
    </div>
  

    <App1 /> 
</div>

 );

}
export default App;
