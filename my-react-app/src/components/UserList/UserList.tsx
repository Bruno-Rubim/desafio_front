import type { UserType } from "../../schemas/userSchema";

type UserListProps = {
  list: UserType[];
  error: string | null;
};

function UserList({ list, error }: UserListProps) {
  return (
    <>
      {list.length > 0 && (
        <table>
          <tbody>
            {list.map((u) => (
              <tr key={Math.random()}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {list.length == 0 && error == null && <p>List size 0</p>}
      {list.length == 0 && error != null && <p>Error</p>}
    </>
  );
}

export default UserList;
