import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MESSAGES = gql`
  {
    albums {
      _id
      titulo
      autor
      lugar
    }
  }
`;
export default function MessageList() {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }
console.log(data);

  return (
    <div className="row">
      <div className="col-md-12">
      {data.albums.map(({ _id, titulo, autor, lugar }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{titulo}</h4>
              <p>{autor}</p>  
              <p>{lugar}</p>             
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
