import { useEffect, useRef } from 'react';

export const useBlob = () => {
  const blobArray = useRef([]);
  useEffect(() => {
    return () => {
      blobArray.current.forEach(blob => URL.revokeObjectURL(blob));
    };
  }, []);

  return blobArray;
};
