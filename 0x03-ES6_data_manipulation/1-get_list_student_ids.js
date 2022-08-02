function getListStudentIds(studentsList) {
  if (studentsList instanceof Array) {
    // console.log('es instancia')
    const idList = studentsList.map((student) => student.id);
    return idList;
  }
  return [];
}

export default getListStudentIds;
