const glob = require("glob");
const path = require("path");
const fs = require("fs");

// Monkey-patch prisma-client-lib to exclude prettier from the bundle
const prismaClientLibFiles = glob.sync(path.join(process.cwd(), "node_modules", "prisma-client-lib", "dist", "**", "*.js"));
const search = 'require("prettier")';
const replacement = 'null';
prismaClientLibFiles.forEach(file => {
  const contents = fs.readFileSync(file).toString();
  if (contents.includes(search)) {
    fs.writeFileSync(file, contents.replace(search, replacement));
  }
});
