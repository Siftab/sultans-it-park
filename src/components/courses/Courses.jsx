import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import './Courses.css'
import Cart from "../cart/Cart";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Siftab/siftab-apis/main/IT-course`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses)
const handleCart=(props)=>{
    const newCart = [...cart,props];
    setCart(newCart);
    // console.log(newCart)
}
    return (
        <div>
            <Cart props={cart}></Cart>
            <p>course {courses.length}</p>
            <div className="card-container">{
                courses.map(course => <Course key={course.id} props={course} handleCart={handleCart} ></Course>)
            }</div>
        </div>
    );
};

export default Courses;