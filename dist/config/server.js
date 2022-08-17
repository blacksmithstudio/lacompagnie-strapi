"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env("HOST", process.env.HOST),
    port: env.int("PORT", process.env.PORT),
    app: {
        keys: env.array("APP_KEYS"),
    },
});
