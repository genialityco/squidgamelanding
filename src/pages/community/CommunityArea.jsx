import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy  } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function CommunityArea() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
  const fetchPlayers = async () => {
    try {
      const q = query(collection(db, 'players'), orderBy('score', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        number: index + 1, // ranking
      }));
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  fetchPlayers();
}, []);

  return (
    
    <div className="community-container">
      <h2 className="community-title">Ranking de Jugadores</h2>
      <div className="intro-logo">
          <img src="/assets/images/SIMBOLOS.png" alt="Logo decorativo" />
          <div className='espacio'></div>
      </div>
      {players.length === 0 ? (
        <p className="no-data">Aún no hay ranking de jugadores.</p>
      ) : (
        <table className="community-table">
          <thead>
            <tr>
              <th>N°</th>
              <th>Nombre o Correo</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.number}</td>
                <td>{player.nombre }</td> {/*|| player.email*/}
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
