import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  const ids = getListStudentIds(studentsList);

  const idSum = ids.reduce((a, b) => a + b);
  return idSum;
}
