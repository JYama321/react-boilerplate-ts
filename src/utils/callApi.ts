export default function callApi(
  method: string,
  url: string,
  path: string,
  data?: any
) {
  return fetch(url + "/api" + path, {
    // method, headers, bodyの順番がわかりやすいのでtslint無視
    // tslint:disable:object-literal-sort-keys
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
