export interface ProfilI {
    _id?:any;
    nom : string;
    prenom:string;
    specialites:Array<string>;
    mail?: string;
    age :number;
    photo?: string;
    statut?:number;
    token?:string;
}

export class Profil implements ProfilI{
    _id = 0;
    nom = "";
    prenom = "";
    specialites = [""];
    mail = "";
    age = 0;
    photo = "";
    statut = 0;
    token = "";
}