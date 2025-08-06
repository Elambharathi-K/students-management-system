import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc

  const addStudent = (student) => {
    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = student;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const editStudent = (index) => {
    setEditIndex(index);
  };

  const filteredStudents = students
    .filter((stu) =>
      stu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stu.className.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const marksA = parseInt(a.marks);
      const marksB = parseInt(b.marks);
      return sortOrder === 'asc' ? marksA - marksB : marksB - marksA;
    });

  return (
    <div className="container">
      <h2>🎓 Student Management System</h2>
      <StudentForm
        addStudent={addStudent}
        existingData={editIndex !== null ? students[editIndex] : null}
      />

      <div className="filter-sort">
        <input
          type="text"
          placeholder="Search by Name or Class"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by Marks ({sortOrder === 'asc' ? '⬆️ Ascending' : '⬇️ Descending'})
        </button>
      </div>

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
