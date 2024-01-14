import css from '../FriendListItem/FriendListItem.module.css'
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    console.log(avatar);
    return <div className={css.item} key={ id}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="90" />
        <p className={css.name}>{ name}</p>
        <p className={css.status}>{ isOnline? 'Online' : 'Ofline'}</p>
    </div>;
}