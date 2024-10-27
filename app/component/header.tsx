import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
          <nav className="flex items-center justify-between p-4 bg-white-800 shadow-md ">
        <div className="text-Brwon text-lg font-semibold">
          INTERIOR <span className="font-bold">DESIGN</span>
        </div>
        <div className="flex-1 flex justify-center space-x-4">
          <Link href="/" className="text-black hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link href="/design" className="ml-4 text-black hover:text-yellow-400 transition">
            Services
          </Link>
        </div>
      </nav>
    </div> 
  )
}
export default Header