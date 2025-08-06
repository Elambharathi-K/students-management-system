import React from 'react';

function StudentList({ students, deleteStudent, editStudent }) {
  return (
    <div className="list">
      <h3>Student List</h3>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.className}</td>
                <td>{stu.marks}</td>
                <td>
                  <button onClick={() => editStudent(index)}>Edit</button>
                  <button onClick={() => deleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
