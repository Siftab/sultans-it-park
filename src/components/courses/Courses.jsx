import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import './Courses.css'


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Siftab/siftab-apis/main/IT-course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)

    return (
        <div>
            <p>course {courses.length}</p>
            <div className="card-container">{
                courses.map(course => <Course key={course.id} props={course}></Course>)
            }</div>
        </div>
    );
};

export default Courses;