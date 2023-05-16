import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Header from "../../shared/Header";

const CheckOut = () => {

    const data = useLoaderData();
    const {_id, title,img,price } = data ;
    const {user} = useContext(AuthContext)
   


    const handleConfirm =(e)=>{
        e.preventDefault()
        const form = e.target ;
        const name = form.name.value ;
        const date = form.date.value ;
        const price = form.price.value ;
        const email = form.email.value ;

        const order = {
            customerName : name ,
            date,
            email,
            img,
            price,
            service_id : _id,
            service : title 
        }
        console.log(order)

        fetch('https://car-doctor-server-st9g.vercel.app/bookings',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div>
            <Header>Check Out</Header>
            <div className="hero min-h-[50vh] mt-20 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleConfirm} className="card-body">
                           <div className="lg:flex gap-5">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" />
                            </div>
                           </div>
                           <div className="lg:flex gap-5">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Order confirm" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;