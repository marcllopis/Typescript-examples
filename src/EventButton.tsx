import React from 'react';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const EventButton = ({onClick}: Props) => (
  <button onClick={onClick}>
    EVENTS!!
  </button>
)

export default EventButton;
