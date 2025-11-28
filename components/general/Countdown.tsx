// Countdown.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';

interface CountdownProps {
  initialTime: number;
  onTimerEnd?: () => void;
}

export interface CountdownRef {
  restart: () => void;
}

const Countdown: React.ForwardRefRenderFunction<CountdownRef, CountdownProps> = (
  { initialTime, onTimerEnd },
  ref
) => {
  const [time, setTime] = useState(initialTime);

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalRef.current!);

          if (onTimerEnd) {
            onTimerEnd();
          }
        }

        return prevTime === 0 ? 0 : prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [onTimerEnd]);

  // Expose the restart method through the ref
  React.useImperativeHandle(ref, () => ({
    restart: () => {
      clearInterval(intervalRef.current!);
      setTime(initialTime);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current!);

            if (onTimerEnd) {
              onTimerEnd();
            }
          }

          return prevTime === 0 ? 0 : prevTime - 1;
        });
      }, 1000);
    },
  }));

  return <Text> (0:{time}s)</Text>;
};

export default React.forwardRef(Countdown);
