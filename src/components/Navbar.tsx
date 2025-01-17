import React from 'react'
import ThemeSwitch from './ThemeSwitch'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <div className="border border-white rounded-md p-2 mx-9 flex justify-between items-center bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
    <div className="">Logo / GDGU</div>
    <div className="relative">
      <ul className="flex">
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Profile</span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-gray-100 dark:bg-gray-900 w-40 shadow-lg rounded-md"
            aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                View Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Edit Profile
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Classroom</span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-gray-100 dark:bg-gray-900 w-40 shadow-lg rounded-md"
            aria-hidden="true"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Class Schedule
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                Assignments
              </li>
            </ul>
          </div>
        </li>
        <li className="mx-4 relative group">
          <span className="cursor-pointer">Placements</span>
          <div
            className="absolute hidden group-hover:block top-full left-0 mt-0 bg-gray-100 dark:bg-gray-900 w-40 shadow-lg rounded-md"
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
      </ul>
    </div>
    <div className="flex items-center space-x-4">
      <div>Notifications</div>
      <ThemeSwitch />
    </div>
  </div>
  )
}

export default Navbar
