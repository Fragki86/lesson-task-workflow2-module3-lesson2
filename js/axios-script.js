import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

async function postRequest() {
  const response = await axios.get(url);
  console.log (response)
}

postRequest();