import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='bg-gray-100 py-10 px-4 mt-10  '>
<div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4' >
   {/* Col 1 */}
   


<div>
<h3 className='font-semibold text-lg mb-4 text-gray-700'>
Company Name
</h3> 
<ul className='text-gray-600 text-sm space-y-2'>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Privacy Policy</li>
    <li>T&C</li>
    
</ul>
</div>
{/* Col-2 */}
<div>
    <h3 className='font-semibold text-lg mb-4 text-gray-700'>

        Help
    </h3>
    <ul className='text-gray-600 text-sm space-y-2'>
    <li>FAQs</li>
    <li>Contact Us</li>
    <li>Order Status</li>
    <li>Returns</li>
    </ul>



</div>
{/* Col-3 */}
<div>
    <h3 className='font-semibold text-lg mb-4 text-gray-700'>
        Categories
    </h3>
    <ul className='text-gray-600 text-sm space-y-2'>
    <li>Friuts</li>
    <li>Electronics</li>
    <li>Fashion</li>
    <li>Dairy & Bakery</li>
    </ul>



</div>
{/* Col-4 */}
<div>
    <h3 className='font-semibold text-lg mb-4 text-gray-700'>
        Follow us 
    </h3>
    <ul className='text-blue-900 text-sm space-y-2'>
    <li><a href="#" className="hover:underline">Facebook</a></li>
    <li><a href="#" className="hover:underline">Instagram</a></li>
    <li><a href="#" className="hover:underline">Twitter</a></li>
    <li><a href="#" className="hover:underline">Threads</a></li>
    </ul>



</div>

</div>
<div className='border-t border-gray-600 mt-10 pt-4 text-center text-sm'>
    @ 2025 Blinkit😍
</div>
   </footer>
  
  )
}

export default Footer