import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { SocialButton } from "./SocialButton";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        RoMeAh
      </Heading>

      <Spacer></Spacer>
      <HStack spacing={2}>
        <SocialButton label="Discord" href="https://github.com/RoMeAh">
          <FaGithub />
        </SocialButton>
        <SocialButton label="Discord" href="https://discord.gg/9bnpjqY">
          <FaDiscord />
        </SocialButton>
        <SocialButton label="Instagram" href="https://instagram.com/not_romeah">
          <FaInstagram />
        </SocialButton>
      </HStack>
      <IconButton
        aria-label="theme-toggle"
        ml={8}
        icon={useColorModeValue(<FaMoon />, <FaSun />)}
        isRound
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
