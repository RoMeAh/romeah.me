import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";

interface InfoProps {}

export const Info: FC<InfoProps> = ({}) => {
  const large = useMediaQuery({ minWidth: 650 });

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        mt={12}
        mr={8}
        alignSelf="flex-end"
      />
      <Flex
        direction={large ? "row" : "column"}
        spacing="200px"
        p={large ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={large ? "0" : 16} align="flex-start">
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
            color={useColorModeValue("gray.500", "gray.200")}
          >
            Self-Educated and motivated developer who has high experience
            working with backend and systems engineering. Organized, and planned
            approach to anything and everything. Mainly a typescript/javascript
            developer who has a good sense about it. I have worked on mainly
            projects to improve my skills, I also have a pretty good experience
            with rust and making systems related stuff. I have good skills with
            backend development (REST APIs and GraphQL APIs), systems related
            development, and decent front end experience with React and Svelte.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("mailto:romeah@blazify.rocks")}
          >
            Hire Me
          </Button>
          <Button
            ml={2}
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open(
                "https://cdn.discordapp.com/attachments/713410105928056856/874947398613491712/Resume.pdf"
              )
            }
          >
            Download Resume
          </Button>
        </Box>

        <Image
          alignSelf="center"
          mt={large ? "0" : "12"}
          mb={large ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          alt="RoMeAh"
          src="https://avatars.githubusercontent.com/u/62307220?s=400&u=753ca830e7e181cf2bbd828819d936bd6eac84c8&v=4"
        />
      </Flex>
    </Stack>
  );
};
