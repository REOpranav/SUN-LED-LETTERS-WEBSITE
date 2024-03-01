import React from "react";
import { Menu, Flex } from "antd";

const Header = () => {
  return (
    <div>
      <Flex justify="space-between">
        <Menu mode="horizontal">
          <Menu.Item>Sun Led Letters</Menu.Item>
        </Menu>

        <Menu mode="horizontal" style={{ width: "20%" }}>
          <Menu.Item>Products</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>About Us</Menu.Item>
        </Menu>
      </Flex>
    </div>
  );
};

export default Header;
