import http, { Server } from "http";

const products = [
     { id: 1, name: "Laptop"},
     { id: 2, name: "Mouse"},
];

const users = [
     { id: 1, name: "Irene"},
     { id: 2, name: "Nasya"},
     { id: 3, name: "Azalia"},
]
const server = http.createServer((req, res)=>{
     const url = req.url || "";
     const method = req.method;
     console.log (`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

     // routing manual
     if(url === "/"&& method === "GET"){
          res.writeHead(200,{"content-type":"application/json"});
          res.end(JSON.stringify({message:"Selamat datang dihalaman Home"}));
     }else if(url ==="/about"&& method ==="GET"){
          res.writeHead(200,{"content-type":"application/json"});
          res.end(JSON.stringify({message: "Halaman About"}));

     }else if(url ==="/products"&& method === "GET"){
               res.writeHead(200,{"content-type":"application/json"});
               res.end(JSON.stringify(products));

     }else if (url === "/products" && method === "POST"){
          res.writeHead(200, {"content-type":"application/json"});
          res.end(JSON.stringify({message: "Product Berhasil ditambahkan"}));

     }else if(url?.startsWith("/users/")&& method === "GET"){
          const id = Number(url.split("/")[2]);
          const user = users.find((u) => u.id === id);

          if (user){
          res.writeHead(200, {"content-type":"application/json"});
          res.end(JSON.stringify(user));
     }else {
          res.writeHead(200, {"content-type":"application/json"});
          res.end(JSON.stringify({message: "User tidak ditemukan"}));
          }
     }
     
     else{
          res.writeHead(200, {"content-type":"appliaction/json"});
          res.end(JSON.stringify({message:"Router tidak ditemukan"}));
     }
     });

     const startTime = Date.now();
     const endTime = Date.now();
     console.log(`Requesst selesai dalam ${endTime - startTime} ms`);

server.listen(3000,()=>{
    console.log("Server Berjalan di http://localhost:3000");
});