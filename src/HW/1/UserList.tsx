type Address = {
    street: string
    city: string
}

type User = {
    id: number
    name: string
    age: number
    address: Address
};

type UserList = {
  users: User[];
};


export const UserList = ({users}: UserList) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
