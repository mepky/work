import React from "react";
import { Layout } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <div className="App-left">
        {" "}
        I'm a new Text block ready for your content
      </div>
      <div className="App-right">
        <Layout>
          <Header className="header">
            {" "}
            <div className="flat-icons">
              <div className="avatar">
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UserOutlined />}
                  src=" https://www.flaticon.com/svg/static/icons/svg/711/711972.svg"
                />
                <span className="title"> CONTENT </span>{" "}
              </div>{" "}
              <div className="avatar">
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UserOutlined />}
                  src=" https://www.flaticon.com/svg/static/icons/svg/966/966370.svg"
                />
                <span className="title"> ROWS </span>{" "}
              </div>{" "}
              <div className="avatar">
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UserOutlined />}
                  src=" https://www.flaticon.com/premium-icon/icons/svg/3024/3024539.svg"
                />
                <span className="title"> SETTING </span>{" "}
              </div>{" "}
            </div>{" "}
          </Header>{" "}
          <Content className="content">
            <div className="box">
              <div className="container">
                <div className="container-1">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="container-a">
                <div className="container-a-1">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
                <div className="container-a-2">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="container-b">
                <div className="container-b-1">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
                <div className="container-b-2">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="container-c">
                <div className="container-c-1">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
                <div className="container-c-2">
                  <div className="container-2"> </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Content>{" "}
        </Layout>{" "}
      </div>
    </div>
  );
}

export default App;
