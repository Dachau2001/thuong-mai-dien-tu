import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export default function Header() {
    return (
        <div>
            <div className="  w-screen h-10 bg-black text-white flex items-center justify-around ">
                <div className="flex justify-between items-center w-[1170px]">
                    <div className="w-[100px]"></div>
                    <div className="flex gap-5">
                        <p className="" >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <p>ShopNow</p>
                    </div>
                    <select className=" bg-black text-white w-[100px]  gap-5 ">
                        <option value="">English</option>
                        <option value="">VietNam</option>
                        <option value="">China</option>
                        <option value="">ThaiLan</option>
                    </select>
                </div>
            </div>
            <div className=" flex justify-center h-20 border-b-2">
                <div className="flex justify-between items-center w-[1170px] ">
                    <div>
                        <p className="font-bold">Exclusive</p>
                    </div>
                    <ul className="flex gap-10">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                    <div className=" relative flex items-center gap-2">
                        <input type="" placeholder="What are you looking for ? " className=" w-[270px] h-[40px] pl-[20px] bg-slate-100 rounded"></input>
                        <i className=' absolute right-[100px]'> <BiSearch></BiSearch></i>
                        <div className='flex gap-3 text-[20px]'>
                        <i><BsHeart></BsHeart></i>
                        <i><AiOutlineShoppingCart></AiOutlineShoppingCart></i>
                        <i><BiUser></BiUser></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
