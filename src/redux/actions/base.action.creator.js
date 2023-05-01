import {DEC, INC, RESET} from "./base.actions";

export const increment = () => {
  return {type: INC, payload: 2}
}

export const decrement = () => {
  return {type: DEC, payload: 3}
}

export const reset = () => {
  return {type: RESET}
}
