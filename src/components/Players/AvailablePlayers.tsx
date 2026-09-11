import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Types/player';
import { FaUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';

interface IAvailableProps{
  players: Iplayer[]
   coin:number
   setCoin: Dispatch<SetStateAction<number>>
   selectedPlayers: Iplayer[]
   setSelectePlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const AvailablePlayers = ({ players, coin, setCoin , selectedPlayers, setSelectePlayers }:IAvailableProps) => {
  // console.log(players, 'Players for available player');

  return (
    <div className='grid grid-cols-3 gap-7 mt-6'>
      {
        players.map((player: Iplayer, index:number) => {
          return (
            <PlayerCard
             key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectePlayers={setSelectePlayers}/>
          )
        })
      }
    </div>
  );
};

export default AvailablePlayers;