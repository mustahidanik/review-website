import React from 'react';
import "./CourseCart.css"

const CourseCart = (props) => {
    const { name, price, img } = props.course
    console.log(props.course);
    return (
        <div className="border border-dark">
            <div>
                <img className="w-100" src={img} alt="" />
            </div>
            <div>
                <h4>Course Name: {name}</h4>
                <p>Price: {price}</p>
            </div>
        </div>

    );
};

export default CourseCart;