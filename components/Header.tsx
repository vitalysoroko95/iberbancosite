import Image from 'next/image'

import Navbar from '@/components/Navbar'
import {Button} from '@/components/ui/button'

export default function Header() {
  return (
    <header className='px-[3rem] bg-primary border-b-[1px] border-[#EAEAEA] flex justify-between items-center'>
    
          <div className='flex gap-8 items-center'>
            <Image
              src="/assets/logo.svg"
              width={33}
              height={38}
              alt="logo"
              priority={false}
              />
              <Image
              src="/assets/logo_title.svg"
              width={125}
              height={13}
              alt="logo"
              priority={false}
              />
             <Navbar />
        </div>
       <Button className='bg-primary' variant={'default'} size={'default'}>Log In</Button>
    </header>
  )
}