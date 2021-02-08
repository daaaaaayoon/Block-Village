import React from 'react';
import styles from './modal_step_5.module.css'

const ModalStep5 = ({ change_modal_step_5 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>여러분의 블록이에요!</h1>
        <button onClick={change_modal_step_5}>다음</button>
      </div>
    </>
  )
};

export default ModalStep5;