import { useEffect } from "react";
import { useState } from "react";
import Courses from "./Courses";

const Course = () => {
    const [course, courseCount]= useState([]);
    useEffect(( )=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => courseCount(data))
    } ,[])
    
    return (
        <div className="md:w-9/12 border border-red-300 rounded-3xl ">
            <h1>Total Course : {course.length}</h1>
            
          <div className="grid md:grid-cols-3 justify-items-center items-center">
          {
                course.map(course => <Courses key={course.id} course={course} ></Courses> )
            }
          </div>
            
            
            
        </div>
    );
};

export default Course;