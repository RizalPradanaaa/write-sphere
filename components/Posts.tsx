import React from 'react'
import { Card,CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Posts() {
  return (
    <div className="mx-auto w-3/4 mb-36">
        <h2 className="text-base text-dark md:text-3xl font-semibold mt-7">
            Recent posts
        </h2>
        <div className="flex items-center gap-6 md:mb-2 -mt-12 md:mt-10 flex-wrap md:flex-nowrap">
            <Card className="w-full md:w-1/3 p-0 border-none shadow-none">
                <CardHeader className="p-0">
                    <img src="/img/test.jpg" alt="" className="w-full rounded-xl" />
                </CardHeader>
                <CardContent className="p-0 mt-2">
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm text-slate-600 my-2 text-justify font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel nam? Quisquam velit quis rerum sed omnis facere sapiente eius asperiores.
                </p>
                </CardContent>
                <CardFooter className="flex items-center p-0 mt-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold text-slate-600 ml-2">
                        Shadcn
                    </p>
                    <p className="text-sm font-semibold text-slate-600 ml-2"><span className="text-slate-600 text-lg">•</span> 3 min read</p>
                </CardFooter>
            </Card>
            <Card className="w-full md:w-1/3 p-0 border-none shadow-none">
                <CardHeader className="p-0">
                    <img src="/img/test.jpg" alt="" className="w-full rounded-xl" />
                </CardHeader>
                <CardContent className="p-0 mt-2">
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm text-slate-600 my-2 text-justify font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel nam? Quisquam velit quis rerum sed omnis facere sapiente eius asperiores.
                </p>
                </CardContent>
                <CardFooter className="flex items-center p-0 mt-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold text-slate-600 ml-2">
                        Shadcn
                    </p>
                    <p className="text-sm font-semibold text-slate-600 ml-2"><span className="text-slate-600 text-lg">•</span> 3 min read</p>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
