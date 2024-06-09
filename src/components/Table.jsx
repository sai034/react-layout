import React, { useState, useEffect } from 'react';
import {ArrowDownOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../App.css';
import { Table } from 'antd';


const para = () =>{
  <p>Company <ArrowDownOutlined /></p>
}
const columns = [
  {
    title:'Company ↓',
    dataIndex: 'company',
    key: 'company',
    responsive:['sm'],
  
  },
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    responsive:['sm'],
   
  },
  {
    title:'Email Address',
    dataIndex:'email',
    key: 'email',
    responsive:['sm'],
  },
  {
    title: 'Company Details',
    render: (record) => (
      <React.Fragment>
        {record.company}
        <br />
       <p className='ml-8'> {record.name}</p>
        <br />
      </React.Fragment>
    
    ),
    responsive:['xs']
  },
  {
    title: 'Contact Details',
    render: (record) => (
      <React.Fragment>
        {record.email}
        <br />
        {record.phone}
        <br />
        {record.city}
        <br />
      </React.Fragment>
    
    ),
  
   responsive:['xs']
  
  },

  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
    responsive:['sm']
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    responsive:['sm']
  },
 
];







function App2() {
const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetchData()
  
  }, [])

  const fetchData = async () => {
    try {
      let GetUsers = await axios.get("https://jsonplaceholder.typicode.com/users") 
      console.log({GetUsers})
      GetUsers.data.forEach((record) => {
        record["company"] = (
          <div className='flex flex-row'>
            <img width="25px" className='rounded-full' src='https://s3-alpha-sig.figma.com/img/206a/13d4/5a3ffa4224f449a47fe10a3acfce841c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCTGMYX0Ky4JiYIKw5M1Lt7hKbwkWoCjqK6vlsv-I~Q84rzZybgEN7C5TnHis6qaqsHSX0XFTaPn03wrAZWmx5x43dPrt-~i93Vxw046KUnx~Xq2XieyHZOaD3Q-Yvnaqhlyw6cauu2ghUE9N87keoVpe2s9jZyp13sVEYtv89pxdkQYr--9svDGH42A7KhoFxaNx~xPGLyuKLoaNZERsxilqwcmqRPXRJOLnMoOLKDL1wVQ10R0MEn0BBOO9yY-xDWo1~rEP9bR8cBxESQ0NE66liXF2VydM63KJ2r3tvD4xXg5tsIHN851pPMG~3WUSqc4g2Qcc5BBOlDOistmgA__' />
             <p className='mt-2 ml-2'> Catalog</p>
          </div>
        )
        record["city"] = record.address.city
      })


      setUsers(GetUsers.data)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="App2">
    
      <Table  dataSource={users} columns={columns}  />;



    </div>
  );
}

export default App2;


 