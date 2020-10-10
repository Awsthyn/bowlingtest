import React, {useState} from 'react'
import SquareInput from "./SquareInput"
import Swal from 'sweetalert2'

export default function Bowling() {
    const [score, setScore] = useState(['','','','','','','','','',''])
    const array=[1,2,3,4,5,6,7,8,9,10]

    function sendData(){

    fetch(`/bowling?score=${score.join('')}`, {
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => Swal.fire(`La puntuación es ${response}.`));

    }

    function setSquareScore(points, index){
 
       const newList = score.map((e, i) => {
        if (i === index) {
          const updateElement = points
          return updateElement;
        }
   
        return e;
      });
   
      setScore(newList)
    }

    return (
        <div className="mx-2 shadow rounded mt-4 border p-4 d-flex flex-column">
            <h3 className="mx-auto">Bowling Score</h3>
        <div className="d-flex flex-row flex-wrap m-4">
            {array.map(e => <SquareInput  key={e} setSquareScore={setSquareScore} idx={e}/>)}
            
        </div>
        <button className="mx-auto btn btn-primary mt-4" onClick={() => sendData()}>Obtener puntuación</button>
        </div>
    )
}
