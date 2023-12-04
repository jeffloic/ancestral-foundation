import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    let Links = [
      {name:"Home", link:"/"},
      {name:"About", link:"/about"},
      {name:"Projects", link:"/projects"},
      {name:"Volunteer", link:"/volunteer"},
      {name:"News", link:"/news"},
      {name:"Contact Us", link:"/contact"},
      // {name:"Resources", link:"/resources"},
    ];
    
      const [open, setOpen] = useState(false);
      // const { user, logout } = useAuth()
      const router = useRouter()
      return (
      <div className="shadow-md w-full fixed md:py-0 pb-4 top-0 left-0 z-50">
          <div className="md:flex items-center justify-between bg-yellow-500 py-4 md:px-10 px-7">
              <div className="cursor-pointer">
                <Link href={"/"} >
                  <span className='text-xl font-bold text-black'>
                    <img src="https://i.imgur.com/BIhOPwv.png" alt="" className='h-12 md:h-24 w-auto'/>
                  </span>
                </Link>
              </div>
              <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                  <span className='text-black'>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
              </div>
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100':'top-[-490px]'} md:opacity-100 opacity-100` }>
                  {
                       Links.map((link)=>(
                          <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                              <a href={link.link} className="text-black hover:text-white font-semibold uppercase duration-500">{link.name}</a>
                          </li>
                       ))
                  }
                  
              </ul>
          </div>
      </div>
    )
  }
  
  export default Navbar

