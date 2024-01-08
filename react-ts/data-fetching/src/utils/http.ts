export async function get(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as unknown;

  return data;
}
