import { data } from '../data/PromotionCodes.json'
import {
  FETCH_CODES
} from './types'

export const fetchCodes = () => {
  return { type: FETCH_CODES, payload: data}
}
