import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-100'>
            <td className='hidden md:block py-6 px-1'>4628483453</td>
            <td className='py-6'>12.01.2024</td>
            <td>89.90</td>
            <td className='hidden md:block py-6 px-1'>Burger Menu(1), Margherita (1), Cola(2)</td>
            <td className='py-6 px-1 text-red-400'>On the way..</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>4628483453</td>
            <td className='py-6'>12.01.2024</td>
            <td>89.90</td>
            <td className='hidden md:block py-6 px-1'>Burger Menu(1), Margherita (1), Cola(2)</td>
            <td className='py-6 px-1 text-green-600'>Delivered</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>4628483453</td>
            <td className='py-6'>12.01.2024</td>
            <td>89.90</td>
            <td className='hidden md:block py-6 px-1'>Burger Menu(1), Margherita (1), Cola(2)</td>
            <td className='py-6 px-1 text-green-600'>Delivered</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>4628483453</td>
            <td className='py-6'>12.01.2024</td>
            <td>89.90</td>
            <td className='hidden md:block py-6 px-1'>Burger Menu(1), Margherita (1), Cola(2)</td>
            <td className='py-6 px-1 text-green-600'>Delivered</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>4628483453</td>
            <td className='py-6'>12.01.2024</td>
            <td>89.90</td>
            <td className='hidden md:block py-6 px-1'>Burger Menu(1), Margherita (1), Cola(2)</td>
            <td className='py-6 px-1  text-green-600'>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage