import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthData() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  //no token
  if (!token) {
    return {};
  }
  //have token then check duration
  const tokenDuration = getTokenDuration();
  //if expired
  if (tokenDuration < 0) {
    return { token: "EXPIRED", name: name, role: role };
  }
  //if not expired
  return { token: token, name: name, role: role };
}

export function tokenLoader() {
  return getAuthData();
}

export function checkSellerAuthLoader() {
  const { role, token } = getAuthData();
  console.log(role);
  if (!role || role !== "seller") {
    return redirect("/login");
  }
  return {token};
}

export function checkBuyerAuthLoader() {
  const { role, token } = getAuthData();
  console.log(role);
  if (!role || role !== "buyer") {
    return redirect("/login");
  }
  return {token};
}

export function checkAdminAuthLoader() {
  const { role, token } = getAuthData();
  console.log(role);
  if (!role || role !== "admin") {
    return redirect("/login");
  }
  return {token};
}

export function checkAuthLoader() {
  const { token, role, name } = getAuthData();
  console.log(token, name, role);
  if (!token) {
    return redirect("/login");
  }
  return {};
}
