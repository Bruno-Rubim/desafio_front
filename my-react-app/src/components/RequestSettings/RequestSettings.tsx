import { useState } from "react";

function RequestSettings() {
  const [requestUrl, setRequestUrl] = useState(
    localStorage.getItem("requestUrl") ??
      "https://jsonplaceholder.typicode.com/users",
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRequestUrl(event.target.value);
    localStorage.setItem("requestUrl", event.target.value);
  };

  return (
    <>
      <select value={requestUrl} onChange={handleChange}>
        <option value={"https://jsonplaceholder.typicode.com/users"}>
          200
        </option>
        <option value={"https://tools-httpstatus.pickup-services.com/404"}>
          404
        </option>
        <option value={"https://tools-httpstatus.pickup-services.com/500"}>
          500
        </option>
      </select>
    </>
  );
}

export default RequestSettings;
