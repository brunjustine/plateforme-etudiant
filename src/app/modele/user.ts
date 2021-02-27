export interface UserI {
    _id? : any;
    password : string;
    
}

export class User implements UserI{
    _id = 0;
    password = "";
}

