import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
    console.log(friends.lenght);

    return <ul>
        {friends.map((even, idx )=> {
            
                console.log(even.avatar);
            <li key={idx}><FriendListItem
                avatar={even.avatar}
                name={even.name}
                isOnline={even.name}
                id={even.id}
            /></li>
            }
        )}       
    </ul>
    
}