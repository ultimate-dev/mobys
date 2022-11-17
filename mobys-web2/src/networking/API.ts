class API {
  rawValue: string;

  constructor(str: string) {
    this.rawValue = str;
  }

  value(...args: any[]) {
    let val = this.rawValue;
    let match,
      i = 0;
    do {
      match = /(\$\d+)/gu.exec(val);
      if (match && args[i]) val = val.replace(match[0], args[i++]);
    } while (match);
    return val;
  }
}

const apis = {
  MARBLE_BLOCK: new API("/api/marble/block"),
};

export default apis;
