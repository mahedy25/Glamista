export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Glamista'
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || 'Unleash Your Style — Wear the Trend, Be the Trend.'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "An Ecommerce Website Created With Next.js, MongoDB, Tailwind CSS, TypeScript and Next Auth."

  export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

  export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE || 35
  )

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved.`