import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'luisfer194',
    name: 'Luis Fernando',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo H',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hernandez',
    isFollowing: true
  },
  {
    userName: 'juandc',
    name: 'Juan David C',
    isFollowing: false
  },
  {
    userName: 'carlogilmar',
    name: 'Carlo Gilmar',
    isFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section >
  )
}