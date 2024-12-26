import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-10 bg-gray-100'>
        <div className='container'>
            <giv className="grid grid-cols-4 gap-10">
                <div>
                   <ul>
                            <li><Link href="/order">Order</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/tickets">Tickets</Link></li>
                            <li><Link href="address">Address</Link></li>
                            <li><Link href="/change-password">Change Password</Link></li>
                            <li><Link href="/wishlist-product">Wishlist Product</Link></li>
                        </ul>
                </div>
                <div>
                   <ul>
                            <li><Link href="/order">Order</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/tickets">Tickets</Link></li>
                            <li><Link href="address">Address</Link></li>
                            <li><Link href="/change-password">Change Password</Link></li>
                            <li><Link href="/wishlist-product">Wishlist Product</Link></li>
                        </ul>
                </div>
                <div>
                   <ul>
                            <li><Link href="/order">Order</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/tickets">Tickets</Link></li>
                            <li><Link href="address">Address</Link></li>
                            <li><Link href="/change-password">Change Password</Link></li>
                            <li><Link href="/wishlist-product">Wishlist Product</Link></li>
                        </ul>
                </div>
                <div>
                   <ul>
                            <li><Link href="/order">Order</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/tickets">Tickets</Link></li>
                            <li><Link href="address">Address</Link></li>
                            <li><Link href="/change-password">Change Password</Link></li>
                            <li><Link href="/wishlist-product">Wishlist Product</Link></li>
                        </ul>
                </div>
            </giv>
        </div>
    </footer>
  )
}

export default Footer