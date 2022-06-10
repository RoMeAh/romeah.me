import { VStack, SimpleGrid, Heading, Box } from "@chakra-ui/react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FC, forwardRef } from "react";
import { Job, JobCard } from "./JobCard";

interface JobExperienceProps {
  jobs: Job[];
}

const MotionBox = motion(
  forwardRef((props, ref: any) => <Box ref={ref} {...props} />)
) as FC<any>;

export const JobExperience: FC<JobExperienceProps> = ({ jobs }) => {
  return (
    <VStack align="start" ml={10} spacing={8}>
      <Heading mt={0} mb={0}>
        Jobs
      </Heading>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {jobs.map((job, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <JobCard key={index} {...job} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};
