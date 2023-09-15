import { useEffect } from "react";
import { useState } from "react";
import Courses from "./Courses";
import PropTypes from "prop-types";

const Course = ({handleCart}) => {
    const [course, courseCount]= useState([]);
    useEffect(( )=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => courseCount(data))
    } ,[])
    
    return (
        <div className="md:w-9/12  p-2">
            <h1 className="text-start font-semibold text-3xl">Total Course : {course.length}</h1>
            
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center items-center">
          {
                course.map(course => <Courses key={course.id} course={course} handleCart={handleCart} ></Courses> )
            }
          </div>
            
            
            
        </div>
    );
};
Course.propTypes ={
    handleCart : PropTypes.func
}
export default Course;