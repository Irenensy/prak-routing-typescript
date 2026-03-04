import http from "http";

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    //routing manual
    if(url === "/"&& method === "GET"){
        res.writeHead(200, {"Content-type":"application/json"});
        res.end(JSON.stringify({message:"Selamat datang di halaman Home"}));
    }else if(url ==="/about"&& method === "GET"){
        res.writeHead(200, {"Content-type":"application/json"});
        res.end(JSON.stringify({message:"Halaman About"}));
    }else if(url?.startsWith("/user")&& method === "GET"){
        const id = url.split("/")[2];
        res.writeHead(200, {"Content-type":"application/json"});
        res.end(JSON.stringify({message:"User ID:" + id}));
    }else{
        res.writeHead(404, {"Content-type":"application/json"});
        res.end(JSON.stringify({message:"Route tidak ditemukan"}));
    }
});
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server Berjalan di http://localhost:3000");
});