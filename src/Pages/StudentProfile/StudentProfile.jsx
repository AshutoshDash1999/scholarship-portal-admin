import { Box } from "@mantine/core";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import StudentApplications from "../../components/StudentApplications/StudentApplications";
import BaseLayout from "../BaseLayout/BaseLayout";

const StudentProfile = () => {
  return (
    <BaseLayout>
      <ProfileInfo />
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : "white",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",
          width: "100%",
          boxShadow: theme.shadows.sm,
        })}
        mt="xl"
      >
        <StudentApplications />
      </Box>
    </BaseLayout>
  );
};
export default StudentProfile;
