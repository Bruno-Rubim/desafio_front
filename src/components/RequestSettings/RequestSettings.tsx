import { useState } from "react";
import { STORAGE_KEYS } from "../../constants/localStorage";
import styles from "./RequestSettings.module.css";

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
      <p>
        Isso irá alterar a URL usada nos requests de busca da lista de usuários
        e cadastro de novo usuário
      </p>
      <p>URL atual: {requestUrl}</p>
      <div className={styles.buttons}>
        <select
          className={styles.select}
          value={requestUrl}
          onChange={handleChange}
        >
          <option value={"https://jsonplaceholder.typicode.com/users"}>
            200/201 ✅
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
      </div>
    </>
  );
}

export default RequestSettings;
