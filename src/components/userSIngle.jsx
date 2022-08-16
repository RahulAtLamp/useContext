import { useContext } from "react";
import { userContext } from "../App";

const UserSingle = () => {
    const setUsers = useContext(userContext);

    // const users = [
    //     {
    //         name:"Lajja",
    //         email:"lajja@lampros.tech"
    //     },
    //     {
    //         name:"Bhadresh",
    //         email:"bhadresh@lampros.tech"
    //     },
    //     {
    //         name:"Jaydip",
    //         email:"jaydip@lampros.tech"
    //     }
    // ]

    // const name = users.filter((i)=>{
    //     return i.name === "Bhadresh"
    // })

    
    const setData = () => {
        setUsers({
            name:"Bhadresh",
            email:"bhadresh@lampros.tech"
        })
    }
    return(
        <>
        <div>
            <button onClick={setData}>Add Users</button>
        </div>
        </>
    )
}

export default UserSingle;