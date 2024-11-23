import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export default function Hero() {
  return (
    <div className="flex items-center justify-between mx-auto mt-4 w-3/4 font-bold flex-wrap md:flex-nowrap md:gap-4">
        <Card className="w-full md:w-3/5 h-[200px] md:h-[380px] bg-cover bg-center relative rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/img/test.jpg")' }}>
            <div className="flex flex-col h-full justify-between">
                <div className="p-4">
                    {/* Content above footer */}
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                    <CardFooter className="relative z-10 text-white p-4 flex flex-col items-start md:mx-4 md:my-2">
                        <p className="text-[10px] md:text-md border-3 rounded-full px-4 py-1 ring-white ring-1 hover:bg-white hover:text-black font-semibold mb-1">
                            Bussines
                        </p>
                        <h3 className="scroll-m-20 text-sm md:text-2xl font-semibold tracking-tight">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ad obcaecati
                        </h3>
                    </CardFooter>

                </div>
            </div>
        </Card>

        <ul className='w-full md:w-2/5 h-[200px] md:h-[380px] mt-3 md:mt-0'>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                Other featured posts
            </h3>
            <li className="flex items-center mb-5 border-b border-slate-200 pb-2">
                <img className="w-18 h-14 mr-4 rounded-2xl" src="/img/test.jpg" alt="" />
                <h3 className="scroll-m-20 text-sm md:text-lg font-semibold tracking-tight">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ad obcaecati
                </h3>
            </li>
        </ul>
    </div>
  )
}
