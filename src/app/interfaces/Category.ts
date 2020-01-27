export interface Category
{
    _id:string,
    name:string,
    color:string,
    price:number,
    size:[
        {
            width:number,
            hight:number,
            depth:number
        }
    ],
    material:string,
    img_url:string
}