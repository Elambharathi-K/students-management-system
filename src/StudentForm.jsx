import React, { useState, useEffect } from 'react';

function StudentForm({ addStudent, existingData }) {
  const [student, setStudent] = useState({ name: '', className: '', marks: '' });

  useEffect(() => {
    if (existingData) setStudent(existingData);
  }, [existingData]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.className && student.marks) {
      addStudent(student);
      setStudent({ name: '', className: '', marks: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={student.name} onChange={handleChange} placeholder="Student Name" />
      <input name="className" value={student.className} onChange={handleChange} placeholder="Class" />
      <input name="marks" value={student.marks} onChange={handleChange} placeholder="Marks" />
      <button type="submit">{existingData ? 'Update' : 'Add'} Student</button>
    </form>
  );
}

export default StudentForm;
