const express = require("express");
const guideRouter = express.Router();
const bodyParser = express.json();
const logger = require("./logger");
const { v4: uuid } = require("uuid");
const guideService = require("./guide-service");
const xss = require("xss");
const knexbase = require("knex");

const serializeTodo = (todo) => ({
  id: guide.id,
  title: xss(guide.title),
  text: xss(guide.text),
  author: xss(guide.author),
});

const knex = knexbase({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

guideRouter
  .route("/")
  .get((req, res, next) => {
    guideService
      .getAllGuides(knex)
      .then((guides) => {
        res.json(guides);
      })
      .catch(e => console.log(e))
  })
  .post(bodyParser, (req, res, next) => {
    const { title, text, author, url, key } = req.body;

    if (!text) {
      return res.status(400).send("guide content required");
    }
    const newGuide = {
      id: uuid(),
      title,
      text,
      author,
      url,
      key
    };

    guideService
      .insertGuide(knex, newGuide)
      .then((guide) => {
        res
          .status(201)
          .location(`/${newGuide.id}`)
          .json(newGuide)
          .send();
      })
      .catch(next);
  })
  ;

  guideRouter.route("/:id")
  .patch(bodyParser, (req, res, next) => {
  const { title, text, author, url } = req.body;
  const { id } = req.params;
  console.log(id, title, text, author, url)
  if (!text) {
    return res.status(400).send("guide content required");
  }
  const newGuide = {
    id,
    title,
    text,
    author,
    url,
  };

  guideService
    .editGuide(knex, id, newGuide)
    .then(() => {
      res
        .status(201)
        .location(`/${newGuide.id}`)
        .json(newGuide)
        .send()
    })
    .catch(next);
})
.delete((req, res, next) => {
  const { id } = req.params;

  guideService
    .deleteGuide(knex, id)
    .then(() => {
      res.status(204).send("Deleted").end();
    })
    .catch(next);
});

module.exports = guideRouter;
