import { VStack, SimpleGrid, Heading, Box } from "@chakra-ui/react";
import { ProjectCard, Project } from "./ProjectCard";
import { motion, AnimateSharedLayout, isValidMotionProp } from "framer-motion";
import { FC, forwardRef } from "react";

interface ProjectsProps {
  projects: Project[];
}

const MotionBox = motion(
  forwardRef((props, ref: any) => <Box ref={ref} {...props} />)
) as FC<any>;

const ORANGE = "#ff9400";

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8}>
      <Heading underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Heading>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard key={index} {...project} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};
