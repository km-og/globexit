// const baseUrl = "http://127.0.0.1:3000";
const baseUrl = "http://localhost:3000";

const getInfo = () => {
  return fetch(`${baseUrl}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error("Что-то пошло не так..."));
    }
  });
};

const getMatches = ({ query }) => {
  return fetch(`${baseUrl}?term=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error("Что-то пошло не так..."));
    }
  });
};

export { baseUrl, getInfo, getMatches };
