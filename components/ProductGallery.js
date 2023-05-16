import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineShoppingCart} from 'react-icons/ai'
export default function ProductGallery() {
    return (
        <div className=' flex justify-center mt-10'>
            <div className='w-[1170px]'>
                <div className='flex gap-3'>
                    <p>Account</p>
                    <p>/</p>
                    <p>Gaming</p>
                    <p>/</p>
                    <p className='font-medium'>Havic HV G-92 Gamepad</p>
                </div>
                <div className=' flex my-10 gap-5 justify-between'>
                    <div className=' flex gap-5'>
                        <div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] mb-5">
                                <img className=' p-5' src="./img/image 57.png" alt=""></img>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px]  mb-5">
                                <img className=' p-5' src="./img/image 58.png" alt=""></img>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px]  mb-5">
                                <img className=' p-5' src="./img/image 61.png" alt=""></img>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] ">
                                <img className=' p-5' src="./img/image 59.png" alt=""></img>
                            </div>
                        </div>
                        <div className="w-[500px] h-[610px] bg-[#F5F5F5] rounded-[4px] ">
                            <img className=' p-[40px] py-[35%]' src="./img/image 63.png" alt=""></img>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium'>Havic HV G-92 Gamepad </p>
                        <div className=' flex items-center py-3 gap-2'>
                            <AiFillStar className=' text-orange-400 '></AiFillStar>
                            <AiFillStar className=' text-orange-400 '></AiFillStar>
                            <AiFillStar className=' text-orange-400 '></AiFillStar>
                            <AiFillStar className=' text-orange-400 '></AiFillStar>
                            <AiFillStar className=' text-[#8b8b8e] '></AiFillStar>
                            <p className=' text-[#8b8b8e]'>(150 Reviews)</p>
                            <p className=' text-[#8b8b8e]'>|</p>
                            <p className='text-[#56ec81]'>In Stock</p>
                        </div>
                        <p className='text-xl font-medium'>$192.00</p>
                        <p className='py-4 border-b-2'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <div className='flex py-6 gap-4 items-center '>
                            <p>Colours : </p>
                           <h1 className=' border-4 rounded-2xl outline-2'>
                           <p className='w-[10px] h-[10px] bg-blue-500 rounded-2xl '></p>
                           </h1>
                           <h1 className=' border-4 rounded-2xl'>
                           <p className='w-[10px] h-[10px] bg-red-400 rounded-2xl  '></p>
                           </h1>
                        </div>
                        <div className=' flex gap-4'>
                            <p className=' ' > Size:</p>
                            <p className='border-2 w-8 h-8 text-center rounded  ' > XS</p>
                            <p className='border-2 w-8 h-8 text-center rounded ' > S</p>
                            <p className='border-2 w-8 h-8 text-center rounded ' > M</p>
                            <p className='border-2 w-8 h-8 text-center rounded ' > L</p>
                            <p className='border-2 w-8 h-8 text-center rounded ' > XL</p>
                        </div>
                        <div className="flex items-center gap-4 py-8">
                            <div className="flex border-2 rounded">
                                <button class="size"
                                    className="w-[40px] h-[40px] rounded ">-</button>
                                <input class="size" type="text" value="2" name="" id=""
                                    className="w-[85px] h-[40px] text-center  border-r-2 border-l-2 "></input>
                                <button class="size"
                                    className="w-[40px] h-[40px] rounded ">+</button>
                            </div>
                            <button class="size" className="w-[165px] h-[44px] rounded border-2">Buy
                                Now</button>
                            <div class="size"
                                className="w-[50px] h-[44px] border-2 text-center p-4 rounded ">
                                <i><BsHeart></BsHeart></i>
                            </div>
                        </div>
                        <div
                            className="w-[460px] h-[170px] border-2 mt-[30px] rounder ">
                            <div className=" flex  border-2 h-[85px] justify-center items-center gap-4">
                                <div className=" text-5xl"> <i><AiOutlineShoppingCart></AiOutlineShoppingCart></i></div>
                                <div className="w-[325px]">
                                    <p className="font-weight: 500;">Free Delivery</p>
                                    <p className="">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className=" flex border-2 h-[85px] justify-center items-center gap-4">
                                <div className=" text-5xl"> <i><AiOutlineShoppingCart></AiOutlineShoppingCart></i></div>
                                <div className="w-[325px]">
                                    <p className="font-weight: 500;">Return Delivery</p>
                                    <p className="font-size: 12px;">Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
