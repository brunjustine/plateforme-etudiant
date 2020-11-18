export interface Profil {
    _id?:number | string;
    nom : string;
    prenom:string;
    specialites:Array<string>;
    mail: string;
    age :number;
    photo?: string;
}
