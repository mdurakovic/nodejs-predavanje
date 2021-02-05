const url = require('url');

const myUrl = process.argv[2];

if (myUrl) {
  const { href, host, pathname, protocol } = new URL(myUrl);

  console.log(`The HREF is: ${href}`);
  console.log(`The Protocol is: ${protocol}`);
  console.log(`The Host is: ${host}`);
  console.log(`The Pathname is: ${pathname}`);
}
