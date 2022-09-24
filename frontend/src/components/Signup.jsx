import { Input, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { addUser } from "../store/signupReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../store/loginReducer/actions";

export const Signup = ({ type }) => {
  const [signupData, setSignupData] = useState({});
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login.post.success);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "Signup") {
      dispatch(addUser(signupData));
    } else {
      const { email, password } = signupData;
      dispatch(verifyUser({ email, password }));
    }
  };

  return (
    <Stack
      w="30%"
      m="80px 35%"
      boxShadow="1px 1px 15px #f4f3f3"
      p="60px 30px"
      borderRadius="15px"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack spacing="30px">
          {type === "Signup" && (
            <Input
              onChange={(e) => handleChange(e)}
              name="name"
              value={signupData.name}
              type="text"
              placeholder="Name"
              required
              id="name"
            />
          )}
          <Input
            onChange={(e) => handleChange(e)}
            name="email"
            value={signupData.email}
            type="email"
            placeholder="Email"
            required
            id="email"
          />
          <Input
            onChange={(e) => handleChange(e)}
            name="password"
            value={signupData.password}
            type="password"
            placeholder="Password"
            required
            id="password"
          />
          {type === "Signup" && (
            <Input
              name="age"
              onChange={(e) => handleChange(e)}
              value={signupData.age}
              type="number"
              placeholder="Age"
              required
              id="age"
            />
          )}
          <Input
            bg="#b20238"
            color="#fff"
            type="submit"
            value={type === "Signup" ? "Signup" : "Login"}
            cursor="pointer"
            borderRadius="25px"
            height="45px"
          />
        </Stack>
      </form>
      {type === "Login" && (
        <Text textAlign="center" pt="20px">
          Don't Have Account ? <Link to="/signup">Signup</Link>
        </Text>
      )}
    </Stack>
  );
};
