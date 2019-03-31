const functions = require("firebase-functions");
const express = require("express");
const { Nuxt } = require("nuxt");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();

const config = {
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/assets/"
  }
};
const nuxt = new Nuxt(config);

async function handleRequest(req, res) {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600")
  await nuxt.ready();
  return await nuxt.render(req, res);
}
app.use(handleRequest);
exports.ssr = functions.https.onRequest(app);