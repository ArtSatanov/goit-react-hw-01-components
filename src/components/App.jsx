import { Profile } from "./profile/Profile";



export const App = ({users, statistics}) => {
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

      <Profile user={users} />
      <Statistics data={statistics} />
      
      
    </div>
  );
};
