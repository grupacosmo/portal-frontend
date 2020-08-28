import React from 'react';
import './style.css';
import {Tabs, Button, Layout,Space, Menu, Row, Col} from 'antd';
import {SnippetsOutlined, TeamOutlined, FileTextOutlined, LinkOutlined} from '@ant-design/icons';
import MembersList from "../../components/MembersList";
import "./fontello-trello/css/fontello.css"


const {Header, Content, Footer} = Layout;
const {TabPane} = Tabs;

const tabBarContent = [
    <span className="TabBarPane"><SnippetsOutlined/>Aktualności</span>,
    <span className="TabBarPane"><TeamOutlined/>Członkowie</span>,
    <span className="TabBarPane"><FileTextOutlined/>Lista Projektów</span>
]

const con =
    <Space>
        <Button icon={<LinkOutlined/>} className="TabBarButton"> Materiały </Button>
        <Button icon={<i className="icon-trello"/>} className="TabBarButton"> Trello </Button>
    </Space>

const Team = () => {
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

                    <div className="team-Title">
                        <h1 style={{fontWeight: "bold"}}>Webdev</h1>
                    </div>

                    <Tabs defaultActiveKey="1" tabBarExtraContent={con}>
                        <TabPane tab={tabBarContent[0]} key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={tabBarContent[1]} key="2">
                            <MembersList/>
                        </TabPane>
                        <TabPane tab={tabBarContent[2]} key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>


                </div>
            </Content>

            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
};

export default Team;