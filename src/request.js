const baseURL = "http://valerystatinov.com/api";
const token = "valeria_subbotina";

export async function get(url) {
  return fetch(baseURL + url, {
    method: "GET",
    headers: {
      Token: token,
    },
  }).then((response) => {
    return response.json();
  });
}

export async function post(url, body) {
  return fetch(baseURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
}

export async function put(url, body) {
  return fetch(baseURL + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
    body: JSON.stringify(body),
  });
}
