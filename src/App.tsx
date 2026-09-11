import { Suspense, useState} from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players/Players"
import type { Iplayer } from "./Types/player"

const playerFetch = async():Promise<Iplayer[]>=>{
  const res =await fetch('/data.json')
  const data = res.json()
  return data;
}
function App() {
  // const playerPromise = playerFetch()
  const [playerPromise]= useState(()=>playerFetch())
  // const [coin,setCoin] = useState(5000)
    const [coin, setCoin] = useState(1500)


  return (
    <>
      <Nav coin={coin}/>
      <Banner/>
      
      <Suspense fallback={<p>Processing...</p>}>
      <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}/>

      </Suspense>


    </>
  )
}

export default App
