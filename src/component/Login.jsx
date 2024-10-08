import React, { useContext, useState } from "react";
import { LoginContext } from "./context/context";
import { Form } from "react-bootstrap";
import SahliPhoto from "../asset/sahlisoft.png";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SimpleCard() {
  const LogInContext = useContext(LoginContext);
  const [name, setName] = useState({ userName: "" });
  const [password, setPassword] = useState({ password: "" });
  const [ipAddress, setIpAddress] = useState({
    ip: "",
    port: 10105,
    apiKey: "",
  });

  const handleUser = (e) => {
    setName({ userName: e.target.value });
    console.log("userName: ", name.userName);
  };

  const handlePassword = (e) => {
    setPassword({ password: e.target.value });
    console.log("password: ", password.password);
  };
  const handleIpAddress = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      ip: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };
  const handlePort = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      port: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };
  const handleApiKey = (e) => {
    setIpAddress((ipAddress) => ({
      ...ipAddress,
      apiKey: e.target.value,
    }));
    console.log("Ip Address : ", ipAddress);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //not to refresh the page
    console.log(name.userName, "ok >>>>", password.password);
    LogInContext.loginFunction(
      name.userName,
      password.password,
      ipAddress.ip,
      ipAddress.port,
      ipAddress.apiKey
    );
  };
  return (
    <Flex>
      <Stack>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
        </Stack>
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="userName" onChange={handleUser}>
                <FormLabel>User Name</FormLabel>
                <Input type="text" width="100%" />
              </FormControl>
              <FormControl id="password" onChange={handlePassword}>
                <FormLabel>Password</FormLabel>
                <Input type="password" width="100%" />
              </FormControl>
              <FormControl id="ipAddress" onChange={handleIpAddress}>
                <FormLabel>IP Address</FormLabel>
                <Input type="text" width="100%" />
              </FormControl>
              <FormControl id="port" onChange={handlePort}>
                <FormLabel>Port Number</FormLabel>
                <Input type="text" width="100%" />
              </FormControl>
              <FormControl id="apiKey" onChange={handleApiKey}>
                <FormLabel>API Key</FormLabel>
                <Input type="text" width="100%" />
              </FormControl>
              <Stack spacing={10}>
                <Checkbox>Remember me</Checkbox>
                <Button
                  bg="blue.400"
                  color="black"
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
