export interface IProducts {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
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

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[],
}