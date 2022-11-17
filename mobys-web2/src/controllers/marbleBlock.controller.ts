import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";

configure({ enforceActions: "never" });

class MarbleBlockController {
  marbleBlocks: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  async get() {
    try {
      let { data } = await axios.get(APIS.MARBLE_BLOCK.rawValue);
      if (!data.error) this.marbleBlocks = data.marbleBlocks;
    } catch (err) {}
  }
}

export default MarbleBlockController;
