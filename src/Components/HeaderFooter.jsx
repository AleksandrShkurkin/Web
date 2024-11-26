import React from "react";
import Nav from "./Nav";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Footer } = Layout;

const HeaderFooter = ({ isDarkMode, onThemeChange, count }) => {
    const { token } = theme.useToken();
    return (
        <Layout style={{
            background: token.colorBgLayout,
            color: token.colorText,
            minHeight: '100vh'
          }}>
          <Nav isDarkMode={isDarkMode} onThemeChange={onThemeChange} count={count}/>
          <Outlet/>
          <Footer style={{ textAlign: 'center', backgroundColor: "#CCCAC9", color: "#000000" }}>Something</Footer>
        </Layout>
    )
}

export default HeaderFooter;