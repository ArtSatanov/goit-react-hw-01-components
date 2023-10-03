export const FriendList = ({ friends }) => {

   return (
      <ul>
         {friends.map((friend) => {
            <FriendListItem
               key = {friend.id}
            />
         })}
      </ul>
   )

}



{/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */}