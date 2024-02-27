import React from "react";
import { Menu, Row, Layout, Flex } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="first">
        <Flex justify="space-between">
          <Menu mode="horizontal">
            <Menu.Item> Sun Led Letters</Menu.Item>
          </Menu>
          <Menu mode="horizontal">
            {" "}
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Things</Menu.Item>
            <Menu.Item>Product</Menu.Item>
            <Menu.Item>Contact Us</Menu.Item>
          </Menu>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
