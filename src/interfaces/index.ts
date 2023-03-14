export interface IProducts {
  id?: number,
  name: string,
  amount: string,
  order_id?: number,
}

export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IToken {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}