import { useRouter } from 'next/router';
import React from 'react'

const Generator = () => {
  const { query: { id } } = useRouter();

  const data = {
    name: {
      key: 'name',
      value: 'username',
      children: [],
      parent: 1,
    },
    age: {
      key: 'age',
      value: 'age',
      children: [],
      parent: 1,
    },
    what: {
      key: 'what',
      value: 'object',
      children: [
        {
          key: 'kothay?',
          value: 'address',
          children: [],
          parent: 2,
        }
      ],
      parent: 1,
    },
    array: {
      key: 'array',
      value: 'array',
      children: [],
      parent: 1,
    }
  };

  console.log(Object.entries(data))



  return (
    <div className='text-white max-w-7xl mx-auto'>
      <div className='text-5xl font-bold text-[#F4ABC4] uppercase'>Playground</div>

      <div className='border my-12 min-h-screen  border-[#F4ABC4] rounded-sm'>
        <div className='flex space-x-2 font-semibold m-1 text-lg mx-4'>
          <button className='hover:text-[#F4ABC4]'>Generator</button>
          <button className='hover:text-[#F4ABC4]'>Demo</button>
        </div>

        <main>

        </main>
      </div>

    </div>
  )
}

export default Generator
