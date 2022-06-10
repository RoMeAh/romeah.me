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
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { SocialButton } from "./SocialButton";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex w="100%">
      <Heading ml={4} size="md" fontWeight="semibold" color="cyan.400">
        RoMeAh
      </Heading>

      <Spacer></Spacer>
      <HStack spacing={2}>
        <SocialButton label="Github" href="https://github.com/RoMeAh">
          <FaGithub />
        </SocialButton>
        <SocialButton label="Discord" href="https://discord.gg/9bnpjqY">
          <FaDiscord />
        </SocialButton>
        <SocialButton label="Twitter" href="https://twitter.com/RoMeAh">
          <FaTwitter />
        </SocialButton>
        <SocialButton label="Instagram" href="https://instagram.com/not_romeah">
          <FaInstagram />
        </SocialButton>
        <SocialButton label="Twitch" href="https://twitch.tv/romeah_wreaks">
          <FaTwitch />
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
