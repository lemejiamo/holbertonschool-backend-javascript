export default function createReportObject(employeesList) {
  let allEmployees = {};

  for (const key in employeesList) {
    if (key != null) {
      allEmployees[key] = employeesList[key];
    }
  }
  const result = {
    allEmployees,
    getNumberOfDepartments: () => (Object.keys(employeesList).length),
  }
  return result;
}
