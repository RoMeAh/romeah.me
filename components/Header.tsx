import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa";

interface HeaderProps {
  isDark: boolean;
  toggleColorMode: () => void;
}

export const Header: FC<HeaderProps> = ({ isDark, toggleColorMode }) => {
  return (
    <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        RoMeAh
      </Heading>

      <Spacer></Spacer>
      <IconButton
        aria-label="github"
        ml={2}
        icon={<FaGithub />}
        isRound
        onClick={() => window.open("https://github.com/RoMeAh")}
      />
      <IconButton
        aria-label="discord"
        ml={2}
        icon={<FaDiscord />}
        isRound
        onClick={() => window.open("https://discord.gg/9bnpjqY")}
      />
      <IconButton
        aria-label="instagram"
        ml={2}
        icon={<FaInstagram />}
        isRound
        onClick={() => window.open("https://www.instagram.com/not_romeah/")}
      />
      <IconButton
        aria-label="theme-toggle"
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
