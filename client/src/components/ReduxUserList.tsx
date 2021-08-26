import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, setUserLoading, selectUsers, selectUserLoading } from '../store/slices/userSlice'

const ReduxUserList = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const loading = useSelector(selectUserLoading)

  useEffect(() => {
    const fakeLoading = () => {
      setTimeout(() => {
        // wait 7 seconds
        dispatch(
          setUsers([
            { name: 'Redux Man', value: 'Wow what a cool framework!' },
            { name: 'Cleo Reduxtra', value: 'I love making my art with this framework' },
          ]),
        )
        dispatch(setUserLoading(false))
      }, 7000)
    }

    fakeLoading()
  }, [])

  return (
    <div className='mt-10'>
      <p>Redux Users</p>
      {loading ? <p>Give us a moment...loading redux users...</p> : <pre>{JSON.stringify(users, null, '\t')}</pre>}
    </div>
  )
}

export default ReduxUserList
