import React, {useState, useEffect} from 'react'

export default function SquareInput({idx, setSquareScore}) {
    const [score, setScore] = useState(["","",""])
    
    function setIndividualScore(change, index) {
        const newScore = score.map((e, i) => {
            if (Number(i) === Number(index)) {
              return change;
            }
            return e;
          });
        setScore(newScore)
                
    }
    useEffect(() => {
        setSquareScore(score.join(''), idx-1)
      }, [idx, score]);

    return (
        <div style={{height: "50px", width:"100px"}} className="mr-4 mb-4">
            <h3 className="text-center">{idx}</h3>
            <div className="border d-flex flex-row">
            <input name={0} maxLength={1} style={{width: "50px"}} value={score[0]} onChange={(e) => setIndividualScore(e.target.value, e.target.name)} />
            <input name={1} maxLength={1} style={{width: "50px"}} value={score[1]} onChange={(e) => setIndividualScore(e.target.value, e.target.name)}/>
            {idx === 10 ? <input maxLength={1} name={2} style={{width: "50px"}} value={score[2]} onChange={(e) => setIndividualScore(e.target.value, e.target.name)}/> : null}
            </div>
        </div>
    )
}
