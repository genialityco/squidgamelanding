import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function MyRanking() {
  const [userEmail, setUserEmail] = useState(null);
  const [rankingData, setRankingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);

        const querySnapshot = await getDocs(collection(db, 'players'));
        const players = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const sorted = players.sort((a, b) => b.score - a.score);
        const index = sorted.findIndex(p => p.email === user.email);

        if (index !== -1) {
          const player = sorted[index];
          setRankingData({
            rank: index + 1,
            name: player.nombre || player.email,
            score: player.score
          });
        } else {
          setRankingData(null);
        }

        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Cargando ranking...</p>;
  if (!rankingData) return <p>No tienes puntaje registrado aún.</p>;

  return (
    <div className="my-ranking">
      <h3>
        Hola <span className="ranking-user">{rankingData.name}</span>, tu ranking es:
      </h3>

      <table className="community-table">
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rankingData.rank}</td>
            <td>{rankingData.score}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
