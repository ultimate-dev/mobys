import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";

configure({ enforceActions: "never" });

class IndexController {
  constructor() {
    makeAutoObservable(this);
  }
}

export default IndexController;
