//prob: Extract the domain name from a URL

const domainName = (url) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
 return url.split(".")[0];
};

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));