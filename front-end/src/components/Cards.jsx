import { useEffect, useState } from "react";
import CourseCard from "./Card";
import {GridLoader} from "react-spinners"
// eslint-disable-next-line react/prop-types
const CourseCards = ({ isHome = false }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch('http://localhost:5000/courses');
        const data =await res.json();
        setCourses(data);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse()
  }, [])
 console.log(courses);
 const courseList = isHome ? courses.slice(0, 3) : courses;

  return (
    <>
      <div className='bg-purple-100 flex flex-col items-center justify-center my-10 p-10 text-center'>
        <h1 className='font-bold text-2xl md:text-4xl text-purple-800'>{isHome ? 'BROWSE OUR TOP COURSES' : 'BROWSE OUR ALL COURSES'} </h1>
        <h2 className='font-medium text-lg md:text-xl text-purple-400 mt-4'>Choose the course thats right for your career goals.</h2>

      </div> {loading?<GridLoader />:<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
        {courseList.map((course) => (
          // eslint-disable-next-line react/jsx-key
          <CourseCard key={course.id} course={course} />
        ))}
      </div>}
    </>
  );
};

export default CourseCards;