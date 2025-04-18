'use server'

import { connectToDatabase } from '@/lib/db'
import Product from '@/lib/db/models/product.model'

export async function getAllCategories() {
  await connectToDatabase()
  const categories = await Product.find({ isPublished: true }).distinct('category')
  return categories
}

export async function getProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string
  limit?: number
}) {
  await connectToDatabase()

  const products = await Product.aggregate([
    {
      $match: {
        tags: { $in: [tag] },
        isPublished: true,
      },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $limit: limit,
    },
    {
      $project: {
        name: 1,
        href: { $concat: ['/product/', '$slug'] },
        image: { $arrayElemAt: ['$images', 0] },
      },
    },
  ])

  return JSON.parse(JSON.stringify(products)) as {
    name: string
    href: string
    image: string
  }[]
}
