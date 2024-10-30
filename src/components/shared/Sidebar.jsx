import React from 'react'
import { useState } from 'react';
import { FcBullish } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex'>
            <FcBullish /> <span className='text-neutral-100 text-lg'>ForwardFootball</span>
        </div>
        <div className='flex-1'>top</div>
        <div>bottom</div>
    </div>
  )
}

export default Sidebar