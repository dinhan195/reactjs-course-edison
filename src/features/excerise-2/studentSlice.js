/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};
let studentId = 1;
let courseId = 1;
const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: studentId++,
        name: action.payload.name,
        gender: action.payload.gender,
        courses: [],
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter((student) => {
        return student.id !== action.payload;
      });
    },
    addCourse: (state, action) => {
      state.students.map((student) => {
        if (student.id === action.payload.id) {
          const newCourse = student.courses.push({
            id: courseId++,
            course: action.payload.course,
          });
          return {
            ...student,
            courses: newCourse,
          };
        }
        return student;
      });
    },
    onRemoveCourse: (state, action) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.studentId) {
          student.courses = student.courses.filter((course) => {
            return course.id !== action.payload.courseId;
          });
        }
        return student;
      });
    },
  },
});

const { reducer, actions } = studentSlice;
export const { addStudent, removeStudent, addCourse, onRemoveCourse } = actions;
export default reducer;
