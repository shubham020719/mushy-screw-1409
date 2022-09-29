import { Image, Box, Text, Heading, Center, Flex } from "@chakra-ui/react";
import "./new.css";
export default function Remaining({ img, title, heading }) {
    return (
        <>
            <Center h="400px" w="450px" borderRadius="10px">
                <Image src={img} className="image" h="100%" borderRadius="10px" />
                <Center
                    className="text"
                    borderColor="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Text color="white">{title}</Text>
                    <Heading
                        color="white"
                        fontWeight="800"
                        fontFamily="'Anton', sans-serif"
                        fontSize="30"
                    >
                        {heading}
                    </Heading>
                </Center>
            </Center>
        </>
    );
}