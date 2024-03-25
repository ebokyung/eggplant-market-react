import { useEffect, useRef } from 'react';

export const useBlob = () => {
  const blobArray = useRef([]);
  useEffect(() => {
    return () => {
      blobArray.current.forEach(blob => {
        console.log('revoke', blob);
        URL.revokeObjectURL(blob);
      });
    };
  }, []);

  return blobArray.current;
};
