import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Services.css"

const Services = () => {
    const [courses, setCoursrs] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/8c729952-c8c3-4d9e-a29b-ad5ed3460d7a")
            .then(res => res.json())
            .then(data => setCoursrs(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="m-4">
                <h1 className="our p-3">Our Services</h1>

                <div className="all-service">
                    {
                        courses.map(course => <AllServices course={course} />)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;