import React, { useEffect, useState } from "react";
//change
function Index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setPeople(data.people);
      });
  }, []);

  return (
    <div>
      <div>{message}</div>
      <div>
        {people.map((person, i) => {
          return <p key={i}>{person}</p>;
        })}
      </div>
    </div>
  );
}

export default Index;
