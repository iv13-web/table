import Container from './components/container'
import SearchStatus from './components/searchStatus'
import Users from './components/users'
import API from './API'
import { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState(API.users.fetchAll())

  const deleteHandler = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const toggleBookMarkHandler = (userId) => {
    const selected = users.findIndex((user) => user._id === userId)
    const updatedUsers = [...users]
    updatedUsers[selected].saved = !updatedUsers[selected].saved
    setUsers(updatedUsers)
  }

  return (
    <Container>
      <SearchStatus length={users.length} />
      <Users
        onDelete={deleteHandler}
        onToggleBookmark={toggleBookMarkHandler}
        users={users}
      />
    </Container>
  )
}
