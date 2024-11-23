import { Instagram, Linkedin, MessageCircleMore } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col items-center mx-auto w-3/4 font-bold mb-16">
        <hr className='w-full mt-2 text-slate-950 text-2xl'/>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-4">
            Write Sphere
        </h2>
        <blockquote className="mt-2 text-slate-400 text-center italic">
        "A world for writers and readers to share views."
        </blockquote>
        <div className="flex gap-2 mt-4">
        <a href="https://wa.me/6285875328397" target="_blank" rel="noopener noreferrer" className="ml-4">
            <MessageCircleMore  className="h-6 w-6 text-slate-800 hover:text-green-600" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Instagram className="h-6 w-6 text-slate-600 hover:text-slate-800" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Linkedin className="h-6 w-6 text-slate-600 hover:text-slate-800" />
        </a>
        </div>
    </div>
  )
}
