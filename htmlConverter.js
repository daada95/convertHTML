function convertHTML(str) {
// first we create regular expressions to find the non-compliant characters
  let andRegex = /&/g;
  let smallerThanRegex = /</g;
  let greaterThanRegex = />/g;
  let quotationRegex = /"/g;
  let apostropheRegex = /'/g;
  
// then we run our input through our regexes, replacing non-compliant characters with compliant ones - it's important to start with "&", as it is repeated later on in every single element
  str = str.replace(andRegex, "&amp;");
  str = str.replace(smallerThanRegex, "&lt;");
  str = str.replace(greaterThanRegex, "&gt;");
  str = str.replace(quotationRegex, "&quot;");
  str = str.replace(apostropheRegex, "&apos;")
 
// finally, we return string
  return str;
}
