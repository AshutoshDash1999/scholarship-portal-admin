import { Box, createStyles, Flex, Text, Title } from "@mantine/core";
import { IconChecklist, IconThumbDown, IconThumbUp } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  info__box: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: "pointer",
  },
  totalApplicationBox: {
    backgroundColor: theme.colors.blue[1],
  },
  totalRejections: {
    backgroundColor: theme.colors.orange[1],
  },
  totalAcceptance: {
    backgroundColor: theme.colors.green[1],
  },
  icon__container: {
    padding: theme.spacing.md,
    borderRadius: theme.radius.xl,
    height: "60px",
    width: "60px",
    color: "white",
  },
  total__application__info__icon: {
    backgroundColor: theme.colors.blue[6],
  },
  total__acceptance__info__icon: {
    backgroundColor: theme.colors.green[6],
  },
  total__rejections__info__icon: {
    backgroundColor: theme.colors.red[6],
  },
}));

const RequestInfo = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Flex justify={"center"} gap="xl">
        <Box className={`${classes.info__box} ${classes.totalApplicationBox}`}>
          <Flex align="center" gap="md">
            <Flex
              className={`${classes.icon__container} ${classes.total__application__info__icon}`}
              justify="center"
              align="center"
            >
              <IconChecklist />
            </Flex>
            <Box>
              <Text fz="sm" c="dimmed">
                Total applications received
              </Text>
              <Title order={1}>100</Title>
            </Box>
          </Flex>
        </Box>
        <Box className={`${classes.info__box} ${classes.totalAcceptance}`}>
          <Flex align="center" gap="md">
            <Flex
              className={`${classes.icon__container} ${classes.total__acceptance__info__icon}`}
              justify="center"
              align="center"
            >
              <IconThumbUp />
            </Flex>
            <Box>
              <Text fz="sm" c="dimmed">
                Total applications Accepted
              </Text>
              <Title order={1}>80</Title>
            </Box>
          </Flex>
        </Box>
        <Box className={`${classes.info__box} ${classes.totalRejections}`}>
          <Flex align="center" gap="md">
            <Flex
              className={`${classes.icon__container} ${classes.total__rejections__info__icon}`}
              justify="center"
              align="center"
            >
              <IconThumbDown />
            </Flex>
            <Box>
              <Text fz="sm" c="dimmed">
                Total applications Rejected
              </Text>
              <Title order={1}>20</Title>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};
export default RequestInfo;
