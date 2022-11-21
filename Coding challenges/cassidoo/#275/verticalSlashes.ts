function verticalSlashes(slashes: string) {
  let indent = 0;
  let indented = "";
  let prevChar = "";
  slashes.split("").forEach((char) => {
    if (!["\\", "/"].includes(char)) throw new Error(`Invalid token ${char}`);

    // first line and on direction change
    if (prevChar === "" || (prevChar !== "" && prevChar !== char)) {
      // do nothing
    } else if (char === "\\") {
      indent++;
    } else {
      indent--;
    }
    if (indent < 0) throw new Error(`Invalid indentation`);
    indented += " ".repeat(indent).concat(char).concat("\n");

    prevChar = char;
  });
  return indented;
}

console.log(verticalSlashes("\\\\\\//\\/\\\\"));
console.log(verticalSlashes("\\\\\\\\"));
// console.log(verticalSlashes("\\\\///")); // throws "Error: Invalid indentation"
// console.log(verticalSlashes("\\\\//a")); // throws "Error: Invalid token a"
