/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Header from "../../shared/Header";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Bookings = () => {


    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [depend , setDepend] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://car-doctor-server-st9g.vercel.app/bookings?email=${user?.email}`,{
            method: "GET",
            headers: {
                authorization : `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [depend])


    const handleDelete =(id)=>{
        // const confarm = confirm('Are you sure to delete this ?')
        //  if(confarm){
           
        //  }
         Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-st9g.vercel.app/bookings/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                    console.log(data)
    
                    setDepend(!depend)
                })
            }
          })
        
    }

    const handleConfrim =(id)=> {

        fetch(`https://car-doctor-server-st9g.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            setDepend(!depend)
            console.log(data)
        })
        // console.log(id)
        
    }




    return (
        <div>
            <Header>Bookings</Header>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name and Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                    {
                        bookings.map(booking => <BookingRow
                            handleDelete={handleDelete}
                            handleConfrim={handleConfrim}
                            key={booking._id}
                            booking={booking}
                            ></BookingRow>)
                    }    
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default Bookings;