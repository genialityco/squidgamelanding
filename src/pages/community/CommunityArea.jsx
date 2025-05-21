import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function CommunityArea() {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 50;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const q = query(collection(db, 'players'), orderBy('score', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          ...doc.data(),
          number: index + 1,
        }));
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const totalPages = Math.ceil(players.length / playersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <>
          <table className="community-table">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre o Correo</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {currentPlayers.map((player) => (
                <tr key={player.id}>
                  <td>{player.number}</td>
                  <td>{player.nombre}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-controls">
            <button onClick={goToPrevPage} disabled={currentPage === 1}>Anterior</button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                className={currentPage === idx + 1 ? 'active' : ''}
                onClick={() => goToPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente</button>
          </div>
        </>
      )}
    </div>
  );
}
