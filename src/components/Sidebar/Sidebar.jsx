import {
  Button,
  Flex,
  Group,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton
} from "@mantine/core";
import {
  IconAlertCircle,
  IconDatabase,
  IconGitPullRequest,
  IconMessages
} from "@tabler/icons-react";

const data = [
  {
    icon: <IconGitPullRequest size="1rem" />,
    color: "blue",
    label: "Pull Requests",
  },
  {
    icon: <IconAlertCircle size="1rem" />,
    color: "teal",
    label: "Open Issues",
  },
  { icon: <IconMessages size="1rem" />, color: "violet", label: "Discussions" },
  { icon: <IconDatabase size="1rem" />, color: "grape", label: "Databases" },
];

const Sidebar = () => {
  return (
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section>Header with logo</Navbar.Section>
      <Navbar.Section grow mt="md">

        {data.map((link) => (
          <UnstyledButton
            key={link?.label}
            sx={(theme) => ({
              display: "block",
              width: "100%",
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[1],
              },
            })}
          >
            <Group>
              <ThemeIcon color={link?.color} variant="light" size={"xl"}>
                {link?.icon}
              </ThemeIcon>

              <Text size="sm">{link?.label}</Text>
            </Group>
          </UnstyledButton>
        ))}
        
      </Navbar.Section>
      <Navbar.Section>
        <Flex justify={"center"}>
          <Button variant="light" color="red" fullWidth>
            Log Out
          </Button>
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
};
export default Sidebar;
