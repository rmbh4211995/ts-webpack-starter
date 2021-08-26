import React from 'react'
import Header from './Header'
import CardList from './CardList'
import PrismaUserList from './PrismaUserList'
import ReduxUserList from './ReduxUserList'

const App = () => {
  return (
    <>
      <Header />
      <div className='m-5'>
        <CardList />
        <PrismaUserList />
        <ReduxUserList />
      </div>
    </>
  )
}

export default App
