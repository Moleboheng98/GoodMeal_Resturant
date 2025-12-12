import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function Reservationform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeslots = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endPeriod = (hour + 1) < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  return (
    <div className='min-h-screen bg p-6 md:p-12'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        {/* Reservation Form */}
        <form className='md:col-span-2 bg2 p-8 shadow-md rounded-lg'>
          <h2 className='text-xl font-semibold text-amber-500 uppercase tracking-wider'>Book a Table</h2>
          <h1 className='text-3xl font-bold mb-6 text-white'>
            Dine with Us — <span className='text-amber-500'>Reserve Now</span>
          </h1>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Full Names */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Full Names</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Full Names'
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              />
            </div>

            {/* Email */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              />
            </div>

            {/* Contact No */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Contact No *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Contact No'
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              />
            </div>

            {/* Reservation Date */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Reservation Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              />
            </div>

            {/* Time for Reservation */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Time for Reservation *</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              >
                <option value="">Select Time</option>
                {timeslots().map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* Number of Guests */}
            <div className='grid gap-1.5'>
              <label className='font-bold text-white'>Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className='w-full p-3 mb-3 border bg-white text-black rounded-md focus:ring focus:ring-gray-300'
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} Guest(s)</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type='submit'
            className='w-full mt-6 bg-amber-500 text-white hover:bg-amber-600 transition font-bold py-3 rounded-md'
          >
            Book Now
          </button>
        </form>

        {/* Contact Info */}
        <div className='bg3 text-gray-300 p-8 shadow-md rounded-lg space-y-10 text-center'>
          <div>
            <h3 className='text-3xl font-bold text-white'>Address</h3>
            <p>123 Santon Sun hotel</p>
          </div>
          <div>
            <p>Contact Us</p>
            <h3 className='text-3xl font-bold text-white'>071 891 4455</h3>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-white'>Trading Hours</h3>
            <p>Mon - Sun: 11:00 AM - 10:00 PM</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2 text-white'>Our Socials</h3>
            <div className='flex gap-4 justify-center'>
              <FaFacebook className='text-4xl text-white' />
              <FaTwitter className='text-4xl text-white' />
              <FaInstagram className='text-4xl text-white' />
              <FaTiktok className='text-4xl text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservationform;