import React, { useEffect, useState } from 'react'
import { item } from '../models/item'
import { Order } from '../models/orders'
export default function OrderScreen() {
    const [OrderItemList, setOrderItemList] = useState([])
    const [OrderItem, setOrderItem] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem('userId')!
        Order.getOrders(userId).then((e) => {
            // console.log(e)
            setOrderItemList(e)
            setOrderItem(e.order)
            // console.log(e.order)
        })
    }, [])

    return (
        <div >
            <h1 className='text-center'>Order Screen</h1>
            {OrderItem.map((e: any) => <div className='w-8/12 m-auto'>
                <h1 className='text-center'>Id:  {e.id}</h1>
                {e.order.map((e2: any) => <div>
                    {e2.map((e3: item) => <div >
                        <div className='flex justify-between'>
                            <h1>{e3.catId}</h1>
                            <h1>{e3.count}</h1>
                            <h1>{e3.price}</h1>
                        </div>
                    </div>)}
                </div>)}

            </div>
            )}

        </div>
    )
}
