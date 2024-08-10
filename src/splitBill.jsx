import Button from "./button.jsx"
import { useState } from "react";

function FormSplitBill(pr){
    const [bill,setBill] = useState('');
    const [paidByUser,setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying , setWhoIsPaying] = useState('user');

    function handleSubmit(e){
        e.preventDefault();

        if(!bill || !paidByUser) return;

        pr.onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>

            <h2>Split bill with {pr.selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={(e)=> setBill(
                Number(e.target.value)<paidByUser? paidByUser : Number(e.target.value))}/>

            <label>🧍‍♀️ Your expense</label>
            <input type="text" value={paidByUser} onChange={(e)=> setPaidByUser( 
                Number(e.target.value) > bill ? bill : Number(e.target.value) )}/>

            <label>👫 {pr.selectedFriend.name}&apos;s expence</label>
            <input type="text" value={paidByFriend}/>

            <label>🤑 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{pr.selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    );
}

export default FormSplitBill;