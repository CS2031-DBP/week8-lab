import React from 'react'

interface CourseProps {
  name: string;
  description: string;
}

function Course(data: CourseProps) {
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </>
  );
}

export default Course