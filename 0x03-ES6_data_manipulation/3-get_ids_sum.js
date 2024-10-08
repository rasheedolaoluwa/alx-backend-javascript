/**
 * Retrieves the sum of ids of a list of students.
 * @param {{id: Number, firstName: String, location: String}[]} students - The list of students.
 * @returns {Number} The sum of student ids.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
