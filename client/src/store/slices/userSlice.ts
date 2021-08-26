import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface UserState {
  myself?: Record<string, any>
  loading: boolean
  users?: Record<string, any>[]
}

const initialState: UserState = {
  loading: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMyself: (state, action: PayloadAction<Record<string, any>>) => {
      state.myself = action.payload
    },
    setUsers: (state, action: PayloadAction<Record<string, any>[]>) => {
      state.users = action.payload
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setMyself, setUsers, setUserLoading } = userSlice.actions

export const selectMyself = (state: RootState) => state.user.myself
export const selectUsers = (state: RootState) => state.user.users
export const selectUserLoading = (state: RootState) => state.user.loading

export default userSlice.reducer
