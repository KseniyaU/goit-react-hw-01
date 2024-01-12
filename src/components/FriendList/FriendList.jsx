import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from '../FriendList/FriendList.module.css'

export const FriendList = ({ friends }) => {
    // console.log(friends.lenght);

    return <ul>
        {friends.map((even, idx )=> (
            
                // console.log(even.avatar);
            <li key={idx}><FriendListItem
                avatar={even.avatar}
                name={even.name}
                isOnline={even.isOnline}
                id={even.id}
            /></li>
        )
        )}       
    </ul>
    
}