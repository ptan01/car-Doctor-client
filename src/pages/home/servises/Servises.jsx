import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";


const Servises = () => {

    const [services , setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
           <div className="text-center">
           <p className="text-red-600 font-semibold">Service</p>
            <h1 className="text-4xl font-bold">Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           </div>

           <div style={{display: 'grid'}} className="grid-cols-3 gap-6">
           {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default Servises;