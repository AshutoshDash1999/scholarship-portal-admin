import { Badge, Table } from "@mantine/core";

const StudentApplications = () => {
  const elements = [
    { position: 6, mass: "Accepted", symbol: "C", name: "Carbon" },
    { position: 7, mass: "Rejected", symbol: "N", name: "Nitrogen" },
    { position: 39, mass: "Accepted", symbol: "Y", name: "Yttrium" },
    { position: 56, mass: "Rejected", symbol: "Ba", name: "Barium" },
    { position: 58, mass: "Accepted", symbol: "Ce", name: "Cerium" },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Sl. No.</th>
          <th>Scholarship Name</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Application Status</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element, index) => (
          <tr key={element.name}>
            <td>{index}</td>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td><Badge size="lg" color={element.mass==="Accepted"?"green":"red"} variant="filled">{element.mass}</Badge></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default StudentApplications;
