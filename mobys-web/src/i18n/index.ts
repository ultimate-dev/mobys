// @ts-nocheck
// I18n
import { I18n } from "i18n-js";
// Translations
import TR from "./tr.json";
import EN from "./en.json";
import DE from "./de.json";
import DA from "./da.json";
import FR from "./fr.json";
import ES from "./es.json";
import FA from "./fa.json";
import AR from "./ar.json";
// Store
import MStore from "store/main.store";

export const translations: any = {
  TR,
  EN,
  DE,
  DA,
  FR,
  ES,
  DA,
  FA,
  AR,
};

const i18n = new I18n(translations);

i18n.fallbacks = true;
i18n.locales.no = "EN";
i18n.locale = MStore.locale;

export default i18n;
