import React from 'react';

import styles from './NotFounBlock.module.scss';

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>(((</span>
        <br />
        <h1>Ничего не найдено</h1>
        <p className={styles.description}>К сожалению данная страница отсутствует</p>
      </h1>
    </div>
  );
};

export default NotFoundBlock;
