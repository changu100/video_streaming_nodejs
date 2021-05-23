
const mainurl = "[IP:port]/folderpath/video" 
const videourl ="[IP:port]/video"
var addurl="";
var videoaddurl="";

async function getlist(){
    console.log(mainurl + addurl);
    return fetch(mainurl + addurl)
    .then(function(res){
        //console.log(res);
        return res.json(); 
    }).then(function(json){
        //console.log(json);
       // return JSON.parse(json);
        return json;
    })
}
async function setjade(){
    let list = await getlist();
    if(list.length == 0){
        location.href=videourl + videoaddurl;
    }
    else{
        console.log(list);
        document.write("<input class=\"button\" type=\"button\" value=\"..\" onclick=\"move(this)\">");
        document.write("<br>");
        for(var i = 0 ; i < list.length;i++)
        {    
            document.write("<input class=\"button\" type=\"button\" value="+list[i]+" onclick=\"move(this)\">");
            document.write("<br>");
        }
        document.write("<br>");
        document.write("<br>");
    }
}
setjade();

function move(a){
    console.log(a.value);
    document.clear();
    addurl += "~"+a.value;
    videoaddurl+="/"+a.value;
    setjade();
}