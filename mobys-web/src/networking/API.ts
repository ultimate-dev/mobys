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
  AUTH_LOGIN: new API("/auth/login"),
  AUTH_VERIFY: new API("/auth/verify"),
  UPLOAD: new API("/api/upload"),
  SUPPLIERS: new API("/api/supplier"),
  SUPPLIER: new API("/api/supplier/$1"),
  ACCOUNT: new API("/api/account"),
  ACCOUNT_EMAIL: new API("/api/account/email"),
  ACCOUNT_PASSWORD: new API("/api/account/password"),
};

export default apis;
