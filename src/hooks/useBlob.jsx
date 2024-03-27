import { useEffect, useRef } from 'react';

// blobarray 생성 + cleanup에서 revoke 처리
export const useBlob = () => {
  const blobArray = useRef([]);
  useEffect(() => {
    // cleanup
    return () => {
      blobArray.current.forEach(blob => {
        console.log('revoke', blob);
        URL.revokeObjectURL(blob);
      });
    };
  }, []);

  return blobArray.current;
};
