import Login from "../Components/Signup/Login";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Login />;
};

export default LoginPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData);
  const url = "https://api.flipshop.tech/api/login";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  const responseData = await response.json();
  console.log("response");
  console.log(responseData);
  console.log("response json");
  console.log(responseData.success);

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData;
  }

  if (!response.ok) {
    throw Error('Something Went Wrong')
  }

  const token = responseData.data.token;
  const role = responseData.data.role;
  const name = responseData.data.name;

  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  localStorage.setItem("role", role);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  //handling the data token
  return redirect("/");
}
