export const FriendListItem = ({ avatar, name, isOnline, id } ) => {
    console.log(avatar);
    return <div className="item" key={ id}>
        <img className="avatar" src={avatar} alt="Avatar" width="48" />
        <p className="name">{ name}</p>
        <p className="status">{ isOnline? 'Online' : 'Ofline'}</p>
    </div>;
}