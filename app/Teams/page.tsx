import React from 'react'
import { teamMembers } from '../constant'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Teams = () => {

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 mt-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200 ">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
   
  


export default Teams