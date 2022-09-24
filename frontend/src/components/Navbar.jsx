import { Flex, ListItem, UnorderedList, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export const Navbar = () => {
  const menuLinkStyle = {
    color: "#b20238",
    textDecoration: "none",
    fontWeight: "600",
  };
  const menuItemStyle = {
    display: "block",
    width: "100%",
  };
  return (
    <Flex
      justifyContent="space-between"
      p="0 40px"
      color="#fff"
      alignItems="center"
      height="60px"
      borderBottomWidth="2px"
      borderColor="gray:300"
    >
      <Link to="/">
        <Image src="/havelooklogo.png" maxW="150px" />
      </Link>
      <UnorderedList display="flex" gap="50px" style={{ listStyle: "none" }}>
        <ListItem>
          <Flex alignItems="center" gap="8px">
            <AiOutlineHome color="#b20238" />
            <Link style={menuLinkStyle} to="/">
              Home
            </Link>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex alignItems="center" gap="8px">
            <IoMdNotificationsOutline color="#b20238" fontSize="18px" />
            <Link style={menuLinkStyle} to="/subscribed">
              Subscriptions
            </Link>
          </Flex>
        </ListItem>
        <ListItem>
          <Menu>
            <MenuButton color="#b20238" fontWeight="600" bg="#fff">
              <Flex alignItems="center" gap="10px">
                <AiOutlineUser />
                Account
                <BsChevronDown color="#b20238" fontSize="10px" />
              </Flex>
            </MenuButton>
            <MenuList color="#000">
              <MenuItem>
                <Link to="/login" style={menuItemStyle}>
                  Login
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link to="/signup" style={menuItemStyle}>
                  Signup
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
