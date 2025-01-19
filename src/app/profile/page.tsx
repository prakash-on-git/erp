import Navbar from '@/components/Navbar'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <ProfileCard/>
    </div>
  )
}

export default page
