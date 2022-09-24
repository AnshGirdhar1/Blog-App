import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  UnorderedList,
  ListItem,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const menuLinkStyle = { color: "#000", textDecoration: "none" };

  return (
    <>
      <Button ref={btnRef} colorScheme="red" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody p="0 10px">
            <Stack w="100%">
              <UnorderedList style={{ listStyle: "none" }}>
                <Stack spacing="20px">
                  <ListItem>
                    <Link style={menuLinkStyle} to="/">
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link style={menuLinkStyle} to="/home">
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link style={menuLinkStyle} to="/profile">
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link style={menuLinkStyle} to="/signup">
                      Signup
                    </Link>
                  </ListItem>
                </Stack>
              </UnorderedList>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
