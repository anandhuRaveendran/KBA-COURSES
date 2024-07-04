// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddCourses = () => {
  const navigate=useNavigate();
  const [title, setTitle] = useState('');
  const [courseId, setcourseId] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const notify = () => toast("Wow so easy!");
const handleSubmit= async()=>{
  const response = await fetch('http://localhost:5000/api/addQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title,courseId,type,description,price}),
  });    
  const data = await response.json();

  if (data.status === 'success') {
    navigate('/courses');
  } else {
    alert(data.message);
  }
}
  return (
    <>
    <section className="bg-white mb-20">
    <div className="container m-auto max-w-2xl py-2">
      <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
            Add Course
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Certified Blockchain Associate"
              onChange={(e) => setTitle(e.target.value)}

              required
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Course Id
            </label>
            <input
              type="text"
              id="courseId"
              name="courseId"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 1"
              onChange={(e) => setcourseId(e.target.value)}

              required
              
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Course Type
            </label>
            <select
              id="type"
              name="type"
              className="border rounded w-full py-2 px-3"
              onChange={(e) => setType(e.target.value)}

              required
            
            >
              <option value="Self-Paced">Self-Paced</option>
              <option value="Instructor-Led">Instructor-Led</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small description on the course"
              onChange={(e) => setDescription(e.target.value)}

            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <select
              id="price"
              name="price"
              className="border rounded w-full py-2 px-3"
              onChange={(e) => setPrice(e.target.value)}

              required
              
            >
              <option value="Rs.5000">Rs.5000</option>
              <option value="Rs.3500">Rs.3500</option>
              <option value="Rs.15000">Rs.15000</option>
            </select>
          </div>

          <div>
            <button
              className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={notify} >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default AddCourses