import { Avatar, Box, Grid, TextInput, Title } from "@mantine/core";

const ProfileInfo = () => {
  return (
    <Grid
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : "white",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",
        width: "100%",
        boxShadow:theme.shadows.sm
      })}
      gutter="lg"
    >
      <Grid.Col span={2}>
        <Box>
          <Avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
            radius={120}
            size="16"
          />
          <Title align="center">John Doe</Title>
        </Box>
      </Grid.Col>

      <Grid.Col span={10}>
        <Grid gutter="xl">
          <Grid.Col span={6}>
            <TextInput
              label="Date of Birth"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Gender" value="Jane" variant="filled" disabled />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Father's Name"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Mother's Name"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="College Name"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="College ID"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Phone Number"
              value="Jane"
              variant="filled"
              disabled
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Email" value="Jane" variant="filled" disabled />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default ProfileInfo;
