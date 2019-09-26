export class Model{
    public imagePath:string;
   public name:string;
    public releaseYear:number;
   public  description:string;
    constructor(imagePath:string,name:string,releaseYear:number,description:string){
        this.imagePath=imagePath;
        this.name=name;
        this.releaseYear=releaseYear;
        this.description=description;
    }
}
