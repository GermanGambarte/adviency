import { useState } from 'react'

import './App.css'

function App () {
  const [gifts, setGifts] = useState(['regalo 1', 'regalo 2', 'regalo 3'])
  const [gift, setGift] = useState('')

  const handleChange = (e) => {
    setGift(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setGifts([
      gift,
      ...gifts
    ])
    setGift('')
  }

  return (
    <div className="gifts">
      <main className="gifts-container">
        <h1 className="gifts-title">Lista de Regalos</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label className='sr-only' htmlFor="newGift">Agregar Regalo</label>
          <input
          required
          className='form-input form-input__error'
            name="newGift"
            type="text"
            value={gift}
            onChange={handleChange}
          />
          <button className='form-btn__submit' type='submit'>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <ul className="gifts-list">
          {gifts.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </main>
    </div>
  )
}

export default App
