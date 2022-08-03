export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const byLocation = studentsList.filter((student) => student.location === city);
  const ids = newGrades.map((grade) => grade.studentId);

  const returnList = [];

  byLocation.map((student) => {
    if (ids.includes(student.id)) {
      newGrades.filter((grade) => {
        if (grade.studentId === student.id) {
          student.grade = grade.grade;
          returnList.push(student);
          return student;
        }
      });
    } else {
      student.grade = 'N/A';
      returnList.push(student);
    }
  });

  return returnList;
}
