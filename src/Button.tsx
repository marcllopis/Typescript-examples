import React from 'react';

type Props = {
  // onClick(): string // fn that returns a string
  // onClick(): void // fn that returns nothing
  // onClick(text: string): void // fn that returns nothing with 1 string argument
  // onClick: () => void // fn that returns nothing
  onClick: (text: string) => void // fn that returns nothing with 1 string argument
}

const Button = ({ onClick }: Props) => (
  <button onClick={() => onClick('some text')}>
    Click me!
  </button>
)

export default Button;
