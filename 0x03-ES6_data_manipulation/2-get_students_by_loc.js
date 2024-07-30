/**
 * Retrieves students in a given location.
 * @param {{id: Number, firstName: String, location: String}[]} students - The list of students.
 * @param {String} city - The location.
 * @returns {{id: Number, firstName: String, location: String}[]}
 * The list of students in the given location.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
