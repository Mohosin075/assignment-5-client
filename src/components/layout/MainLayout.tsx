import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Grid, Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import Logo from "../../utils/Logo";
import { AiFillProduct } from "react-icons/ai";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { useBreakpoint } = Grid;
  const { lg } = useBreakpoint();

  const items = [
    {
      key: "All Supplies",
      icon: <AiFillProduct />,
      label: <NavLink to="all-supplies">All Supplies</NavLink>,
    },
    {
      key: "About",
      icon: <AiFillProduct />,
      label: <NavLink to="about">About</NavLink>,
    },
    {
      key: "Contact",
      icon: <AiFillProduct />,
      label: <NavLink to="contact">Contact</NavLink>,
    },
  ];
  return (
    <div>
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth={lg ? 60 : 0}
            width={lg ? 150 : 110}
            onCollapse={(col) => {
              setCollapsed(col);
            }}
            style={{ textAlign: "center" }}
          >
            <Space direction="vertical" align="center" size={15}>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                {lg ? <Logo /> : null}
              </div>
            </Space>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["All Supplies"]}
              items={items}
              style={{ padding: 0, textAlign: "left" }}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: "20px",
                }}
              >
                <Space align="center">
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                  {lg ? (
                    <h2
                      style={{ fontWeight: "500", textTransform: "uppercase" }}
                    >
                      Food{" "}
                      <span style={{ color: "#003eb3" }}>Distribution</span>
                    </h2>
                  ) : (
                    <>
                      <Logo />
                    </>
                  )}
                </Space>
                <div>
                  {
                    <NavLink to="/login">
                      <Button type="primary">Login</Button>
                    </NavLink>
                  }
                </div>
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
