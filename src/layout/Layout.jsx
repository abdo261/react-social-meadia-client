import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import RiteSide from '../components/RiteSide'
import NavBar from '../components/NavBar'

const Layout = () => {
  useEffect(()=>{
    document.body.className="min-h-screen h-auto bg-gray-200 text-[#111113] dark:bg-[#111113] dark:text-gray-100"
  },[])
  return (<>
    <Header />
    <main className="pb-[90px] px-3 pt-5 sm:pl-[115px] sm:pr-[315px] lg:pl-[340px] transition-all ease-in-out duration-500 ">
      <Outlet/> 
    </main>
    <RiteSide/>
    <NavBar /></>
  )
}

export default Layout