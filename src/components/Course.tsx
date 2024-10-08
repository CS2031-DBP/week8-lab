import React from 'react'

interface CourseProps {
  name: string;
  isCompleted: boolean;
}

function Course({ name, isCompleted }: CourseProps) {
  if (isCompleted) {
    return <li >{name} ✅</li>;
  }
  return <li>{name} ❌</li>;
}

export default Course