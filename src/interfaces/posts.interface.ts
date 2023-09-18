
export interface PostType {
    description:string,
    lastUpdated:string,
    createdAt:string,
    id:string,
    tags?:string[],
    interactions:InteractionsType
    song?:{
        name:string,
        composer:{
            fullName:string
        }
    },
    location?:{
        merchant:string,
        city:string
    }
    user:{
        fullName:string,
        userName:string,
        email:string,
        password:string,
        roles:string[],
        isActive:boolean
    },
};

export interface InteractionsType {
    likes:number;
    comments:number,
    shares:number,
    saves:number,
};