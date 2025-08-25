import { useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';

export default function SearchPage() {
    const [employees, setEmployees] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleDescription, setVehicleDescription] = useState("");
    const [vehicleColour, setVehicleColour] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [stallNumber, setStallNumber] = useState("");
    const [numberOfVehicles, setNumberOfVehicles] = useState("");

    const handleSearch = async (e) => {
    }
}