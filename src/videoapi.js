import axios from "axios";
import { useState } from "react";
const API_BASE_URL = "https://api.mindzenx.com";

export const GetToken = () => {
  const [t1, sett1] = useState("p");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    clientPlatform: "WEB",
    appVersionCode: 1,
    role: "EXPERT",
    Authorization: "49447486-7992-4576-b40c-7a130b16ffcc"
  };
  axios
    .get(`${API_BASE_URL}/video-sdk/auth-token`, { headers })
    .then((response) => {
      sett1(response.data.token);
    });
  return t1;
};

// export const getToken = async () => {
//   const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     clientPlatform: "WEB",
//     appVersionCode: 1,
//     role: "EXPERT",
//     Authorization: "49447486-7992-4576-b40c-7a130b16ffcc"
//   };
//   const res = await fetch("https://api.mindzenx.com/video-sdk/auth-token", {
//     method: "GET",
//     headers
//   });
//   const { token } = await res.json();

//   return token;
// };

export const liveMeeting = async () => {
  const res = await fetch(
    "https://api.mindzenx.com/expert/sessions/live/PAST",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        clientPlatform: "WEB",
        appVersionCode: 1,
        role: "EXPERT",
        Authorization: sessionStorage.getItem("infotoken")
      }
    }
  );
  const response = await res.json();
  const meetingId = await response.sessions[0].meetingId;
  console.log("LiveMeeting");
  console.log(meetingId);
  // console.log(id);
  return meetingId;
};

export const callMeeting = async () => {
  const res = await fetch(
    "https://api.mindzenx.com/expert/sessions/one-on-one/PAST",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        clientPlatform: "WEB",
        appVersionCode: 1,
        role: "EXPERT",
        Authorization: sessionStorage.getItem("infotoken")
      }
    }
  );
  const response = await res.json();
  const meetingId = await response.sessions[0].meetingId;
  console.log("CallMeeting");
  console.log(meetingId);
  // console.log(id);
  return meetingId;
};
