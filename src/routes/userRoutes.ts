import { Router } from "express";
import { UserController } from "../controllers/UserController";


const router = Router();
const userController = new UserController();

router.get('/', userController.findAll.bind(userController));
router.get('/findByIdByPathVariable/:id', userController.findById.bind(userController)); //estructura para captura
router.get('/findByIdByQueryParams', userController.findByIdRequestParams.bind(userController)); 
    //estructura para captura
router.get('/login', userController.login.bind(userController));


export default router;

