Aiming to deploy mid October.

Goal: learn Node.js / Typescript / React / Express 
      / PostgreSQL / pgvector / docker / vercel / git

frontend : react + typescript -> upload / search / UI
http/api
backend : node.js + express -> doc processing, chunking, search algos, ranking, citation tracking


database: postgresql -> documents chunks metadata locations/citations 


Node.js allows you to run javascript / typescript inside your terminal environment instead of relying on a browser. This is important, because it allows the app
to talk directly to the browser AND talk to the server without exposing the database to every user. So, if youre not using node.js then there is no safe/fast way to
use typescript for both the database and the front end. 

It also allows you to process uploaded files. It keeps private things private like database credentials, api keys, auth logic etc. on this sever not inside the react code. also handles multiple users because they will be talking to the backend rather than the direct database. 
