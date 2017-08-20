import {NestFactory} from "@nestjs/core";
import {ApplicationModule} from "./modules/app.module";
import * as express from "express";
import {LoggerService} from "./modules/logging/logging.service";

const port = (+process.env.PORT || 8080);
const exp = express();

exp.use((err, req, res, next) => {
    LoggerService.error(err);
    next();
});

exp.get("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin" , "*");
    next();
});

const app = NestFactory.create(ApplicationModule, exp);
app.listen(port , () => {
    console.log(`Application is listening on port ${port}.`)
});