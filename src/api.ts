const API_BASE_URL = "http://localhost:5001";

export async function postData(url: string, data: unknown = {}) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
