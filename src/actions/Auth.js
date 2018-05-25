import {
  SELECT_ROLE
} from './types'

export const selectRole = (role) => {
  return {
    type: SELECT_ROLE,
    payload: role
  }
}
