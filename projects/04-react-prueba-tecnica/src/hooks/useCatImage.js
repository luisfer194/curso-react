import { useState, useEffect } from 'react';
import { getRandomImage } from '../services/facts';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ').slice(0, 3).join(' ');
    console.log(firstWord);

    getRandomImage(firstWord).then(setImageUrl);
  }, [fact]);

  return { imageUrl };
}
