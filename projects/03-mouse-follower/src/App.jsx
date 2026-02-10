import { useState, useEffect } from "react"

const FollowerMouse = () => {
  const [enabled, setenabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //pointer move
  useEffect(() => {
    console.log("efecto", { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handelMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  
  //pointer body className
  useEffect(() =>{
    if (enabled) {
      document.body.classList.add("no-cursor")
      document.querySelector("button")?.classList.add("no-cursor")
    } else {
      document.body.classList.remove("no-cursor")
      document.querySelector("button")?.classList.remove("no-cursor")
    }
  }, [enabled])


  return (
    <>
      <div style={{
        position: 'absolute',
        background: "rgba(255, 0, 0, 0.5)",
        border: "1px solid #fff",
        borderRadius: "50%",
        opacity: 0.8,
        pointerEvents: "none",
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: enabled
          ? `translate(${position.x}px, ${position.y}px)`
          : `translate(0px, 0px)`
      }} 
      />
      <h3>Mouse Follower - Proyecto 3</h3>
      <button onClick={() => setenabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowerMouse />
    </main>
  )
}

export default App
