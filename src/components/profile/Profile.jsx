import styles from "./Profile.module.css"
import { Avatar } from "./avatar/Avatar"
import {Stat} from "./stat/Stat"


export const Profile = ({ user }) => { 
   return (
      <div className={styles.profile}>
      <Avatar avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} />
      <Stat followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
      </div>
   )
}


