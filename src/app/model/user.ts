// export interface User {
//     name: string
//     bitCoin: number
//     transfers: Transfer[]
// }

export class User {

    public _id?: string = ''
    constructor(
        public name: string = '',
        public bitCoin: number = 100,
        public transfers: Transfer[]
        ) {
    }
  
    setId?(id: string = 'u101') {
        this._id = id
    }
  }

export interface Transfer {
    toId: string;
    to: string;
    at: number;
    amount: number;

}