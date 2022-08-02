export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList)) return [];
  const byCityList = studentsList.filter((student) => student.location === city);
  return byCityList;
}
