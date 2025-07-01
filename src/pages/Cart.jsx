import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart?.cartItems) || [];
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();

  return (
    <div className=" w-full max-m-md bg-gray-100 m-4 p-4 sm:p-6 shadow-lg rounded-lg mx-auto">
        <h1 className="text-lg font-bold text-center mb-4 "> Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className='text-center'>
          <p className=" text-xl  text-red-500">Your cart is empty😒</p>
          <Link to={"/"}className=" text-sm  text-blue-700" > Continue shopping 🛒</Link>
          </div>
        ) : (
          <div className="space-y-4">
              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b pb-3">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain"/>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500">{item.weight}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-end">
                        <p className="text-green-600 font-semibold ">
                            {item.price}₹
                        </p>
                        <p onClick={() => dispatch(DeleteItem(item))}
                        className='text-red-600 text-lg hover:cursor-pointer'>
                          🗑️  
                        </p>
                        <div className="flex items-center border rounded  p-1 overflow-hidden">
                            <span>QTY:{item.quantity}</span>
                        </div>
                    </div>
                </div>
              ))}


              <div className='mt-6  pt-4'>
                  <div className='flex justify-between font-semibold text-lg mb-2'>
                      <span>
                          Total Products:
                      </span>
                      <span>
                          {totalQuantity}
                      </span>
                  </div>
              </div>
              
              <div className='mt-6  pt-4'>
                  <div className='flex justify-between font-semibold text-lg mb-2'>
                      <span>
                          Total Price:
                      </span>
                      <span>
                          {totalPrice}₹
                      </span>
                  </div>
              </div>
              <button className='w-full bg-green-500 hover:bg-green-800 transition text-white py-3 rounded-lg font-semibold text-lg'>
                  Proceed to Checkout
              </button>
          </div>
        )}
    </div>
  )
}

export default Cart