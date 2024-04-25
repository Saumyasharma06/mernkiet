const fs = require("fs");
const { json } = require("stream/consumers");
const data = fs.readFileSync("./data.json", "utf-8");

const dataObj = JSON.parse(data);
const url=require('url')

const cardTemplate = fs.readFileSync('./cardTmp.html','utf-8');
const pageTemplate=fs.readFileSync('./page.html','utf-8');
const inputElement=`
<form action='/product'>
    <input type='text' name='productName'>
    <button type="submit">Search</button>
</form>`

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp=cardTemplate;
    temp=temp.replace('$Title$',dataObj[i].title)
             .replace('$Info$',dataObj[i].description)
             .replace('$img_src$',dataObj[i].images[0])
             .replace('$Price$',dataObj[i].price)
             .replace('$Rating',dataObj[i].rating)
             .replace('$link$',`/product?id=${i}`);
    result.push(temp);
}
result=result.join(' ');


const http = require("http");

const server = http.createServer((req, res) => {
//   const route=req.url;
//   console.log(route);
    res.writeHead(200,{
        'content-type':'text/html',
    });

  const path=url.parse(req.url,true);
  const pathname=path.pathname;
  const q=path.query
  //console.log(path)
  if(pathname==='/home'){
    //res.write(result)
    res.end(inputElement+result);


  }
  else if(pathname==='/product'){
    const id=q.id;
    const pName=q.productName;
    if(pName){
        const nameResult=dataObj.filter((elem)=>{
            if(elem.title.includes(pName)){
                return true;
            }
            else{
                  return false;
            }
        })
        res.end(JSON.stringify(nameResult));

    }
    else if(pName){
        res.end(pName);
    }
    else{
        res.end('<h3>Error</h3>')
    }
    const item=dataObj[id];
    let tmp = pageTemplate;
    tmp = tmp.replace('$title',item.title)
             .replace('$des',item.description)
             .replace('$price',item.price)
             .replace('$rating',item.rating)
             .replace('$img',item.images[0]);
            

             res.write(tmp)
  }
  else{
    res.write('404...not found')
  }
  res.end();
});
server.listen(1500,console.log("server strated..."));
