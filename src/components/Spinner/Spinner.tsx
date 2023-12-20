import React from 'react';
import { Loader } from 'react-feather';

import styles from './Spinner.module.css';

interface SpinnerProps {
  color?: string;
  size?: number;
  opacity?: number;
  speed?: number;
  style?: React.CSSProperties & { '--speed'?: string };
}

function Spinner({
  color = 'black',
  size = 24,
  opacity = 0.5,
  speed = 1200,
  style,
}: SpinnerProps) {
  return (
    <span
      className={styles.wrapper}
      style={{
        opacity,
        '--speed': `${speed}ms`,
        ...style,
      }}
    >
      <Loader color={color} size={size} />
    </span>
  );
}

export default Spinner;
