/**
 * Fetcher de dados a partir da URL fornecida, retornando os dados formatados em JSON
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
