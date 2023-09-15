import PropTypes from 'prop-types'
const Courses = ({course}) => {
    const {course_name, course_details,  price, credit_hours, img} = course;
    return (
        <div>
            <img src={img} alt="" />
            <p>{course_name}</p>
            <p>{course_details}</p>
            <div>
                <p>{price}</p>
                <p>{credit_hours}</p>
            </div>
        </div>
    );
};
Courses.propTypes ={
    course : PropTypes.object.isRequired
}

export default Courses;