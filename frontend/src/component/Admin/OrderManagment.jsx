import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllOrders, updateOrderStatus } from "../../redux/slices/adminOrderSlice";
const OrderManagment = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const { user } = useSelector((state) => state.auth);
const { orders, loading, error } = useSelector((state) => state.adminOrders);

useEffect(() => {
  if (!user || user.role !== "admin"){
    navigate("/");
  }else {
    dispatch(fetchAllOrders());
  }
}, [dispatch, user, navigate]);

const handleStatusChange = (orderId, status) => {
 dispatch(updateOrderStatus({id: orderId, status}));};
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

  return (
    <div className='max-w-7xl mx-auto p-6'>
  <h2 className="text-2xl font-bold mb-6">Order Managment</h2>
  <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="min-w-full text-left text-gray-500">
<thead className='bg-gray-100 text-xs uppercase text-gray700 '>
    <tr>
        <td className="py-3 px-4">Order ID</td>
         <td className="py-3 px-4">Customer</td>
          <td className="py-3 px-4">Total Price</td>
           <td className="py-3 px-4">Status</td>
            <td className="py-3 px-4">Actions</td>
    </tr>
</thead>
<tbody>
    {orders.length > 0 ? (

  orders.map((order) => (
    <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
        <td className="py-4 px-4 font-mediu, text-gray-900 whitespace-nowrap">
           #{order._id}
        </td>
        {/* <td className="p-4">{order.user.name}</td> */}
        <td className="p-4">{order.user?.name || 'Unknown User'}</td>

         <td className="p-4">{order.totalPrice}</td>
          <td className="p-4">
            <select
             value={order.status}
              onChange={(e) => handleStatusChange (order._id, e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
              >
<option value="Processing">Process</option>
<option value="Shipped">Shipped</option>
<option value="Delivered">Delivered</option>
<option value="Cancelled">Cancelled</option>

              </select>
          </td>
           <td className="p-4">
            <button onClick={() => handleStatusChange(order._id, "Delivered")}
                className='bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600'
                >Mark as Delivered</button>
           </td>
    </tr>
  ))  ) : (<tr>
    <td colSpan={5} className='p-4 text-center text-gray-500'>No Orders found.</td>
  </tr>)}
</tbody>

    </table>
  </div>
   
    </div>
  )
}

export default OrderManagment
