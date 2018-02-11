// Créer un modèle qui représente les données et de manipuler les données dans un seul endroit : pouvoir l'appeler dans plusieurs endroits
export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title:string, link:string, votes?:number){ // ? : signifie qu'il est facultatif
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }
    domain(): string {
        try { // try catch quand on est pas sûr que ça va marcher
            const domainPath : string = this.link.split('//')[1]; // [http:][www.triptyk.eu/about]
            return domainPath.split('/')[0]; // [www.triptyk.eu] / [about] => www.triptyk.eu
        } catch (err) {
            return null;
        }
    }

}