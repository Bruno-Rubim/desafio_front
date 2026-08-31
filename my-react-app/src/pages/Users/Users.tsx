import useUser from "../../hooks/api/useUser";

function Users() {
  const resp = useUser();

  return (
    <>
      {resp.data.map((x) => (
        <div key={x.email}>
          {x.name} | {x.email} | {x.phone}
        </div>
      ))}
    </>
  );
}

export default Users;
