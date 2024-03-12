import React from 'react';
import Styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={Styles.spinner}>
      <div className={Styles.loading} />
      <p>Loading</p>
    </div>
  );
}
