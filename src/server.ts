import {NestFactory} from "@nestjs/core";
import {ApplicationModule} from "./modules/app.module";
import * as express from "express";

const exp = express();

exp.get('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin" , "*");
    next();
});

const app = NestFactory.create(ApplicationModule, exp);
app.listen(8080 , () => {
    console.log("Application is listening on port 8888.")
});