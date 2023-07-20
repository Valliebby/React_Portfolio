import React from "react";

import {
  chakra,
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from "@chakra-ui/react";
export default function App(){
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{ color: "brand.300" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              _light={{ color: "brand.500" }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              _light={{ color: "black" }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              ABout Me:
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.500" }}
            >
              Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and 
              revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor. In developing new user-facing features using React.js I was able to manages day-to-day content maintenance of websites to provide users consistent accurate, 
              appropriate, timely and up-to-date information. Also collaborates with and influencing cross-functional teams and leadership on content strategy, creation, distribution reviews and troubleshoots routine website issues. Lots of experience with codes in HTML, 
              CSS, JavaScript, PHP, jQuery. Experience with MySQL and Angular a plus. Ensures websites meet ADA accessibility standards.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Developing new user-facing features using React.js">
              In developing new user-facing features using React.js I was able to manage day-to-day content maintenance
                 of websites to provide users consistent,accurate, appropriate, timely and up-to-date information.
                 Also collaborates with and influencing cross-functional teams and leadership on content strategy, creation, 
                 distribution reviews and troubleshoots routine website issues. Lots of experience with codes in HTML, CSS, 
                 JavaScript, PHP, jQuery, MySQL and Angular a plus.{" "}
              </Feature>
              <Feature title="Graphic design and UI experience.">
              As a UI Developer we gather and analyze system requirements, document specifications, and develop software solutions to meet client needs and data. As well as analyze and review enhancement 
              requests and specifications, implement system software, code new programs to client's specifications and create test data for testing modify existing programs to new standards; and conduct 
              unit testing of developed programs.
              </Feature>
              <Feature title="Translating designs and wireframes">
              In translating designs and wireframes into high quality code I Develop technologies to maintain our market leadership using the latest tools and frameworks. Write software in accordance 
              with requirements and specifications and use best practices to build in high-quality. Debug and validate software issues on the latest and greatest unreleased products as well as those encountered by customers.
                {" "}
                Provide a seamless customer experience across channels, like
                reserving online and picking up in store.
              </Feature>
              <Feature title="Built Successful User friendly Applications.">
                {" "}
                Building successful applications requires a thoughtful and strategic approach, combining technical expertise with user-centric design and a deep understanding of the target audience and market. Here are some 
                key elements to consider when aiming for success:{" "}
              </Feature>
              <Feature title="Experience in Java Technologies.">
                {" "}
                Experience in Java Technologies refers to a developer's proficiency and hands-on knowledge of Java programming language and the ecosystem of tools and frameworks associated with it. Java is a versatile, 
                object-oriented programming language widely used for developing a variety of applications, from web and mobile applications to enterprise-level systems.
              </Feature>
              <Feature title="A Expert in the Agile Approach.">
                {" "}
                Iterative or agile project management focuses on delivering maximum 
               value against business priorities in the time and budget allowed, especially when the drive to deliver is greater 
               than the risk. When approaching agile project management for the first time, it becomes apparent that there are 
               various trains of thought. The project breaks a requirement into smaller pieces, which are then prioritised by 
               the team in terms of importance. The Agile approach also promotes collaborative working, especially with the 
               customer.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
