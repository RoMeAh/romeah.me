import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  useColorMode,
  VStack,
  Image,
  Text,
  useMediaQuery,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaSun,
  FaMoon,
  FaDiscord,
  FaGoogle,
  FaSpotify,
} from "react-icons/fa";
import { DiWebplatform, DiBackbone, DiRust } from "react-icons/di";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const isDark = colorMode == "dark";
  const router = useRouter();

  return (
    <VStack p={5}>
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
          onClick={() => router.push("https://github.com/RoMeAh")}
        />
        <IconButton
          aria-label="discord"
          ml={2}
          icon={<FaDiscord />}
          isRound
          onClick={() => router.push("https://discord.gg/9bnpjqY")}
        />
        <IconButton
          aria-label="instagram"
          ml={2}
          icon={<FaInstagram />}
          isRound
          onClick={() => router.push("https://www.instagram.com/not_romeah/")}
        />
        <IconButton
          aria-label="theme-toggle"
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound
          onClick={toggleColorMode}
        />
      </Flex>

      <Stack>
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Ronit Rahaman
            </Text>
            <Text
              fontWeight="semibold"
              color={isDark ? "gray.200" : "gray.500"}
            >
              Typescript, Javascript and Rust lover. Founder of Blazify
              (https://blazify.rocks). Making a programming language named
              BlazeX in Rust.
            </Text>
            <Button mt={8} colorScheme="blue">
              <NextLink href="mailto:romeah@blazify.rocks">Hire Me</NextLink>
            </Button>
            <Button ml={2} mt={8} colorScheme="blue">
              <NextLink href="https://cdn.discordapp.com/attachments/713410105928056856/874699776338313216/Resume.pdf">
                Download Resume
              </NextLink>
            </Button>
          </Box>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/62307220?s=400&u=753ca830e7e181cf2bbd828819d936bd6eac84c8&v=4"
          />
        </Flex>
      </Stack>

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" py="16">
          <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
            2+
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            Years of Experience
          </Text>
        </Box>
        <Box alignSelf="center" px="32" py="16">
          <Text fontWeight="bold" fontSize="2xl">
            Product Designer and Developer, specialised in full stack
            development.
          </Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
            >
              <Icon color="white" p="4" as={DiRust} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                Systems Engineering
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "teal.400" }}
            >
              <Icon color="black" p="4" as={DiBackbone} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                REST and GraphQL APIs
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "green.400" }}
            >
              <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                React & Svelte Websites
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <HStack spacing="24">
        <Icon as={FaDiscord} boxSize="50" />
        <Icon as={FaGoogle} boxSize="50" />
        <Icon as={FaSpotify} boxSize="50" />
        <Icon as={FaInstagram} boxSize="50" />
      </HStack>
    </VStack>
  );
}
