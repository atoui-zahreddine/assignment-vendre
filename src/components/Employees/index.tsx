import { FunctionComponent } from "react";
import { Employee } from "../../common/types/Employee";
import EmployeeCard from "./EmployeeCard";

interface Props {
  employees: Employee[];
}

const Employees: FunctionComponent<Props> = ({ employees }) => {
  return (
    <div className="my-10 flex flex-wrap justify-evenly gap-4">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={`${employee.first_name} ${employee.last_name}`}
          email={employee.email}
          avatar={employee.avatar}
        />
      ))}
    </div>
  );
};

export default Employees;
