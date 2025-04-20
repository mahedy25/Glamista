import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { getAllCategories } from '@/lib/actions/product.actions'
const categories = await getAllCategories()
export default async function Search() {
  return (
    <form action='/search' method='GET' className='flex items-stretch h-10'>
  {/* Category Dropdown */}
  <Select name='category'>
    <SelectTrigger className='min-h-[40px] h-[40px]  rounded-none rounded-l-md border border-gray-300 bg-gray-100 text-black font-semibold px-3'>
      <SelectValue className='text-black font-semibold' placeholder='All' />
    </SelectTrigger>
    <SelectContent position='popper'>
      <SelectItem value='all'>All</SelectItem>
      {categories.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  {/* Search Input */}
  <Input
    name='q'
    type='search'
    placeholder={`Search Site ${APP_NAME}`}
    className='h-full rounded-none border-y border-gray-300 bg-gray-100 dark:bg-gray-800 font-semibold text-black dark:text-white text-base px-3'
  />

  {/* Submit Button */}
  <button
    type='submit'
    className='h-full px-3 rounded-none rounded-r-md bg-primary text-black border border-gray-300 border-l-0 flex items-center justify-center'
  >
    <SearchIcon className='w-5 h-5' />
  </button>
</form>


  )
}