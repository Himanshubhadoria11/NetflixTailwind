import React from 'react'

function Navbar() {
  return (
<nav className='flex justify-between items-center md:px-[150px] lg:px-[200px] px-5  py-5'>
  <div className='logo '>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
     alt="" className='md:w-[150px] w-[100px]' />
  </div>
  {/* logo end */}
  <div className='right flex gap-4 items-center '>
    <div className='select text-white bg-slate-800 md:px-4 px-2 py-1 rounded-md border-[1.5px]'>
      <select name="" id="" className="bg-transparent outline-none">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>

      </select>

    </div>
    <button className='text-white bg-[#e50914] py-1 px-3 rounded-md hover:bg-red-500 text-md'>Sign In</button>

  </div>
  {/* right */}

</nav>
  )
}

export default Navbar