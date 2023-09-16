import PropTypes from "prop-types";
const Courses = ({ course, handleCart}) => {
  const { course_name, course_details, price, credit_hours, img } = course;
  return (
    <div className="grid bg-base-100 shadow-2xl my-3 rounded-xl justify-items-center p-5  h-[350px] lg:w-[350px] xl:w-[320px] text-center">
      <div className="space-y-2 grid justify-items-center">
        <img src={img} alt={`Cover Image of ${course_name}`} />
        <p className="text-[#1C1B1B] text-base font-semibold">{course_name}</p>
        <p className="text-sm font-normal text-[#1C1B1B99]">{course_details}</p>
      </div>
      <div className="flex w-[280px] justify-between">
        <p className="text-base font-medium text-[#1C1B1B99]">Pirce: {price} $</p>
        <p className="text-base font-medium text-[#1C1B1B99]">
          Credit: {credit_hours}
        </p>
      </div>
      <button onClick={()=>handleCart(course, course.credit_hours, course.price)} className="border rounded-lg border-[#2F80ED]  w-[280px] bg-[#2F80ED] text-white">
        Select
      </button>
    </div>
  );
};
Courses.propTypes = {
  course: PropTypes.object.isRequired,
  handleCart : PropTypes.func,

};

export default Courses;
