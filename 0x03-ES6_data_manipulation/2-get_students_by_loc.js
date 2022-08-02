
export default function getStudentsByLocation(studentsList, city) {
  if (Array.isArray(studentsList)){
    const byCityList = studentsList.filter((student) => student.locatin === city);
    return byCityList;
  }
  return [];
}
