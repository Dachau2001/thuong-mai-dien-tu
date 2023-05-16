import React from 'react'
import { FaFacebookF } from 'react-icons/fa'

import { FaTiktok } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiFillInstagram } from 'react-icons/ai'


export default function Footer() {
    return (
        <div className='bg-black h-[440px] text-white my-[50px]'>
            <div className='flex justify-center'>
                <div className=' flex w-[1170px] justify-between py-[60px]'>
                    <div className='w-[200px]'>
                        <p className='py-2'>Exclusive</p>
                        <p className='py-2'>Subscribe</p>
                        <p className='py-2'>Get 10% off your lirst order</p>
                        <div className=' relative py-2'>
                            <input className='bg-black text-white' type='' placeholder='Enter your email'></input>
                            <img className=' absolute top-2 right-6 ' src="./img/Vector.png"></img>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <p className='py-2'>Support</p>
                        <p className='py-2'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='py-2'>dachau2403@gmail.com</p>
                        <p className='py-2'>+84 366106285</p>
                    </div>
                    <div className='w-[200px]'>
                        <p className='py-2'>Account</p>
                        <p className='py-2'>My Account</p>
                        <p className='py-2'>Login / Register</p>
                        <p className='py-2'>Cart</p>
                        <p className='py-2'>Wishlist</p>
                        <p className='py-2'>Shop</p>
                    </div>
                    <div className='w-[200px]'>
                        <p className='py-2'>Quick Link</p>
                        <p className='py-2'>Privacy Poicy</p>
                        <p className='py-2'>Terms Of Use</p>
                        <p className='py-2'>FAQ</p>
                        <p className='py-2'>Contact</p>
                    </div>
                    <div className='w-[200px]'>
                        <p className='py-2'>Download App</p>
                        <p className='py-2'>Save $3 with App New User Only</p>
                        <div className=' flex gap-3'>
                            <div>
                                <img className='w-[100px]' src='./img/z4336448983364_c7332e7ca5fc92753296c27e09d74eb2.jpg '></img>
                            </div>
                            <div>
                                <img className='w-[100px] pb-7' src='./img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'></img>
                                <img className='w-[100px]' src='./img/download-appstore.png'></img>
                            </div>
                        </div>
                        <div className='flex py-4 gap-7 items-center'>
                            <FaFacebookF className='text-white text-2xl'></FaFacebookF>
                            <RxTwitterLogo className='text-white  text-2xl'></RxTwitterLogo>
                            <FaTiktok className='text-white  text-2xl'></FaTiktok>
                            <AiFillInstagram className='text-white  text-2xl'></AiFillInstagram>
                        </div>
                    </div>
                </div>
            </div>
                <div className=' flex justify-center'>
                    <div className=' w-[1170px] flex justify-center'>
                    <img src="./img/Copyright Rimel 2022. All right reserved.png"></img>
                    </div>
                </div>
        </div>
    )
}
