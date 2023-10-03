import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";


import profile from "./profile/assets/user.json";
// import statistics from "./components/statistics/assets/data.json"



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile user={profile} />
      {/* <Statistics data={statistics} /> */}
      
      
    </div>
  );
};
