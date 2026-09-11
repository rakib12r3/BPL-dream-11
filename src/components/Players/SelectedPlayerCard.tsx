import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Types/player';
import { TbTrash } from 'react-icons/tb';

interface ISelectedPlayerCardProps {

  player: Iplayer;
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlayers: Iplayer[]
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayerCard = ({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayerCardProps) => {

  const handleRemovePlayer = (player: Iplayer) => {

    const restPlayer = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName != player.playerName)
    console.log(restPlayer, "from restplayer");


    setSelectedPlayers(restPlayer);
    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice)
  }

  return (
    <div className='flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4 '>
      <div className='flex gap-2'>
        <img src={player.playerImg} alt="" className='h-[55px] w-[60px]' />
        <div>
          <h2 className='font-bold text-2xl'>{player.playerName}</h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <span className='text-red-500 font-bold cursor-pointer'
        onClick={() => handleRemovePlayer(player)}>
        <TbTrash />
      </span>

    </div>
  );
};

export default SelectedPlayerCard;