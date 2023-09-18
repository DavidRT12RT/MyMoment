import { PostType } from "@/interfaces/posts.interface";
import Post from "./posts/Post";

export default function VideosContent(){

    const posts:PostType[] = [
        {
            description:"Mejor lenguage de programacion?",
            lastUpdated:"10/09/2023",
            createdAt:"10/09/2023",
            id:"sdsd23wdjsfcsdnbcjh",
            tags:["programming","pcgaming","software","fronted","comedia"],
            song:{
                name:"La 2blea",
                composer:{
                    fullName: 'Anuel AA',
                }
            },
            interactions:{
                likes:560,
                comments:0,
                shares:10,
                saves:2
            },
            user:{
                fullName: 'Hernando Vallejo',
                userName:"Hernando",
                email: 'hernando@google.com',
                password: '123456',
                roles: ['user'],
                isActive: false
            },
        },
        {
            description:"Que opinas del nuevo videojuego del ano?",
            lastUpdated:"17/09/2023",
            createdAt:"16/09/2023",
            id:"sdsd23wdjsfsdsdskfnik",
            tags:["pcgaming","games","fortnite","pc"],
            song:{
                name:"Yo no se manaan",
                composer:{
                    fullName:"Daddy yanke"
                }
            },
            interactions:{
                likes:560,
                comments:0,
                shares:10,
                saves:2
            },
            user:{
                fullName: 'David Arcos',
                userName:"GuardianVicio",
                email: 'davidarcosm@hotmail.com',
                password: 'SyntaxError@404',
                roles: ['admin','super-user','user'],
                isActive: true
            },
        },
        {
            description:"Mejor ejercicio de calistenia",
            lastUpdated:"17/09/2023",
            createdAt:"16/09/2023",
            id:"sdsd23wd23e8rsjkd",
            tags:["fitness","gym","nutricion","gymrat","calistenia","calisthenics"],
            song:{
                name:"Never surrender",
                composer:{
                    fullName: 'Melissa Flores',
                }
            },
            interactions:{
                likes:560,
                comments:0,
                shares:10,
                saves:2
            },
            user:{
                fullName: 'Melissa Flores',
                userName:"Meli",
                email: 'melissa@google.com',
                password: '123456',
                roles: ['user'],
                isActive: true
            },
        }
    ];

    return (
        <section className="col-span-7 lg:col-span-6 bg-dark h-full flex flex-col gap-3 items-center overflow-scroll">
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </section>
    )

}