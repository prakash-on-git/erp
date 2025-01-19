import React from 'react'

type Props = {}

const ProfileCard = (props: Props) => {
  return (
    <div className="pt-16">
        <div className="w-4/5 m-auto text-black bg-white dark:bg-blue-800 p-5 rounded-md">
            <div className="flex items-center gap-4">
            <div className="w-32 h-32 translate-y-8 bg-white rounded-full"></div>
            <div className="">
                <div className="text-2xl">Prakash Jha</div>
                <div className="">4th year Student</div>
            </div>
            </div>
        </div>
        <div className="w-4/5 m-auto text-black bg-white dark:bg-blue-900 p-5 rounded-md mt-8">
            <div className="">Bio</div>
            <div className="">Education Qualifications</div>
            <div className="">Experience</div>
            <div className="">Conference Proceeding Details</div>
            <div className="">Journal Publication Details</div>
        </div>
    </div>
  )
}

export default ProfileCard
