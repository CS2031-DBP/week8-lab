import Course from "./Course"

function CourseList() {
  return (
    <>
      <h1>Course List</h1>
      <article>
        <Course name="React" description="React is a JavaScript library for building user interfaces." />
        <Course name="Vue" description="Vue is a progressive JavaScript framework for building user interfaces." />
      </article>
    </>
  )
}

export default CourseList