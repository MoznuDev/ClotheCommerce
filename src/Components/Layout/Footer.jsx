import React from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='max-w-screen-2xl mx-auto bg-btnColor text-white py-10 px-4'>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className='flex flex-col md:flex-row justify-self-start gap-10 w-full md:w-3/4 mb-10 mx-10'>
          <div>
            <h2 className='text-2xl font-jaro mb-4'>Rivo</h2>
            <p className='mb-3'>Social Media</p>
            <div className="flex gap-4 text-2xl">
              <FaGithub />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>

          <div>
            <ul>
              <li className='text-2xl mb-3'>Shop</li>
              <li>Products</li>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className='text-2xl mb-3'>Company</li>
              <li>About us</li>
              <li>Contact</li>
              <li>News</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h2 className='mb-4 text-2xl font-semibold'>Stay up to date</h2>
          <div className="flex">
            <input
              type="email"
              placeholder='Enter your email'
              className='border-gray-400 border-2 px-4 py-2 text-black rounded-l-md w-full focus:outline-none'
            />
            <button className='bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-r-md transition duration-300'>
              Submit
            </button>
          </div>
          <div className="flex justify-end gap-4 mt-16">
           <h2>Terms</h2>
           <h2>privacy</h2>
           <h2>cookies</h2>
          </div>
        </div>
      </div>
       <p className='mt-4 text-sm text-center'>© 2024 Rivo. All rights reserved.</p>
    </section>
  )
}

export default Footer
