import React from 'react'
import {useUpdateStudentMutation} from './services/StudentApi';

const UpdateStudent = ({selectedStudent}) => {
  const [updateStudent, {isLoading}] = useUpdateStudentMutation();

  function submitStudent(event) {
    event.preventDefault();
    updateStudent({student_id: selectedStudent.student_id,
       first_name: event.target['first_name'].value,
       last_name: event.target['last_name'].value,
       courses: event.target['courses'].value,
      });
    event.target.reset();
  }

  return (
    <div style={{backgroundColor: "#d5e6ff", width: 800, height: 150, border:"1px solid #ccc", borderRadius: "5px"}}>
      <form onSubmit={(e) => submitStudent(e)}>
        <h3>Update Student</h3>
        <div>
          {selectedStudent ? `${selectedStudent.student_id} - ${selectedStudent.first_name}` : 'No Selected Student'}
        </div>
        <div>
          <label htmlFor='student'>First Name:</label> <input type="text" id='student' />
        </div>
        <br />
        <div>
          {selectedStudent ? `${selectedStudent.student_id} - ${selectedStudent.last_name}` : 'No Selected Student'}
        </div>
        <div>
          <label htmlFor='student'>Last Name:</label> <input type="text" id='student' />
        </div>
        <br />
        <div>
          {selectedStudent ? `${selectedStudent.student_id} - ${selectedStudent.courses}` : 'No Selected Student'}
        </div>
        <div>
          <label htmlFor='student'>Courses:</label> <input type="text" id='student' />
        </div>
        <div>
          Name: 
          <input type="text" id='first_name'/>
        </div>
        <div>
          Family: 
          <input type="text" id='last_name'/>
        </div>
        <div>
          Study: 
          <input type="text" id='courses'/>
        </div>
        <br />
        <div>
          <input type='submit' value='Update Student' disabled = {!selectedStudent || isLoading} />
          {isLoading && ' Loading...'}
        </div>
      </form>
    </div>
  )
}

export default UpdateStudent;