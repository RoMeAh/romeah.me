import { FC, useState } from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export interface Job {
  companyName: string;
  position: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  from: string;
  to: string;
  technologies: string[];
}

export const JobCard: FC<Job> = ({
  companyName,
  position,
  description,
  logo,
  blurHash,
  link,
  technologies,
  from,
  to,
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <Image
          alt={`${companyName}-logo`}
          src={logo}
          size="sm"
          width={33}
          height={33}
          layout="fixed"
          rounded="md"
          blur={blurHash}
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={(e) => e.stopPropagation()}
                  isExternal
                >
                  {position} - {companyName} ({from} to {to})
                </Text>
                <HStack spacing="1">
                  {technologies.map((tech, idx) => (
                    <Tag size="sm" key={idx} colorScheme="blue">
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text fontSize="sm" color={textColor}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};
