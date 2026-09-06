/**
 * Fetcher de dados a partir do URL fornecido e retorna formatado em JSON
 * @param url URL para fazer o fetch
 * @returns
 */
export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return await response.json();
}
