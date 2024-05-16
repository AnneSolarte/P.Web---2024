
import { useEffect, useState } from 'react'
import { Services } from '../../services/fetchPlayers'
import './PlayersList.css'
import { TeamItem } from '../TeamItem/TeamItem'

export const PlayersList = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        getPlayersFetch()
    }, [])

    

    const getPlayersFetch = () =>{
        Services.getPlayers().then((response) =>
            setPlayers(response)
        ).catch((error)=>{
            console.error(error)
        })
    }

    // const groupBy = (input, key) => {
    //     return input.reduce((object, item) => {
    //       let groupKey = item[key];
    //       if (!object[groupKey]) {
    //         object[groupKey] = [];
    //       }
    //       object[groupKey].push(item);
    //       return object;
    //     }, {});
    //   };
      
    //   const groupedPlayers = groupBy(players, 'teamName');
    //   console.log(groupedPlayers)


      const groupedPlayers =  players.reduce((object, player) => {
          if (!object[player.teamName]) {
            object[player.teamName] = [];
          }
          object[player.teamName].push(player);
          return object;
        }, {});
      
      
      console.log(groupedPlayers)


  return (
    <div>
        <h2>PlayersList</h2>
        {Object.entries(groupedPlayers).map(([team, players]) => (
            <div key={team}>
                <TeamItem team={team} players={players} />
            </div>
          
        ))}
        
    </div>

  )
}
