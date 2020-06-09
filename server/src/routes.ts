import express, { request, response } from 'express'
import multer from 'multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multerConfig from './config/multer';


const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itensController = new ItemsController();


routes.get("/items", itensController.index);


routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);


routes.post("/points", upload.single('image'), pointsController.create);

export default routes;