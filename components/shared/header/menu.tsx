import CartButton from './cart-button'
import { ModeToggle } from '@/components/modeToggle'
import UserButton from './user-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>

        <div className='mt-1'>
        <ModeToggle/>
        </div>

        <UserButton />


        
        <CartButton />
      </nav>
    </div>
  )
}