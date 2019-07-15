export default (mainClass, ...modificators) => {
  console.log(modificators);
  return [
    mainClass,
    ...modificators.map(m => {
      if (!m) {
        return null;
      }
      if (typeof m === "object") {
        let propName = Object.keys(m)[0];
        if (m[propName]) {
          if (typeof m[propName] === "boolean") {
            return `${[mainClass, propName].join("__")}`;
          }
          return `${[mainClass, propName].join("__")}-${m[propName]}`;
        }
        return null;
      }
      return [mainClass, m].join("__");
    })
  ].join(" ");
};
