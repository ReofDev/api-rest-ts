import { Router } from 'express';
import { readdir } from 'node:fs/promises';

import { cleanFileName } from '../utils/common';
import { TYPE_FILE_NAME} from '../const/const'

const PATH_ROUTER = `${__dirname}`;
const router = Router();

interface Module {
  router?: Router;
}


/**
 * @description this function registers the router.
 */
async function registerRoutes() {
  try {
    const files = await readdir(PATH_ROUTER);

    const modules: Promise<Module | undefined>[] = files.map(async (fileName) => {
      if (fileName === TYPE_FILE_NAME.INDEX_JS || fileName === TYPE_FILE_NAME.INDEX_TS) {
        return undefined; 
      }

      const cleanName = cleanFileName(fileName);
      return await import(`./${cleanName}`);
    });

    const loadedModules = await Promise.all(modules);

    // Filtrar módulos válidos y registrar rutas
    loadedModules.forEach((module, index) => {
      const cleanName = cleanFileName(files[index]);
      if (!module || !module.router) {
       //console.warn(`Skipping invalid route module: ${cleanName}`);
        return;
      }

      router.use(`/${cleanName}`, module.router);
      console.log(`Registered route module: ${cleanName}`);
    });
  } catch (error) {
    console.error(`Error loading routes: ${error}`);
  }
}

registerRoutes();

export { router };

