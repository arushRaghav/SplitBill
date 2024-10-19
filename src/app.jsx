import FormAddFriend from "./addFriend";
import FriendsList from "./friendslist";
import Button from "./button";
import FormSplitBill from "./splitBill";
import { useState } from "react";
import initialFriends from "./data";
// import Circle from "./circle";

function App() {
  const [showAddFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(false);

  function handleShowAddFriend() {
    setAddFriend((sh) => !sh);
    setSelectedFriend(false);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddFriend(false);
  }
  function handleSelection(friend) {
    selectedFriend?.id !== friend.id && setAddFriend(false);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
          onSplitBill={handleSplitBill}
        />
      )}

      {/* <Circle /> */}
    </div>
  );
}

export default App;
