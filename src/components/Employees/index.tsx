import { FunctionComponent } from "react";
import { Employee } from "../../common/types/Employee";
import EmployeeCard from "./EmployeeCard";

interface Props {
  employees: Employee[];
  loading: boolean;
}

const Employees: FunctionComponent<Props> = ({ loading, employees }) => {
  return (
    <div className="my-10 flex flex-wrap justify-evenly gap-4">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          loading={loading}
          name={`${employee.first_name} ${employee.last_name}`}
          email={employee.email}
          avatar={employee.avatar}
        />
      ))}
    </div>
  );
};

export default Employees;
