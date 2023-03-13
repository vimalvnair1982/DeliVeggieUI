export interface ProductRequest{
   // id : string;
    name : string;
    description : string;
    brand : string;
    price : string;
}
export interface ProductResponse{
    data : string;
    status : boolean;
    message : string;
}