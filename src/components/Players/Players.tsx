import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../Types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectePlayers";

interface PlayersProps {
  playerPromise: Promise<Iplayer[]>
  coin:number
  setCoin: Dispatch<SetStateAction<number>>
}

const Players = ({ playerPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playerPromise)

  // console.log(players);

  const [buttonType, setButtonType] = useState<"available" | "selected">("available")
  // console.log(buttonType);
   const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])

  const handleUpdateBtnType = (type: "available" | "selected")=>{
    setButtonType(type)
  }


  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">

        <h2 className="font-bold text-xl">{buttonType === "available" ? "Availabe Players" : "Selcted Players"}</h2>
        <div>


          <button
          onClick={()=> handleUpdateBtnType("available")}
          className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
          <button 
           onClick={()=> handleUpdateBtnType("selected")}
          className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>


      {buttonType === "available" ? <AvailablePlayers
       players={players} 
       coin={coin} setCoin={setCoin} 
       selectedPlayers={selectedPlayers} setSelectePlayers={setSelectedPlayers}/> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}/>}
    </div>
  );
};

export default Players;