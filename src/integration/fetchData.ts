import axios from "axios";
export async function fetchName(name: string) {
  const response = await axios.get("https://httpbin.org/get?name=" + name);
  return response.data.args.name;
}
