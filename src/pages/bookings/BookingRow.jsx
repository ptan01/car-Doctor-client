
const BookingRow = ({ booking ,handleDelete,handleConfrim }) => {

    const { price, service, img, date, _id,status } = booking

    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={img ? img : "https://i.ibb.co/ydCbDN3/5555.jpg"} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">Price: ${price}</span>
            </td>
            <td>{date ? date : '2023-05-08'}</td>
            <th>
                { status=== 'confirm' ? <span className="font-bold text-purple-700">Confirmed</span> :
                    <button onClick={()=>handleConfrim(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;