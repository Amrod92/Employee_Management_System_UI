import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/list-employee" element={<EmployeeList />}></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
