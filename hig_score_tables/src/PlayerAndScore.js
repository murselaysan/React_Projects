import React from "react";

//import score from "./score"

export default function PlayerAndScore({ football }) {
  return (
    <div>
      {football.map((score) => (
          <div> 
          <p className ="table-main-head">High Scores for => {score.name}</p>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Footballer Name</th>
              <th scope="col">Scores </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{score.scores.map(x=>x.n)}</td>
              <td>{score.scores.map(y => y.s)}</td>
            </tr>
          </tbody>
        </table>
        </div>
      ))}
    </div>
  );
}
