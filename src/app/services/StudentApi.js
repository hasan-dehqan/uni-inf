 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const StudentApi = createApi({
  reducerPath: 'StudentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),
  endpoints: (builder) => ({

    getStudents: builder.query({
      query: (page) => `students?_page=${page}&_limit=4`,
      perovidesTags:['Students'],
    }),

    createStudent: builder.mutation({
      query: (newStudent) => ({
        url: 'students',
        method: 'POST',
        body: {newStudent},
      }),
      invalidatesTags: ['Students'],
    }),

    updateStudent: builder.mutation({
      query: (student) => ({
        url: `students/${student.id}`,
        method: 'PUT',
        body: {student},
      }),
    invalidatesTags: ['Students'], 

    }),
    deleteStudent: builder.mutation({
      query: (studentId) => ({
        url: `students/${studentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'], 
    }),
  }),
});

export default StudentApi;
  
export const 
{ 
    useGetStudentsQuery,
    useCreateStudentMutation,
    useUpdateStudentMutation,
    useDeleteStudentMutation,
} = StudentApi;

