const BASE_URL = "https://codebreaker-empre.herokuapp.com";

export default async function postNumber(number) {
  try {
    const res = await fetch(`${BASE_URL}/api/codebreaker`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(number)
    });
    const data = res.json()
  } catch (error) {
      console.log(error)
  }
  return data;
}


