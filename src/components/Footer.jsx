import React from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../constants'
import { BsSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="h-28 border-t-2 border-black ">
      <div className="flex flex-col items-center gap-2  md:gap-4 py-4">
        <div className="flex items-center justify-center">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-4">
            {footerData.map((items) => (
              <Link to={items.link}>
                <li className="flex items-center gap-[1px] md:text-2xl">
                  {items.icon}
                  <span>{items.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex justify-center border-t-2 border-gray-600">
          <ul className="flex items-center justify-center gap-2 py-4 text-md">
          
            <li className="text-red-700">
              <BsSuitHeartFill />
            </li>
            <li>@</li>
            <li className="text-yellow-900 underline font-bold">Kelzzzcodes</li>
            <li>2023</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Footer
