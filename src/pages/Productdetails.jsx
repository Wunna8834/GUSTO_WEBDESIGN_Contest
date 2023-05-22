import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {Payment} from '../pages/Payment'
import {Chat} from '../pages/Chat'
export const Productdetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [modal, setModal] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1",
      price: 690000,
      category: "Sneakers",
      description: "US-9.5 /UK-9/FR-43.5",
      seller_name: "Phone Pyae Htoo",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684520173/SizeChanges.png",
      seller_photo: ""
    },
    {
      id: 2,
      name: "OZWEEGO PURE",
      price: 190000,
      category: "Sneakers",
      description: "US-9.5 /UK-9/FR-43.5",
      seller_name: "Phone Pyae Htoo",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684549844/Addidas.png",
      seller_photo: ""
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 190000,
      category: "Sneakers",
      description: "US-9/UK-8",
      seller_name: "Phone Pyae Htoo",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684550284/Puma.png",
      seller_photo: ""
    },
    {
      id: 4,
      name: "Denim Jacket",
      price: 199000,
      category: "Casual wear",
      description: "Zara Men's Denim Jackets",
      seller_name: "Phone Pyae Htoo",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684560980/Green.jpg",
      seller_photo: ""
    },
    {
      id: 5,
      name: "Innisfree Clay Mask",
      price: 35000,
      category: "Skincare",
      description: "100ml",
      seller_name: "Su Pyae",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684553773/clay.jpg",
      seller_photo: ""
    },
    {
      id: 6,
      name: "Innisfree Balancing Tonar",
      price: 47000,
      category: "Skincare",
      description: "200ml",
      seller_name: "Su Pyae",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684553973/teatree.jpg",
      seller_photo: ""
    },
    {
      id: 7,
      name: "Estee Lauder Advanced",
      price: 216000,
      category: "Skincare",
      description: "50ml",
      seller_name: "Su Pyae",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684554231/nightcream.jpg",
      seller_photo: ""
    },
    {
      id: 8,
      name: "Dior ESSENCE LOTION",
      price: 354000,
      category: "Skincare",
      description: "200ml",
      seller_name: "Su Pyae",
      product_photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684552797/Estee.jpg",
      seller_photo: ""
    }
  ];
  useEffect(() => {
    let filteredProduct;
    if( id < products.length) {
        filteredProduct = products[id - 1]
        
    } else {
        filteredProduct = products[7]
        
    }
    setProduct(filteredProduct)

  }, []) 
  console.log(product)
  return (
    // <div className="min-h-screen bg-slate-100">
    //   <div className="pt-3 pb-6 px-7 sm:px-16 md:px-[5.25rem] lg:px-24">
    //     <div className="flex mb-4">
    //       <BiArrowBack className="w-5 h-auto" />
    //       <p className="text-base">Back</p>
    //     </div>

    //     <div
    //       className="grid grid-cols-1 md:grid-cols-[40%_45%] gap-4 md:gap-10 lg:gap-24"
    //     >
    //       <div className="flex flex-col gap-1">
    //         {/* <div className="w-full h-[30rem]">
    //           <img
    //             src="./img/ShirtLarge.png"
    //             alt=""
    //             className="shadow-xl w-full h-full bg-gray-300 col-span-1 rounded-md md:shrink-0"
    //           />
    //         </div> */}

            
    //     <div className="w-full  min-h-[1rem]">
    //       <img
    //         src={product.product_photo}
    //         alt=""
    //         className="shadow-lg h-auto max-w-full  col-span-1"
    //       />
    //     </div>

    //         <img src="" alt="" />
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    //           <div className="max-h-48">
    //             <img
    //               src={product.product_photo}
    //               alt=""
    //               className="shadow-lg w-full h-full bg-gray-300 col-span-1 rounded-md"
    //             />
    //           </div>

    //           <div className="max-h-48">
    //             <img
    //               src={product.product_photo}
    //               alt=""
    //               className="shadow-lg w-full h-full bg-gray-300 rounded-md"
    //             />
    //           </div>

    //           <div className="max-h-48">
    //             <img
    //               src={product.product_photo}
    //               alt=""
    //               className="shadow-lg w-full h-full rounded-md"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="">
    //         <div>
    //           <h1 className="text-4xl font-semibold text-gray-500 mb-3">{product && product.name}</h1>
    //           <p className="text-lg text-gray-500 mb-5">
    //             {product && product.description}
    //           </p>
    //         </div>
    //         <hr className="bg-slate-400" />
    //         <div
    //           className="flex items-center my-6 text-2xl font-semibold text-gray-500"
    //         >
    //           <p className="">Price <span>-</span></p>
    //           <p className="">10000 Ks</p>
    //         </div>
    //         <hr className="bg-slate-400" />

    //         <div>
    //           <p className="text-2xl font-semibold text-gray-500 py-3">
    //             Choose a Color
    //           </p>
    //           <div className="flex gap-2 mb-5">
    //             <div className="rounded-full bg-red-500 w-10 h-10"></div>
    //             <div className="rounded-full bg-blue-500 w-10 h-10"></div>
    //             <div className="rounded-full bg-amber-300 w-10 h-10"></div>
    //             <div className="rounded-full bg-green-400 w-10 h-10"></div>
    //           </div>
    //           <hr className="bg-slate-400" />
    //         </div>

    //         <div>
    //           <p className="text-2xl font-semibold text-gray-500 py-3">Quantity</p>
    //           <div
    //             className="rounded-full bg-gray-300 flex items-center gap-5 shadow-lg w-24 py-[0.15rem] mb-5"
    //           >
    //             <button className="inline-block font-bold text-2xl pl-2">+</button>
    //             <p className="text-lg font-medium"></p>
    //             <button className="inline-block font-bold text-2xl pr-2">-</button>
    //           </div>
    //           <hr className="bg-slate-400" />
    //         </div>
    //         <div>
    //           <p className="text-2xl font-semibold text-gray-500">Seller</p>
    //           <div className="flex items-center gap-3 my-3">
    //             <img
    //               src="./img/FirstChatProfile.png"
    //               alt=""
    //               className="w-14 h-14 rounded-full bg-center bg-cover"
    //             />

    //             <p className="text-xl font-bold text-gray-500">Aye Kyi</p>
    //           </div>
    //           <div className="py-2 flex justify-between">
    //             <button
    //               className="inline-block rounded-full cursor-pointer bg-violet-600 px-2 py-2 text-center text-xs font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
    //             >
    //               Buy Now
    //             </button>
    //             <button
    //               className="inline-block rounded-full cursor-pointer bg-violet-600 px-2 py-2 text-center text-xs font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
    //             >
    //               Chat with Seller
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-slate-100 min-h-max md:min-h-screen relative'>
        <Link to='/main'>
        <p className='flex pt-5 w-max text-zinc-700 gap-2 hover:-translate-x-2 items-center text-lg ms-10 transition-transform duration-300 ease-in-out transform'>
            <span><BiArrowBack/></span>
            <p>Back</p>
        </p>
        </Link>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
            <div className='w-full md:w-2/5 border rounded-lg'>
                <div className='w-full'>
                    <img className='w-full md:h-full' src={product && product.product_photo}/>
                </div>
                <div className='flex justify-between'>
                    <img className=' w-28 md:w-40  h-28 md:h-40' src={product && product.product_photo} alt="" />
                    <img className=' w-28 md:w-40  h-28 md:h-40' src={product && product.product_photo} alt="" />
                    <img className=' w-28 md:w-40  h-28 md:h-40' src={product && product.product_photo} alt="" />
                </div>
            </div>
            <div className='w-full md:w-96 relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg p-2 shadow-lg'>
                <h2 className='font-medium mt-3 text-4xl'>{product && product.name}</h2>
                <p className='text-slate-400 text-md mt-4'>{product && product.description}</p>
                <hr/>
                <p className='font-normal text-xl mt-4'>Price: <span>{product && product.price > 0 && product.price * quantity} Ks</span></p>
                <hr className='mt-4'/>
                <div className='mt-5'>
                    <p className='font-normal text-xl'>Choose a color</p>
                    <div className='flex gap-3'>
                      <div className='w-8 h-8 bg-red-500 rounded-full'></div>
                      <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
                      <div className='w-8 h-8 bg-orange-500 rounded-full'></div>
                      <div className='w-8 h-8 bg-black rounded-full'></div>
                    </div>
                </div>
                
                <div className='mt-5'>
                    <p className='font-normal text-xl'>Quantity</p>
                    <div className='mt-2 py-2 font-bold flex justify-around items-center w-28 bg-slate-100 rounded-full'>
                        <button className='text-xl' onClick={() => setQuantity(quantity > 0 && quantity - 1)}>-</button>
                        <p className='font-normal '>{quantity >= 1 && quantity}</p>
                        <button className='text-xl' onClick={() => setQuantity(quantity + 1) }>+</button>
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                    <div>
                      <img className='w-12 h-12 rounded-full' src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg" alt="" />
                    </div>
                    
                    <div>
                    <p className='font-normal text-xl'>Seller</p>
                        <img src="" alt="" />
                        <p className='text-md text-sm text-slate-500'>{product && product.seller_name}</p>
                    </div>
                </div>
                <div className='md:absolute mt-6 md:mt-0 bottom-0 w-full md:pr-4 pr-12 md:pb-4'>
                   <div className='flex justify-between'>
                        <button onClick={() => setModal(true)} className='bg-blue-500 shadow-md hover"bg-blue-700 text-white rounded-full px-6 py-2'>Buy Now</button>
                        <button onClick={() => setShowChat(true)} className='border shadow-md hover:bg-cyan-500 hover:text-white  border-cyan-500 rounded-full px-4 py-2'>Chat With Sellers</button>
                   </div>
                </div>
                
            </div>
        </div>
        <div className=''>
          {modal && <Payment totalPrice={quantity * product.price} onClick={() => setModal(false)}/>}
        </div>
        <div>
          {showChat && <Chat onClick={() => setShowChat(false)}/>}
        </div>
    </div>
       
        
  )
}
