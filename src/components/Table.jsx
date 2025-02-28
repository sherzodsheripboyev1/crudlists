import React from 'react'

function Table({ dats, useArr, setData }) {

  // console.log(arr);
  const deleteBooks = (index) => {
    console.log('delete' + index);
    let curennt_data = [...dats];
    curennt_data.splice(index, 1)
    useArr(curennt_data)
  }

  return (
    <>
      <table className='w-[80%] mx-auto border-2 border-gray-400 my-5 text-xl'>
        <thead>
          <tr>
            <th className='border-2 border-gray-400 px-3 py-1'>N1</th>
            <th className='border-2 border-gray-400 px-3 py-1'>Name</th>
            <th className='border-2 border-gray-400 px-3 py-1'>Author</th>
            <th className='border-2 border-gray-400 px-3 py-1'>Year</th>
            <th className='border-2 border-gray-400 px-3 py-1'>Edit</th>
            <th className='border-2 border-gray-400 px-3 py-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dats.map((book, index) => (
            <tr key={index}>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '>{index + 1}</td>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '>{book?.name}</td>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '>{book?.author}</td>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '>{book?.year}</td>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '><button onClick={() => { setData(index) }} className='bg-blue-600 px-5 text-blue-50 active:bg-blue-400 py-1 rounded-xl'>Edit</button></td>
              <td className='border-2 border-gray-400 px-3 py-1 text-center '><button onClick={() => { deleteBooks(index) }} className='bg-blue-600 px-5 text-blue-50 active:bg-blue-400 py-1 rounded-xl'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table;