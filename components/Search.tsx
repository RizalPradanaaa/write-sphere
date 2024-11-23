import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className="flex w-3/4 md:w-1/2 mx-auto items-center gap-2 md:mb-2 mt-6">
        <Input type="posts" placeholder="Search posts..." className="rounded-full"/>
        <Button type="submit" className="rounded-full">
          <SearchIcon className="h-5 w-5 " />
        </Button>
    </div>
  )
}
