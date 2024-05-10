import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import * as PATH from "@/configs/routesConfig";
const { Header, Sider, Content } = Layout;

const NavBarMenu = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "Admin Management",
              children: [
                {
                  key: "1-1",
                  label: "User Management",
                  disabled: true,
                },
                {
                  key: "1-2",
                  label: "Role Management",
                  disabled: true,
                },
                {
                  key: "1-3",
                  label: "Organization Management",
                  disabled: true,
                },
              ],
            },
            {
              key: "2",
              label: "Product builder",
              children: [
                {
                  key: "2-1",
                  label: (
                    <span onClick={() => navigate(PATH.PRODUCT_PATH)}>
                      Products
                    </span>
                  ),
                },
              ],
            },
            {
              key: "3",
              label: "Retail agency",
              children: [
                {
                  key: "3-1",
                  label: "Manage organization",
                  disabled: true,
                },
                {
                  key: "3-2",
                  label: "Construct & Manage Policies",
                  disabled: true,
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="bg-white p-0">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="p-5 m-5 rounded-lg bg-white"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavBarMenu;
