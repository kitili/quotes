export class Quotes {
    showDescription: boolean;
    constructor(public id:number,public name:string,public title:string,public quote: string,public author:string,public date:Date,public likes:number,public dislikes:number){
        this.showDescription=true;
       

    }
        
}
