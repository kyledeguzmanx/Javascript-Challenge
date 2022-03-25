function domainName(url){
    let start = url.includes("www.") ? url.indexOf("www.")+4 : (
        url.includes("http") ? url.indexOf("://")+3 : 0
    );
    let end; 
    while(url.lastIndexOf("/") > start){
        url = url.split("");
        url.length = url.lastIndexOf("/");
        url = url.join("");
    }
    if(url[url.length-3] == "." && url[url.length-6] == "."){
        url = url.split("");
        url.length = url.lastIndexOf(".");
        url = url.join("");
    }

    end = url.lastIndexOf(".");
    return url.slice(start, end);
}
console.log(domainName("https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript"))
