import { inflateRaw } from "zlib";

export interface CourseType {
    img?:string;
    name?:string;
    rating?:number;
    reviews?:number;
    teacher?:string;
    id?:string;
}

export interface FormType {
    name:string;
    fatherName:string;
    email:string;
    phone:string;
    cnic:string;
    fcnic:string;
    course:string;
    city:string;
    gender:string;
    dob:string;
    address:string;
    qualification:string;
}

export interface MsgType{
    name:string;
    email:string;
    subject:string;
    message:string
}