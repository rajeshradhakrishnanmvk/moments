export class User {
    userid: string;
    password: string;
    name:string;
    firstname: string;
    lastname: string;
    role: string;
    contact:string;
    AddedDate:Date;

    constructor(user:string,pass:string) {
        this.userid=user;
        this.password=pass;
        this.name='';
        this.firstname = '';
        this.lastname = '';
        this.role = '';
        this.contact = '';
        this.AddedDate= new Date();
    }

    fullName(){
        this.name = this.firstname + this.lastname;
    }
  }

