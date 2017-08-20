import * as bunyan from "bunyan";

export const LoggerService: bunyan = bunyan.createLogger({
    name: "grenn",
    streams: [
        {
            level: "info",
            stream: process.stdout // log INFO and above to stdout
        },
        // {
            // level: "error",
            // path: "/var/log/grenn-error.log" // log ERROR and above to a file
        // }
    ]
});