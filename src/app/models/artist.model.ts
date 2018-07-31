export class Artist {
    name: string;
    pictureUrl: string;
    facebookPage?: string;

    constructor(name: string, pictureUrl: string, facebookPage?: string){
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.facebookPage = facebookPage;
    }
}