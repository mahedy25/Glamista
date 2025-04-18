const data = {
    headerMenus: [
      {
        name: "Today's Deal",
        href: '/search?tag=todays-deal',
      },
      {
        name: 'New Arrivals',
        href: '/search?tag=new-arrival',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
      {
        name: 'Customer Service',
        href: '/page/customer-service',
      },
      {
        name: 'About Us',
        href: '/page/about-us',
      },
      {
        name: 'Help',
        href: '/page/help',
      },
    ],
    //Carousels
    carousels: [
        {
          title: 'From Streetwear to Statement — We’ve Got Your Look',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.png',
          url: '/search?category=Casuals',
          isPublished: true,
        },
        {
          title: 'Step Into Fashion. Step Into Confidence.',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.png',
          url: '/search?category=Bold',
          isPublished: true,
        },
        {
          title: 'Unleash Your Style — Wear the Trend, Be the Trend',
          buttonCaption: 'See More',
          image: '/images/banner2.png',
          url: '/search?category=Trendy',
          isPublished: true,
        },
      ],
  }
  
  
  export default data