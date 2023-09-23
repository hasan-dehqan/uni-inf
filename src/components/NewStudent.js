import React from 'react';
import { useCreateStudentMutation } from './services/StudentApi';

const NewStudent = () => {
  const [createStudent, {isLoading}] = useCreateStudentMutation;
  function submitStudent(event) {
    event.preventDefault();
    createStudent(event.target['first_name, last_name, field_of_study'].value);
    event.target.reset();
  }
  return (
    <div style={{background: "#cff0ca", width: 800, height: 120, border:"1px solid @ccc",borderRadius: "5px",}}>
      <form onSubmit={(e) => submitStudent(e)}>
        <h3>New Student</h3>
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
          <input type="text" id='field_of_study'/>
        </div>
        <br/>
        <div>
          <input type="submit" value= 'Add Student' disabled= {isLoading} />
          {isLoading && ' Loading...'}
        </div>
      </form>
    </div>
  )
}

export default NewStudent;