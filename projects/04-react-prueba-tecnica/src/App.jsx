import React, { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 3).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        console.log(url)
        setCatImage(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {catImage && <img src={catImage} alt={fact} />}
      </section>
    </main>
  )
}