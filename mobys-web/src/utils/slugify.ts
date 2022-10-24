import slugify from "slugify";
export default function (text: string) {
  return slugify(String(text), {
    lower: true,
    locale: "tr",
  }).replace(/[^\w-]+/g, "");
}
