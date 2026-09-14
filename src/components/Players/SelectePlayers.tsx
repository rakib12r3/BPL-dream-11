import { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Types/player';

import SelectedPlayerCard from './SelectedPlayerCard';

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[]
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
   coin:number
   setCoin: Dispatch<SetStateAction<number>>
}

const SelectePlayers = ({ selectedPlayers, setSelectedPlayers, coin , setCoin}:ISelectedPlayersProps) => {
  console.log(selectedPlayers, "fromm selectedPlayers");

  
if(selectedPlayers.length === 0){
  return (
    <h2 className='font-bold text-3xl my-10 text-center text-red-500'>No Selected Player</h2>
  )
}
  
  return (
    <div>
       <div className='grid grid-cols-1 gap-7 mt-6'>
   
      {
        
        selectedPlayers.map((player,index)=> {
          return (
            // <div key={index} className='flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4 '>
            //   <div className='flex gap-2'>
            //       <img src={player.playerImg} alt="" className='h-[55px] w-[60px]' />
            //       <div>
            //         <h2 className='font-bold text-2xl'>{player.playerName}</h2>
            //         <p>{player.playerType}</p>
            //       </div>
            //   </div>
            //   <span className='text-red-500 font-bold cursor-pointer'
            //    onClick={()=>handleRemovePlayer(player)}>
            //   <TbTrash/>
            //   </span>
              
            // </div>
            <SelectedPlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
          )
        })
      }
      </div>
    </div>
  );
};

export default SelectePlayers;