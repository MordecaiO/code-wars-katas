/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/


function domainName(url){
  
  // replace http or https with empty string
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  // replace www. with empty string
  url = url.replace("www.", "");
  // seperate domain name with "." as seperator
  let urlArr = url.split("."); 
 
  return urlArr[0]
}
