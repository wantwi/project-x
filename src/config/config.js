import { UserManager } from "oidc-client";

// const {
//   REACT_APP_LOGOUT_REDIRECT,
//   REACT_APP_AUTHORITY,
//   REACT_APP_CLIENT_ID,
//   REACT_APP_CLIENT_ROOT,
//   REACT_APP_CLIENT_SECRET,
//   REACT_APP_RESPONSE_TYPE,
//   REACT_APP_scope,
//   REACT_APP_REDIRECT_URI,
// } = process.env;

export const config = {
  authority: "https://erdmsapiauth.persolqa.com/oauth/",
  client_id: "spa",
  redirect_uri: "http://127.0.0.1:5173",
  client_secret: "",
  scope:"reachmeapi email profile openid offline_access",
  response_type:"code",
  response_mode: "query",
  
};

 //authority: "https://erdmsapiauth.persolqa.com/oauth/",  client_id: "spa",  redirect_uri: "http://127.0.0.1:5173",  client_secret: "",  scope:"reachmeapi email profile openid",  response_type:"code",  response_mode: "query",

// authority: "https://erdmsapiauth.persolqa.com/oauth/",

// client_id: "spa",

// redirect_uri: "http://127.0.0.1:5173",

// client_secret: "",

// scope:"reachmeapi email profile openid",

// response_type:"code",

// response_mode: "query",


export const userManager = new UserManager(config);


export const getUser = async () => {
  return userManager.getUser();
};
export const userLogin = async () => {
  return userManager.signinRedirect();
};

export const renewToken = async () => {
  return userManager.signinSilent();
};

export const userLogout = async () => {
  
  return userManager.signoutRedirect();
};

export const signinCallback = async () => {
  return userManager.signinRedirectCallback();
};
