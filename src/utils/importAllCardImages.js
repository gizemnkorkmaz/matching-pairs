//https://www.codegrepper.com/code-examples/javascript/frameworks/react/react+importing+all+images+in+folder+as+an+array
//https://webpack.js.org/guides/dependency-management/#context-module-api

export default function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
