import React, {useState} from 'react';


const Input = () => {

  const [name, setName] = useState('')
  const [text] = useState<string | number>('helloooooo')

  return (
    <div>
      <h1>{text}</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h3>{name}</h3>
    </div>
  )
}

export default Input;
