import React, { useEffect, useState } from 'react';
import CourseCart from '../CourseCart/CourseCart';
import "./OurServices.css"

const OurServices = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/8c729952-c8c3-4d9e-a29b-ad5ed3460d7a")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    let fourData = [];
    for (const course of courses) {
        if (fourData.length < 4) {

            fourData.push(course)
        }
    }
    return (
        <div className="card">
            <div className="side-title">
                <h2>Our Services</h2>
            </div>
            <div className="cart">
                {
                    fourData.map(data => <CourseCart course={data} key={data.id} />)
                }
            </div>
        </div>
    );
};

export default OurServices;