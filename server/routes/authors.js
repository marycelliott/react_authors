const controller = require("./../controllers/authors");

module.exports = app => {
  // GET ALL PRODUCTS
  app.get("/api/authors", controller.index);
  //   // GET ONE PRODUCT BY ID
  app.get("/api/authors/:id", controller.show);
  // CREATE PRODUCT
  app.post("/api/authors", controller.create);
  // UPDATE PRODUCT BY ID
  app.put("/api/authors/:id", controller.update);
  //   // DELETE PRODUCT BY ID
  app.delete("/api/authors/:id", controller.delete);
};
