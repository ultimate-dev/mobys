import { io } from "socket.io-client";
// Configs
import { API_URL } from "constants/configs";

export const socket = io(API_URL, {
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ["websocket"],
});
