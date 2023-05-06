import { Button, createStyles, Flex, Table, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import RequestInfo from "../../components/RequestInfo/RequestInfo";

const elements = [
  { studentId: 6, date: 12.011, scholarshipType: "Carbon" },
  { studentId: 7, date: 14.007, scholarshipType: "Nitrogen" },
  { studentId: 39, date: 88.906, scholarshipType: "Yttrium" },
  { studentId: 56, date: 137.33, scholarshipType: "Barium" },
  { studentId: 58, date: 140.12, scholarshipType: "Cerium" },
];

const useStyles = createStyles((theme) => ({
  table__cell: {
    textAlign: "center!important",
  },
  table__header: {
    backgroundColor: theme.colors.blue[6],
  },
  table:{
    borderRadius:theme.radius.lg
  }
}));

const AllRequest = () => {
  const { classes } = useStyles();
  return (
    <div>
      <RequestInfo />
      <Table  className={classes.table} mt="xl" fontSize="md" highlightOnHover withBorder>
        <thead>
          <tr className={classes.table__header}>
            <th className={classes.table__cell}>
              <Text c="white">Sl. No.</Text>
            </th>
            <th className={classes.table__cell}>
              <Text c="white">Student ID</Text>
            </th>
            <th className={classes.table__cell}>
              <Text c="white">Date</Text>
            </th>
            <th className={classes.table__cell}>
              <Text c="white">Scholarship Type</Text>
            </th>
            <th className={classes.table__cell}>
              <Text c="white">Action</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          {elements.map((element, index) => (
            <tr key={element.name}>
              <td className={classes.table__cell}>{index + 1}</td>
              <td className={classes.table__cell}>
                <Link to="">{element.studentId}</Link>
              </td>
              <td className={classes.table__cell}>{element.date}</td>
              <td className={classes.table__cell}>{element.scholarshipType}</td>
              <td className={classes.table__cell}>
                <Flex gap="xl" justify="center">
                  <Button color="green">Accept</Button>
                  <Button color="red">Reject</Button>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default AllRequest;
