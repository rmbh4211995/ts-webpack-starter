import React from 'react'
import Header from './Header'
import CardList from './CardList'
import GraphqlUserList from './GraphqlUserList'
import ReduxUserList from './ReduxUserList'

const App = () => {
  return (
    <>
      <Header />
      <div className='m-5'>
        <CardList />
        <GraphqlUserList />
        <ReduxUserList />
      </div>
    </>
  )
}

export default App
