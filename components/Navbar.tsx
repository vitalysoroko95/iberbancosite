"use client"
 
import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
   
  const components: { title: string; href: string; description: string, icon: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "Embracing the World of Virtual Currencies.",
        icon: 'submenu_item_1'
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "Foreign Exchange Excellence",
        icon: 'submenu_item_2'
    },

    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Effortless Money Orders",
        icon: 'submenu_item_3'
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Seamless Money Transfers",
      icon: 'submenu_item_4'
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "Your Trusted Payment Service Provider",
        icon: 'submenu_item_5'
    },
  ]






export default function Navbar (){
return(
    <nav className="flex items-center gap-12" >
        <Link className="link" href={'/'}>Home</Link>
        <Link className="link" href={'/about'}>About Us</Link>
        <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex px-[3rem]  items-center gap-[3rem]">
              {components.map((component) => (
                <Link
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="flex items-center  text-'#979797' py-[2rem] gap-[0.88rem] w-full font-medium max-w-[13.75rem]"
                >
                  <Image alt="submenu_icon" width={32} height={32} src={`./assets/icons/${component.icon}.svg`}  />
                  {component.description}
               
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>
        <Link className="link" href={'/about'}>Why Us?</Link>
        <Link className="link" href={'/about'}>FAQ</Link>
        <Link className="link" href={'/about'}>Contacts</Link>
    </nav>
)
}