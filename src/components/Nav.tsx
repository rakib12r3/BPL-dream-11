import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import logo from '../assets/logo.png'
import { useState } from 'react';


const Nav = ({ coin }:{coin:number}) => {





  return (
    <nav className="bg-red-200 ">
      <div className='container mx-auto flex justify-between items-center'>
        <img src={logo} alt="" />

        <ul className='flex gap-5 items-center'>
          <li>Home</li>
          <li>Fixtur</li>
          <li>Teams</li>
          <li>Schedule</li>
        </ul>

        <h2 className='font-bold text-3xl text-black flex items-center gap-1'>
          <HiMiniCurrencyDollar />
          {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Nav;