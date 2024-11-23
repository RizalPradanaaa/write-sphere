import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mx-auto mt-8 w-3/4 font-bold">
        <NavigationMenu>
                <p className="font-bold italic">Write Sphere</p>
        </NavigationMenu>
        <NavigationMenu className='hidden md:flex '>
            <div className="flex font-bold">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Homepage
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
                </NavigationMenuLink>
                <div className="m-0">
                    <Button variant={"outline"} className='me-4'>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                    <Button>
                        <Link href="/sig">Sign In</Link>
                    </Button>
                </div>
            </div>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet>
            <SheetTrigger className='md:hidden'>☰</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Homepage</SheetTitle>
                    <SheetTitle>About</SheetTitle>
                    <SheetTitle>Contact</SheetTitle>
                    </SheetHeader>
                </SheetContent>
        </Sheet>
    </div>
  );
}
