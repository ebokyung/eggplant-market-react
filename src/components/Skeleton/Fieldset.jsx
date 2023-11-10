import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Fieldset() {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Skeleton width={50} height="0.75rem" style={{ marginBottom: '0.125rem' }} />
      <Skeleton height={30} />
    </div>
  );
}
