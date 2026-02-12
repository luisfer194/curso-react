import { useState, useEffect } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  //Para cargar la cita de la pagina al inicio
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
