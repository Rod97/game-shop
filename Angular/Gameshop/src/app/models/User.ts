export class User{
    constructor(
        public email:string,
        public password:string,
        public firstname:string,
        public lastname:string,
        public address:string,
        public ccNumber:number,
        public phoneNumber:string,
        public dateOfBirth:Date
    ){}
}