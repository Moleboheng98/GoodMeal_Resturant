import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoMdAddCircleOutline, IoIosLogOut} from 'react-icons/io'
import {MdFormatListBulletedAdd, } from 'react-icons/md';

const SideBar = ({setToken}) => {
  return (
    <div className='w-[22%] min-h-screen border-r-2 border-gray-200 bg-white'>
      <div className='mt-4 px-6'>
        <h2 className='text-[32px] font-bold'>Good Meal Resturant</h2>
      </div>
      <div className='flex flex-col gap-4 pt-6'>
        <NavLink to='/add' className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-border'>
          <IoMdAddCircleOutline className='text-[35px] text-black'/>
          <p className='hidden md:block text-base'>Add Product</p>
        </NavLink>

        <NavLink to='/list' className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-border'>
          <MdFormatListBulletedAdd className='text-[35px] text-black'/>
          <p className='hidden md:block text-base'>Product List</p>
        </NavLink>

        <NavLink to='table' className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-border'>
          <MdFormatListBulletedAdd className='text-[35px] text-black' />
          <p className='hidden md:block text-base'>Reservations</p>
        </NavLink>
        <button onClick={() =>setToken('')}
        className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-300 text-gray-600 hover:bg-amber-600 hover:text-white w-full text-left'>
          <IoIosLogOut />
          <p className='hidden md:block text-base'>LogOut</p>
        </button>
      </div>
    </div>
  )
}

export default SideBar
