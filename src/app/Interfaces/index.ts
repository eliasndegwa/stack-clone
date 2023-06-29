export interface User {
    name: string
    password: string
    id: number
}

export interface Question{
    heading:string
    description:string
    tags: string[];
    id:number | string
}