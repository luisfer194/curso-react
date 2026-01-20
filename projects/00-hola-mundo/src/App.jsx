import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

 

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="luisfer194" initialIsFollowing={true}>
        Luis Fernando
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" initialIsFollowing={false}>
      Miguel Angel Duran
    </TwitterFollowCard>
    </section >
  )
}