import React, { use } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../App'
import { useEffect } from 'react'

const Listmenu = ({token}) => {
  const [list, setList] = React.useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list', {
        headers: {token}
      })
      if(response.data.success){
        setList(response.data.products)
      }else{
        toast.error(response.data.message)
      }
     } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
        }
    useEffect(() => {
      fetchList()

    }, [])
  return (
    <div>
      <p className='mb-2 font-bold text-2xl'>Menu List</p>
      <div className='flex felx-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 font-semibold'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
          
        </div>
        {list.map((item,index) => 
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300'>
            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-md'/>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <div>
              <button className='bg-green-500 text-white px-3 py-1 rounded-md mr-2'>Edit</button>
              <button className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Listmenu
