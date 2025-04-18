import { ShoppingCartIcon} from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button flex items-center'>
          Hello, SIgn in
        </Link>

        <Link href='/cart' className='header-button'>
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8'/>
            Cart
          </div>
        </Link>
      </nav>
    </div>
  )
}