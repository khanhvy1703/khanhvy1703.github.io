import React from 'react';

interface IProps {
  color: string;
  height: string | number;
  width: string;
}

export default function ColoredLine({ color, height, width }: IProps) {
  return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height, 
            width: width
        }}
    />
  )
}