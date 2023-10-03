import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friend-list/FriendList";


import profile from "./profile/assets/user.json";
import statistics from "./statistics/assets/data.json"
import friends from "./friend-list/assets/friends.json"
import transactions from "./transactions/assets/transactions.json"



export const App = () => {
  return (
    <div>

      <Profile user={profile} />
      <Statistics data={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={ transactions} />
      
    </div>
  );
};
