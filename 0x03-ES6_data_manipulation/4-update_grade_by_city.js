/**
 * Updates the grades of a list of students in a given city.
 * @param {{id: Number, firstName: String, location: String}[]} students - The list of students.
 * @param {String} city - The city of students.
 * @param {{studentId: Number, grade: Number}[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String, grade: Number|string}[]} The updated list of students with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
