import PropTypes from "prop-types";
const Courses = ({ course }) => {
  const { course_name, course_details, price, credit_hours, img } = course;
  return (
    <div className="grid bg-base-100 shadow-xl justify-items-center p-5  h-[350px] lg:w-[350px] xl:w-[320px]">
      <div className="">
        <img src={img} alt="" />
        <p className="text-[#1C1B1B] text-lg font-semibold">{course_name}</p>
        <p className="text-sm font-normal text-[#1C1B1B99]">{course_details}</p>
      </div>
      <div className="flex">
        <p className="text-base font-medium text-[#1C1B1B99]">
        
          Pirce: {price}
        </p>
        <p className="text-base font-medium text-[#1C1B1B99]">
          Credit: {credit_hours}
        </p>
      </div>
      <button className="border rounded-lg border-[#2F80ED] w-[280px] bg-[#2F80ED] text-white">
        Select
      </button>
    </div>
  );
};
Courses.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Courses;
