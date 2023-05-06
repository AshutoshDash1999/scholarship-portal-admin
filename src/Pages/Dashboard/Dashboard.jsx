import { Container, Tabs } from "@mantine/core";
import { IconList, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import Rejected from "../../Rejected/Rejected";
import Accepted from "../Accepted/Accepted";
import AllRequest from "../AllRequest/AllRequest";

const Dashboard = () => {
  return (
    <Container size="2xl" p="md">
      <Tabs defaultValue="allRequest">
        <Tabs.List position="right">
          <Tabs.Tab value="allRequest" icon={<IconList size="0.8rem" />}>
            All
          </Tabs.Tab>
          <Tabs.Tab value="accepted" icon={<IconThumbUp size="0.8rem" />}>
            Accepted
          </Tabs.Tab>
          <Tabs.Tab value="rejected" icon={<IconThumbDown size="0.8rem" />}>
            Rejected
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="allRequest" pt="xs">
          <AllRequest />
        </Tabs.Panel>

        <Tabs.Panel value="accepted" pt="xs">
          <Accepted />
        </Tabs.Panel>

        <Tabs.Panel value="rejected" pt="xs">
          <Rejected />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default Dashboard;
