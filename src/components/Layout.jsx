import React from 'react';
import { useState } from 'react';
import Table from './Table.jsx'
import { LaptopOutlined, NotificationOutlined, UserOutlined,BellOutlined,MenuFoldOutlined,DownOutlined  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Image,Button,Row,Col,Drawer } from 'antd';
import { CommentOutlined,SearchOutlined,UsergroupDeleteOutlined,VideoCameraOutlined,UploadOutlined } from '@ant-design/icons';
import { Input, } from 'antd'

const { Header, Content, Sider } = Layout;
<BellOutlined />

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
          style={{
            padding: 5,
            paddingLeft:10,
            alignItems:'right',
            background: colorBgContainer,
            
          }}
          
        > 
        <div className='flex flex-row'>
       <Image 
className='rounded-full hidden lg:block'
width={60}
height={60}
 
// <p className=' mt-2 ml-3 text-gray-500'>Admin@review</p>
src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jL-bUidq5M16EEZfHpFAmmBUEo1rC5bBx2zl~bqpaHPAm~HjhmMtpgQCZYDGo-n5jUpw2miEOMub3U7AmLtKmAedG7unfpYK5hY7e4NwFSJqu8BYeuzhZ3PfEOnJ4TD-smwYCpTpOWppuCgUttfT4VBEYs1K0OjWRpp9GtuhYm~XHsBxQi97F2uKq0108EO~dDytD5F39obWk7krVsezPtH-KYTgd7lZSCKSc~pmIoX4r46k6jSTLwtR3EuMqTcJ9PNQjLg1ayEPZclEtEbKCyuL5G2kaFeZd5UBbYSwAdprVixU5v1fkkVIXMm3s0F~SwW-lPuCjVVNfryGEEwk~Q__"
>

  </Image>
  
 
<p className='hidden lg:block font-bold mb-1 ml-3'>Designer</p>
<p className='w-2 h-2 ml-2 hidden lg:block'><DownOutlined /></p>
<p className='flex-none lg:hidden ml-4'><MenuFoldOutlined   onClick={showDrawer}  /></p>


 <div className='flex flex-row'>  

 <p className='headerText ml-32 font-bold mx-4'>Users</p>
 
 
 
    </div>

    </div>
        </Header>
       
  
      <Layout>

      <Sider className='hidden lg:block mt-1'style={{  background: colorBgContainer,}}>
        <div className="demo-logo-vertical" />
        
        <p className=' mb-4 ml-20 text-gray-500'>Admin@review</p> 
        <Menu
          style={{background:'white'}}
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={[
            {
              key: '1',
              icon: <LaptopOutlined />,
              label: 'My Work',
            },
            {
              key: '2',
              icon: <UsergroupDeleteOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <CommentOutlined />,
              label: 'Comments',
            },
            {
                key: '4',
                icon: <UserOutlined />,
                label: 'Designers',
              },
          ]}
        />
      </Sider>

      <Drawer onClose={onClose} open={open}   placement="left">
    
      <img
className='ml-4 rounded-full '
width="60px"
height="40px"
 
// <p className=' mt-2 ml-3 text-gray-500'>Admin@review</p>
src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jL-bUidq5M16EEZfHpFAmmBUEo1rC5bBx2zl~bqpaHPAm~HjhmMtpgQCZYDGo-n5jUpw2miEOMub3U7AmLtKmAedG7unfpYK5hY7e4NwFSJqu8BYeuzhZ3PfEOnJ4TD-smwYCpTpOWppuCgUttfT4VBEYs1K0OjWRpp9GtuhYm~XHsBxQi97F2uKq0108EO~dDytD5F39obWk7krVsezPtH-KYTgd7lZSCKSc~pmIoX4r46k6jSTLwtR3EuMqTcJ9PNQjLg1ayEPZclEtEbKCyuL5G2kaFeZd5UBbYSwAdprVixU5v1fkkVIXMm3s0F~SwW-lPuCjVVNfryGEEwk~Q__"
/>
<p className='ml-4 text-gray-700 '>Designer</p>
<p className='ml-4 mb-4 text-gray-700 '>Admin@review</p>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={[
            {
              key: '1',
              icon: <LaptopOutlined />,
              label: 'My Work',
            },
            {
              key: '2',
              icon: <UsergroupDeleteOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <CommentOutlined />,
              label: 'Comments',
            },
            {
                key: '4',
                icon: <UserOutlined />,
                label: 'Designers',
              },
          ]}
        />
      </Drawer>
    
        <Layout
          style={{
            padding: '0 24px 24px',
            background: 'white'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            
            }}
          >
          <Breadcrumb.Item className=' ml-6' >  
  
{/* <Search prefix={<SearchOutlined />} placeholder=" Search" style={{ width: 350,height: 48 }} />  */}



{/* </Space.Compact> */}

</Breadcrumb.Item>

          </Breadcrumb>
          <Content
            style={{
             
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          <div className='flex flex-row hidden lg:block'>
            <Input size="large"  placeholder="  Search"  prefix={<SearchOutlined />} style={{background: "#F9FAFB",
              width:252,
              height:48
              
            }}  /> 
            <Button  size="large" className='rounded-full hidden lg:block mb-2 marg float-right text-white'> + Add User</Button>
            </div> 
            < Input size ="large" className="rounded-full flex-none lg:hidden" placeholder=" Search" Search prefix={<SearchOutlined />} style={{background: "#F9FAFB",
              width:100,
              height:48}} /> 
                   <br />
<Button  size="small" className='rounded-full flex-none lg:hidden mt-4 mr-24 marg1 float-left text-white'> + Add User</Button>
          
               <Table />
               
           </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
