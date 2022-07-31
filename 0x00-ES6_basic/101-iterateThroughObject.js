export default function iterateThroughObject(reportWithIterator) {
  let response = '';
  reportWithIterator.forEach((employee) => {
    // console.log(employee);
    response += ` | ${employee}`;
  });
  return response.slice(3);
}
