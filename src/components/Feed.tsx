import { Feather, Share, Share2, ThumbsUp } from 'lucide-react'
import React from 'react'

type Props = {}

const data = [
    {userId: "1", logo: "logo", postedOn: "6 Jan 2024", userName: "University",heading: "UFM Hearing of ETE Odd Semester, Academic Year 2024-25", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "2", logo: "logo", postedOn: "12 Feb 2024", userName: "Prakash Jha",heading: "Extension of Last Date for Course Registration", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "3", logo: "logo", postedOn: "8 Apr 2024", userName: "Priyanka",heading: "Counselling Service at GDGU", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "4", logo: "logo", postedOn: "15 Apr 2024", userName: "Prachi",heading: "Registration of Non Credit VAC Courses", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "5", logo: "logo", postedOn: "1 May 2024", userName: "Himanshu ",heading: "Course Registration on ERP for EVEN SEMESTER 2024-25", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "6", logo: "logo", postedOn: "7 Jul 2024", userName: "John Doe",heading: "Updated URL of GDGU ERP (DigiiCampus)", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
    {userId: "7", logo: "logo", postedOn: "3 Dec 2024", userName: "Unidentified",heading: "UFM Hearing of ETE Odd Semester, Academic Year 2024-25", post: "The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision. The final results of UFM cases reported during the conduct of End-Term Examinations of Odd Semester, Academic Year 24-25 will be released only after the UFM hearing final decision.", likes: 10, comments: 5},
]

const Feed = (props: Props) => {
  return (
    <div className="mt-4">
        <div className="h-16"></div>
        {data.map((post, index) => (
            <div className="bg-white text-yellow-950 dark:text-gray-100 dark:bg-blue-800 p-4 my-4 rounded-lg shadow-md w-full sm:w-4/5 md:w-4/6 lg:w-3/6 m-auto" key={index}>
                <div className="flex items-center">
                <img src={post.logo} alt="logo" className="w-10 h-10 rounded-full" />
                    <div className="ml-2">
                    <p className="font-semibold text-blue-800 mb-1">{post.userName}</p>
                    <p className="text-xs font-mono">{post.postedOn}</p>
                    </div>
                </div>
                <div className="mt-4 ml-12">
                    <h1 className="text-xl font-bold">{post.heading}</h1>
                    <p className="mt-2 text-sm font-medium">{post.post}</p>
                </div>
                <div className="mt-4 flex justify-between gap-4 items-center text-sm md:text-l">
                    <button className="p-3 w-full hover:p-1 hover:border-2 border-gray-400 text-gray-500 rounded-md flex justify-center items-center gap-2"><ThumbsUp/> Likes{post.likes}</button>
                    <button className="p-3 w-full hover:p-1 hover:border-2 border-gray-400 text-gray-500 rounded-md flex justify-center items-center gap-2"><Feather/> Comment {post.comments}</button>
                    <button className="p-3 w-full hover:p-1 hover:border-2 border-gray-400 text-gray-500 rounded-md flex justify-center items-center gap-2"><Share2/> Share</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Feed