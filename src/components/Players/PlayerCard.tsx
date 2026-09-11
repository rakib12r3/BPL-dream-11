import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';
import type { Iplayer } from '../../Types/player';
import { Bounce, toast } from 'react-toastify';


interface IPlayerCardProps {
  player: Iplayer
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
   selectedPlayers: Iplayer[]
   setSelectePlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectePlayers}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

 

  // console.log(coin, setCoin, "From card");

  const handleSelectPlayer = () => {
    setIsSelected(true)
    const newCoinPrice = coin - player.price

    if(newCoinPrice >= 0){
      setCoin(newCoinPrice);
      
      toast.success(`${player.playerName} is purchase successfully `, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }else{
      toast.error('Coin is not enough to purchase')
    }


    // selected  Player logic
    setSelectePlayers([...selectedPlayers, player])

  }


  return (
    // <div className="card bg-base-100 shadow-sm">
    //   <figure>
    //     <img
    //       src={player.playerImg}
    //       alt="Shoes" />
    //   </figure>
    //   <div className="card-body space-y-3">

    //     <h2 className="card-title"><FaUser />{player.playerName}</h2>
    //     <div className='flex justify-between gap-4'>
    //       <p className='font-semibold'>{player.origin}</p>
    //       <button className='btn'>{player.playerType}</button>
    //     </div>

    //     <div className="divider" />

    //     <h2 className='font-bold text-2xl'>Ratting</h2>
    //     <div className='flex justify-between gap-4'>
    //       <p className='font-semibold'>{player.battingStyle}</p>
    //       <button className='btn'>{player.bowlingStyle}</button>
    //     </div>

    //     <div className="card-actions justify-between items-center">
    //       <h2 className='font-bold text-2xl'>${player.price}</h2>
    //       <button className="btn">Choose player</button>
    //     </div>
    //   </div>
    // </div>



    <div className="card overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 hover:scale-105"
        />

        {/* Player Type */}
        <span className="badge badge-primary absolute right-4 top-4 px-4 py-3 font-semibold shadow-md">
          {player.playerType}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body gap-5">

        {/* Player Name */}
        <div>
          <h2 className="card-title text-2xl font-bold">
            <FaUser className="text-primary" />
            {player.playerName}
          </h2>

          <p className="mt-1 text-sm font-medium text-base-content/60">
            {player.origin}
          </p>
        </div>

        {/* Player Information */}
        <div className="grid grid-cols-2 gap-3">

          {/* Batting */}
          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
              Batting
            </p>

            <p className="mt-1 font-semibold">
              {player.battingStyle}
            </p>
          </div>

          {/* Bowling */}
          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
              Bowling
            </p>

            <p className="mt-1 font-semibold">
              {player.bowlingStyle}
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="divider my-0" />

        {/* Footer */}
        <div className="card-actions items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-xs font-medium text-base-content/50">
              Price
            </p>

            <h2 className="text-2xl font-bold text-primary">
              ${player.price}
            </h2>
          </div>

          {/* Choose Button */}
          <button
            onClick={() => handleSelectPlayer()}
            className="btn btn-primary rounded-xl px-6"
            // disabled={isSelected === true? true:false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}

          </button>

        </div>

      </div>
    </div>


  );
};

export default PlayerCard;