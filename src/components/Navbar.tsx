import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import { Bell, BellRing, Origami } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full">
  <div className="rounded-md px-8 py-4 mx-9 flex justify-between items-center bg-slate-100 text-black dark:bg-blue-950 dark:text-white text-lg">
    <div className="flex items-center gap-2"><Origami size={28} color='red'/><span className='font-mono text-xl'>Albatross</span></div>
    <div className="relative">
      <ul className="flex">
        <li className="mx-4 relative group rounded-sm">
          <span className="cursor-pointer">
            Profile
          </span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-gray-900 w-60 shadow-lg rounded-md"
            aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
              <Link href='/profile'>Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                <Link href='/edit_profile'>Edit Profile</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Classroom</span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-gray-900 w-60 shadow-lg rounded-md"
            aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Class Schedule
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Assignments
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Course Registration
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Reserch Management
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Examinations
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Placements</span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-gray-900 w-60 shadow-lg rounded-md"
            aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Job Offers
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Career Counseling
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Campus</span>
          <div className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-gray-900 w-60 shadow-lg rounded-md" aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Hostel
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Gate Pass
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Book a venue
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Payments</span>
          <div className="absolute hidden group-hover:block top-full left-0 mt-0 bg-white dark:bg-gray-900 w-60 shadow-lg rounded-md" aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Hostel Fee
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Tution Fee
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Fine
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div className="flex items-center space-x-8">
      <div className="flex">
        <Bell width={20}/>|
        <BellRing width={20}/>
      </div>
      <ThemeSwitch />
    </div>
  </div>
  </div>
  )
}

export default Navbar
