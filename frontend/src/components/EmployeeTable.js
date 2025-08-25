export default function EmployeeTable({ employees }) {
    if (!employees.length) return <p>No employees found.</p>;
 
    return (
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Vehicle Plate</th>
                    <th>Vehicle Description</th>
                    <th>Vehicle Colour</th>
                    <th>Vehicle Make</th>
                    <th>Vehicle Model</th>
                    <th>Stall Number</th>
                    <th>Number of Vehicles</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((e, i) => (
                    <tr key={i}>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.department}</td>
                        <td>{e.vehicle.plate}</td>
                        <td>{e.vehicle.description}</td>
                        <td>{e.vehicle.colour}</td>
                        <td>{e.vehicle.make}</td>
                        <td>{e.vehicle.model}</td>
                        <td>{e.stallNumber}</td>
                        <td>{e.numberOfVehicles}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}