import PropTypes from 'prop-types'
import './Course.css'
const Course = ({props,handleCart}) => {
    // console.log(props)
    const {course_name,description,duration,image_url}=props;
    return (
        <div className='card'> 
            <img src={image_url} alt="failed" />
            <h2>{course_name}</h2>
             <p>{description}</p>
             <p>Duration: {duration}</p>
             <button onClick={()=>handleCart(props)}>Add to cart</button>
        </div>
    );
};
Course.propTypes={
    props: PropTypes.object.isRequired,
    course_name:PropTypes.any,
    description:PropTypes.any,
    duration:PropTypes.any,
    image_url:PropTypes.any,
}

export default Course;