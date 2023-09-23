import React, {useState} from 'react';
import { useGetStudentsQuery, useDeleteStudentMutation } from '..  /app/services/StudentApi';

function StudentList({setSelectStudent}) {

  const [page, setPage] = useState(1);

  const {data: students, isLoading, isFetching, isError, error } = useGetStudentsQuery(page);
  const{deleteStudent} = useDeleteStudentMutation();

  if(isLoading || isFetching) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>{error.status}</div>
  }

  return (
    <div style={{width:600, height: 300, border: "1px solid #ccc", borderRadius : "5px", padding: 5, margin: "10px auto"}}>
      <h2>Student List</h2>
      <table style={{width: 550, margin:"10px auto"}}>
        <tr>
          <th>Id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>courses</th>
          <th>#</th>
        </tr>
        {
          students.map((student) => (
            <tr>
              <td>student.student_id</td>
              <td>student.first_name</td>
              <td>student.last_name</td>
              <td>student.courses</td>
              <td>
              <button onClick={() => setSelectStudent(student)}>edit</button> {' '}
              <button onClick={() => deleteStudent(student.student_id)}>delete</button>
              </td>
            </tr>
          ))
        }
      </table>
      <div style={{textAlign : "center"}}>
                <button disabled ={page <= 1} onClick={() => setPage ((prev) => prev - 1)} >
                  Prev
                </button>

                <button disabled = {students.lngth < 4} onClick={() => setPage ((prev) => prev + 1)}>
                  Next
                </button>

      </div>
  </div>
  )
}
export default StudentList;