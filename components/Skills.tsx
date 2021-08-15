import { Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { DiRust, DiBackbone, DiWebplatform } from "react-icons/di";
import { useMediaQuery } from "react-responsive";

interface SkillsProps {}

export const Skills: FC<SkillsProps> = ({}) => {
  const large = useMediaQuery({ minWidth: 650 });

  return (
    <Flex
      direction={large ? "row" : "column"}
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
          Product Designer and Developer, specialised in full stack development.
        </Text>
        <Flex direction={large ? "row" : "column"} mt={8}>
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
            ml={large ? 4 : 0}
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
            ml={large ? 4 : 0}
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
  );
};
