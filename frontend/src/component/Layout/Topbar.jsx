import React from 'react'
import { TbBrandMeta} from 'react-icons/tb';
import { IoLogoInstagram} from 'react-icons/io';
import { RiTwitterXLine} from 'react-icons/ri';
const Topbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className='container mx-auto flex justify-between items-center py-3 px-4'  >
<div className='hidden md:flex items-center space-x-4'>

    <a href="https://t.me/abdi_mink" target="_blank" className="hover:text-gray-300">
        <TbBrandMeta  className='h-5 w-s'/>
    </a>
     <a href="https://instagram.com/abdi_mink" target="_blank" className="hover:text-gray-300">
        <IoLogoInstagram  className='h-5 w-s'/>
    </a>
     <a href="https://twitter.com/abdi_mink" target="_blank" className="hover:text-gray-300">
        <RiTwitterXLine className='h-4 w-4'/>
    </a>
    
</div>

<div className="text-sm text-center flex-grow">
    <span>
        We ship worldwide - fast and reliable shipping!
    </span>
</div>

<div className='text-sm hidden md:block'> 

    <a href='tel:+125934567890 className="hover:text-gray-300"'> 
   +125 9485 03006
   </a>
</div>
      </div>
    </div>
  )
}

export default Topbar
