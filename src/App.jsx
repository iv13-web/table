import Container from './components/container'
import Users from './components/users'
import api from './API/fake.api/user.api'
import {useEffect, useState} from 'react'

export default function App() {
  const [users, setUsers] = useState()

  const deleteHandler = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  useEffect(() => {
    api.fetchAll().then(data => setUsers(data))
  }, [])

  const toggleBookMarkHandler = userId => {
    const selected = users.findIndex(user => user._id === userId)
    const updatedUsers = [...users]
    updatedUsers[selected].saved = !updatedUsers[selected].saved
    setUsers(updatedUsers)
  }

  return (
    <Container>
      {users &&
        < Users
          onDelete={deleteHandler}
          onToggleBookmark={toggleBookMarkHandler}
          users={users}
          />
      }
    </Container>
  )
}
