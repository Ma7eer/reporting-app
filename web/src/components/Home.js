import React from "react";
import { Layout } from "antd";
import "./Home.css";
const { Header, Footer, Sider, Content } = Layout;

export const Home = () => (
  <Layout>
    <Sider className="home-sider">Sider</Sider>
    <Layout>
      <Header className="home-header">Header</Header>
      <Content className="home-content">Content</Content>
      <Footer className="home-footer">Footer</Footer>
    </Layout>
  </Layout>
);
