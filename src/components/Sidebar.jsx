import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Option 1',
          },
          {
            key: '2',
            label: 'Option 2',
          },
        ],
      },
      {
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Option 3',
          },
          {
            key: '4',
            label: 'Option 4',
          },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
];
const onClick = (e) => {
  console.log('click', e);
};
const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);
export default App;
// import React, { useState } from 'react';
// import Table from './Table.jsx'

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { SearchOutlined } from '@ant-design/icons';
// import { Button, Input, Select, Space } from 'antd'
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { buildTimeValue } from '@testing-library/user-event/dist/utils/index.js';
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const App1 = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minWidth: '100vh',
//         minHeight: '100vh',
//       }}
//     >
      
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
            
//           }}
          
//         > <div className='headerText font-bold mx-12'>Users
//             </div>
//         </Header>
//         <Content
//           style={{
//             background: 'white',
//             margin: '0 16px',
//           }}
//         >
             
//           <Breadcrumb
//             style={{
//                 background: 'white',
//               margin: '16px 0 ',
//             }}
//           >
        
   
//             <Breadcrumb.Item className=' ml-6' >  

//              {/* <Search prefix={<SearchOutlined />} placeholder=" Search" style={{ width: 350,height: 48 }} />  */}
//              <Input size="large" placeholder="  Search" prefix={<SearchOutlined />} style={{background: "#F9FAFB"}}/>
//             {/* </Space.Compact> */}
           
//             </Breadcrumb.Item>
         
//           </Breadcrumb>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             <Table />
         
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
        
//         </Footer>
//       </Layout>
//     </Layout>   
//   )
// }
// export default App1;