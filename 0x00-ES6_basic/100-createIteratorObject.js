export default function createIteratorObject(report) {
  const list = [];
  const deptsList = (Object.values(report)[0]);
  const employeesList = Object.values(deptsList);

  employeesList.forEach((element) => {
    element.forEach((element) => {
      list.push(element);
    });
  });

  return list;
}
