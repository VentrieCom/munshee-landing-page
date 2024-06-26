import { VStack, Button, Text, Heading } from "@chakra-ui/react";

const AttendenceText: React.FC = () => {
  return (
    <VStack
      w={{ md: "full", lg: "40%", "2xl": "40%" }}
      mt={{ base: 24, sm: 32, md: 24, lg: -4, xl: -8 }}
      alignItems={"flex-start"}
      spacing={{ base: 2, sm: 2, md: 4, lg: 4, xl: 4, "2xl": 10 }}
    >
      <Heading as={"h3"} fontSize={40}>
        Attendance
      </Heading>
      <Text fontSize={{ xl: 20, "2xl": 24 }} fontWeight={400}>
        Munshee provides a robust Employee Attendance Management service that
        streamlines workforce operations with automated time tracking, leave
        management, and real-time attendance analytics. Our user-friendly system
        ensures accurate tracking, compliance with policies, and detailed
        reporting, helping you manage employee productivity efficiently and
        maintain a well-organized, productive workforce.
      </Text>
      <Button
        variant={"solid"}
        minW={"140px"}
        mt={{ base: 8, sm: 6, md: 2, lg: 2, xl: 5 }}
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default AttendenceText;
