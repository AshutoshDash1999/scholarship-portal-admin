import { Box, Flex } from "@mantine/core";
import Sidebar from "../../components/Sidebar/Sidebar";

const BaseLayout = ({children}) => {
  return (
    <Flex
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      })}
      grow
    >
      <Sidebar />
      <Box p="lg" w="100%">
        {children}
      </Box>
    </Flex>
  );
};
export default BaseLayout;
