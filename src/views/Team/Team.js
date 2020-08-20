import React from 'react';
import './style.css';
import { Layout, Menu} from 'antd';
import { Tabs } from 'antd';
import TeamTitle from "../../components/TeamTitle";
import MembersList from "../../components/MembersList";


const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;


const Team = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <TeamTitle title="WEBDEV" />

            <Tabs defaultActiveKey="1">
                <TabPane tab="Aktualności" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Członkowie" key="2">
                    <MembersList />
                </TabPane>
                <TabPane tab="Materiały" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>


        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
};

export default Team;