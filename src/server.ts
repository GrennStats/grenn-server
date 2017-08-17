import {NestFactory} from "@nestjs/core";
import {ApplicationModule} from "./modules/app.module";

const app = NestFactory.create(ApplicationModule);
app.listen(8888 , () => {
    console.log("Application is listening on port 8888.")
});