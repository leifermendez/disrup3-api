const fs = require("fs");
const express = require("express");

const routes = express.Router();

const PATH_DIR = __dirname;

/**
 * Remover la extension del archivo y devolver el nombre de la ruta
 * @param {*} file
 * @returns
 */
const parseFilename = (file) => {
  return file.split(".").shift();
};

/**
 * Leer, Limpiar y cargar rutas
 */
const readDir = () => {
  const files = fs.readdirSync(PATH_DIR);

  const routesFiles = files.map((file) => {
    const routeName = parseFilename(file);
    return routeName;
  });

  const skipRoutes = ["index"];

  const cleanRoutes = routesFiles.filter((file) => !skipRoutes.includes(file));

  cleanRoutes.forEach((routeName) => {
    const callFileRoute = require(`./${routeName}`);
    routes.use(`/${routeName}`, callFileRoute.router);
  });
};

readDir();

module.exports = { routes };
