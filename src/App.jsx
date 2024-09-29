import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import CreateCourse from './components/CreateCourse';
import EditCourse from './components/EditCourse';
import CourseDetail from './components/CourseDetail'; // Import the CourseDetail component
import InstructorsPage from './components/InstructorsPage';
import CreateInstructor from './components/CreateInstructor';
import EditInstructor from './components/EditInstructor';
import StudentsPage from './components/StudentsPage';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserDashboard from './components/UserDashboard';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentSchedule, setStudentSchedule] = useState([]);

  // Fetch data from JSON files on component mount
  useEffect(() => {
    // Fetch courses data
    fetch('/data/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error loading courses:', error));

    // Fetch instructors data
    fetch('/data/instructors.json')
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error('Error loading instructors:', error));

    // Fetch students data
    fetch('/data/students.json')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error loading students:', error));
  }, []);

  // CRUD Operations for Courses
  const addCourse = (newCourse) => setCourses([...courses, newCourse]);
  const editCourse = (updatedCourse) => {
    setCourses(courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course)));
  };
  const deleteCourse = (id) => setCourses(courses.filter((course) => course.id !== id));

  // CRUD Operations for Instructors
  const addInstructor = (newInstructor) => setInstructors([...instructors, newInstructor]);
  const editInstructor = (updatedInstructor) => {
    setInstructors(instructors.map((inst) => (inst.id === updatedInstructor.id ? updatedInstructor : inst)));
  };
  const deleteInstructor = (id) => setInstructors(instructors.filter((inst) => inst.id !== id));

  // CRUD Operations for Students
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const editStudent = (updatedStudent) => {
    setStudents(students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Function to add a course to the student's schedule
  const addToSchedule = (courseId) => {
    const courseToAdd = courses.find((course) => course.id === courseId);
    if (courseToAdd && !studentSchedule.find((course) => course.id === courseId)) {
      setStudentSchedule([...studentSchedule, courseToAdd]);
    }
  };

  // Function to remove a course from the student's schedule
  const removeFromSchedule = (courseId) => {
    setStudentSchedule(studentSchedule.filter((course) => course.id !== courseId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/courses" 
          element={
            <CoursesPage 
              courses={courses} 
              deleteCourse={deleteCourse} 
              addToSchedule={addToSchedule} 
              studentSchedule={studentSchedule} 
              removeFromSchedule={removeFromSchedule}
            />
          } 
        />
        <Route path="/course-detail/:id" element={<CourseDetail courses={courses} />} />
        <Route path="/create-course" element={<CreateCourse addCourse={addCourse} />} />
        <Route path="/edit-course/:id" element={<EditCourse courses={courses} editCourse={editCourse} />} />
        <Route 
          path="/instructors" 
          element={<InstructorsPage instructors={instructors} deleteInstructor={deleteInstructor} />} 
        />
        <Route path="/create-instructor" element={<CreateInstructor addInstructor={addInstructor} />} />
        <Route 
          path="/edit-instructor/:id" 
          element={<EditInstructor instructors={instructors} editInstructor={editInstructor} />} 
        />
        <Route 
          path="/students" 
          element={<StudentsPage students={students} deleteStudent={deleteStudent} />} 
        />
        <Route path="/create-student" element={<CreateStudent addStudent={addStudent} />} />
        <Route path="/edit-student/:id" element={<EditStudent students={students} editStudent={editStudent} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/dashboard" 
          element={
            <UserDashboard 
              registeredCoursesCount={studentSchedule.length}
              totalInstructors={instructors.length}
              totalStudents={students.length}
            />} 
           
        />
      </Routes>
    </Router>
  );
};

export default App;
