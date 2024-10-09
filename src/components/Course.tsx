interface CourseProps {
	name: string;
	isCompleted: boolean;
}

export default function Course(props: CourseProps) {
	if (props.isCompleted) return <li>{props.name} ✅</li>;
	return <li>{props.name} ❌</li>;
}
