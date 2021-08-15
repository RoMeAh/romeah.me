import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SocialButton } from "./SocialButton";

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {new Date().getFullYear()} RoMeAh. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Github" href="https://github.com/RoMeAh">
            <FaGithub />
          </SocialButton>
          <SocialButton
            label="YouTube"
            href="https://www.youtube.com/channel/UC9sg8SXNE3PE_cZAfJ_NiuQ"
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label="Instagram"
            href="https://instagram.com/not_romeah"
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
