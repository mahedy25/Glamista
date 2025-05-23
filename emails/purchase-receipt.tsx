import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Row,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components'
  
  import { formatCurrency } from '@/lib/utils'
  import { IOrder } from '@/lib/db/models/order.model'
  import { SERVER_URL } from '@/lib/constants'
import Link from 'next/link'
  
  type OrderInformationProps = {
    order: IOrder
  }
  
  const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })
  
  export default async function PurchaseReceiptEmail({
    order,
  }: OrderInformationProps) {
    return (
      <Html>
        <Tailwind>
          <Head />
          <Body className='font-sans bg-white'>
            <Container className='max-w-xl'>
              <Heading>Purchase Receipt</Heading>
              <Section>
                <Row>
                  <Column>
                    <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
                      Order ID
                    </Text>
                    <Text className='mt-0 mr-4'>{order._id.toString()}</Text>
                  </Column>
                  <Column>
                    <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
                      Purchased On
                    </Text>
                    <Text className='mt-0 mr-4'>
                      {dateFormatter.format(order.createdAt)}
                    </Text>
                  </Column>
                  <Column>
                    <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
                      Price Paid
                    </Text>
                    <Text className='mt-0 mr-4'>
                      {formatCurrency(order.totalPrice)}
                    </Text>
                  </Column>
                </Row>
              </Section>
              <Section className='border border-solid border-gray-500 rounded-lg p-4 md:p-6 my-4'>
                {order.items.map((item) => (
                  <Row key={item.product} className='mt-8'>
                    <Column className='w-20'>
                    <Link href={`${SERVER_URL}/product/${item.slug}`}>
                      <Img
                        width='80'
                        alt={item.name}
                        className='rounded'
                        src={
                          item.image.startsWith('/')
                            ? `${SERVER_URL}${item.image}`
                            : item.image
                        }
                      />
                    </Link>
                    </Column>
                    <Column className='align-top'>
                      <Text className='mx-2 my-0'>
                        {item.name} x {item.quantity}
                      </Text>
                    </Column>
                    <Column align='right' className='align-top'>
                    <Link href={`${SERVER_URL}/product/${item.slug}`}>
                      <Text className='mx-2 my-0'>
                        {item.name} x {item.quantity}
                      </Text>
                    </Link>
                    </Column>
                  </Row>
                ))}
                {[
                  { name: 'Items', price: order.itemsPrice },
                  { name: 'Tax', price: order.taxPrice },
                  { name: 'Shipping', price: order.shippingPrice },
                  { name: 'Total', price: order.totalPrice },
                ].map(({ name, price }) => (
                  <Row key={name} className='py-1'>
                    <Column align='right'>{name}:</Column>
                    <Column align='right' width={70} className='align-top'>
                      <Text className='m-0'>{formatCurrency(price)}</Text>
                    </Column>
                  </Row>
                ))}
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  