import styles from "./Profile.module.css"
import { Avatar } from "./avatar/Avatar"


export const Profile = (props) => { 
   return <Avatar user={props} />;
}