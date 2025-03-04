import { Router } from 'express';
import { HomeController } from './controllers/home.controller.js';
import { ShopController } from './controllers/shop.controller.js';

export const routes = Router();

routes.get('/', HomeController.home);
routes.get('/shop', ShopController.shop);