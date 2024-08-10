import Button from "./button"

function Friend(pr){

    const isSelected = pr.selectedFriend?.id === pr.friend.id;

    return <li className={isSelected?'selected':''}>
        <img src={pr.friend.image} alt={pr.friend.name} />
        <h3>{pr.friend.name}</h3>
        {pr.friend.balance < 0 && <p className="red">Yow owe {pr.friend.name} {Math.abs(pr.friend.balance)}$</p>}
        {pr.friend.balance > 0 && <p className="green">{pr.friend.name} ows you {Math.abs(pr.friend.balance)}$</p>}
        {pr.friend.balance === 0 && <p>Yow and {pr.friend.name} are even</p>}

        <Button onClick={()=>pr.onSelection(pr.friend)}>{isSelected?'Close':'Select'}</Button>
    </li>;
}


function FriendsList(pr) {
    return <ul>
        {pr.friends.map((friend)=> (
            <Friend 
            friend={friend} 
            key={friend.id} 
            onSelection={pr.onSelection}
            selectedFriend={pr.selectedFriend}
            /> 
        ))}
    </ul>
}



export default FriendsList;