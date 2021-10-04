import React from 'react';
import "./AllServices.css"

const AllServices = (props) => {
    const { name, price, img } = props.course
    return (
        <div className="border border-dark">
            <div>
                <img className="w-100 card-img" src={img} alt="" />
            </div>
            <div>
                <h4>Course Name: {name}</h4>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default AllServices;