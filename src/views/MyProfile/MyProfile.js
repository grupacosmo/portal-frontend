import React from 'react';
import './style.css';
import {Layout, Space, Row, Col, Menu} from 'antd';
import SiderList from "../../components/SiderList";
import {TeamOutlined,FileTextOutlined} from '@ant-design/icons';

const {Header, Content, Footer} = Layout;

const projectsListData = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const teamsListData = [
    'Webdev',
    'Artificial intelligence',
    'Hardware',
];

const MyProfile = () => {
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    <h1>My Profile</h1>
                    <Row>
                        <Col xs={24} md={8} lg={6}>
                            <div>
                                <Space size="middle" direction="vertical" style={{display:"inline"}}>
                                    <SiderList data={projectsListData} header="Moje projekty" icon={<FileTextOutlined style={{marginRight: 8}}/>}/>
                                    <SiderList data={teamsListData} header="Moje zespoły" icon={<TeamOutlined style={{marginRight: 8}}/>}/>
                                </Space>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>

            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
};

export default MyProfile;