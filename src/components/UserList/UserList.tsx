import './styles.css';
export interface User {
  name: string;
  age: number;
}

interface UserListProps {
  userList: User[];
}

const UserList: React.FC<UserListProps> = ({ userList }) => {
  const sortedUsers = userList.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ol className='app-user-list'>
      {sortedUsers.map((user, index) => <li key={index}>{user.name}</li>)}
    </ol>
  );
}

export default UserList;
