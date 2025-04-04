import { Router } from "express";
import { UserController } from "../controllers/UserController";


const router = Router();
const userController = new UserController();

router.get('/', userController.findAll.bind(userController));
router.get('/findByIdByPathVariable/:id', userController.findById.bind(userController)); //estructura para captura
router.get('/findByIdByQueryParams', userController.findByIdRequestParams.bind(userController));


router.post('/login', userController.login.bind(userController));


router.post('/', userController.create.bind(userController)); 
router.put('/:id', userController.update.bind(userController)); 
router.delete('/:id', userController.delete.bind(userController)); 

export default router;

