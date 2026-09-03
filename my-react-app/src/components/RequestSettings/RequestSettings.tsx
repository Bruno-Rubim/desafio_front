import { useState } from "react";
import { STORAGE_KEYS } from "../../constants/localStorage";

function RequestSettings() {
  const [requestUrl, setRequestUrl] = useState(
    localStorage.getItem(STORAGE_KEYS.USER_REQUEST_URL) ??
      "https://jsonplaceholder.typicode.com/users",
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRequestUrl(event.target.value);
    localStorage.setItem(STORAGE_KEYS.USER_REQUEST_URL, event.target.value);
  };

  return (
    <>
      <h2>Alterar Resposta do request:</h2>
      <select value={requestUrl} onChange={handleChange}>
        <option value={"https://jsonplaceholder.typicode.com/users"}>
          200 ✅
        </option>
        <option value={"https://tools-httpstatus.pickup-services.com/404"}>
          404 ❌
        </option>
        <option value={"https://tools-httpstatus.pickup-services.com/500"}>
          500 ❌
        </option>
      </select>
      <button onClick={() => window.location.reload()}>
        Recarregar Página
      </button>
    </>
  );
}

export default RequestSettings;
