import Course from "./Course"

function CourseList() {
  const courses = [
    { id: 1, name: 'DBP', isCompleted: true },
    { id: 2, name: 'BD1', isCompleted: false },
    { id: 3, name: 'EDO', isCompleted: true },
  ];

  return (
    <>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <Course
            key={course.id}
            name={course.name}
            isCompleted={course.isCompleted}
          />
        ))}
      </ul>
    </>
  )
}

export default CourseList