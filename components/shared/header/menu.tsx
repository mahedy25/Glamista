import Link from 'next/link'
import CartButton from './cart-button'
import { ModeToggle } from '@/components/modeToggle'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button flex items-center'>
          Hello, SIgn in
        </Link>

        <div className='mt-1'>
        <ModeToggle/>
        </div>
        
        <CartButton />
      </nav>
    </div>
  )
}