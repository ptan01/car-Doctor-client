/* eslint-disable react/prop-types */

import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[240px] rounded-xl" src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{service.title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className="text-xl font-semibold text-red-600">Price : ${service.price}</p>
                    <Link to={`/checkout/${service._id}`}>
                        <button className="btn btn-square btn-outline">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;