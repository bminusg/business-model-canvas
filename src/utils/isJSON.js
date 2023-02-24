export default function isJSON(string) {
  try {
    const json = JSON.parse(string);
    return json;
  } catch (error) {
    console.warn("[TO JSON ERROR]", string, error);
    return false;
  }
}
