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
    <div className='rounded-full hidden lg:block mt-6 mr-12 pr-1 pl-1 w-7 h-7 bg-gray-200 text-green-500 float-right'>
    <BellOutlined />
    </div>
    <div className='rounded-full flex-none lg:hidden mt-6 mr-2 ml-24 pr-1 pl-1 w-7 h-7 bg-gray-200 text-green-500 float-right'>

    <BellOutlined />
    </div>
  

    <App1 /> 
</div>

 );

}
export default App;
