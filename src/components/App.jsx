import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";


import profile from "./profile/assets/user.json";
import statistics from "./statistics/assets/data.json"



export const App = () => {
  return (
    <div>

      <Profile user={profile} />
      <Statistics data={statistics} />
      
      
    </div>
  );
};
