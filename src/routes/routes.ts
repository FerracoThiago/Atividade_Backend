
import {Router} from "express"
import { UserController } from "../controllers/userController";
import { ProdutoController } from "../controllers/produtoController";
import { PedidoController } from "../controllers/pedidoController";
const router = Router();

//User Routes
router.post("/user",UserController.createUser);
router.get("/user/:userId",UserController.readUser);
router.get("/users",UserController.readAllUsers);
router.put("/user/:userId",UserController.updateUser);
//router.put("/upsert/:userId",UserController.upsertUser);
router.delete("/user/:userId",UserController.deleteUser);
router.delete("/users",UserController.deleteAllUsers);

//Produto Routes

router.post("/produto",ProdutoController.createProduto);
router.get("/produto/:produtoId",ProdutoController.readProduto);
router.get("/produtos",ProdutoController.readAllProdutos);
router.put("/produto/:produtoId",ProdutoController.updateProduto);
router.put("/upsert/:produtoId",ProdutoController.upsertProduto);
router.delete("/produto/:produtoId",ProdutoController.deleteProduto);
router.delete("/produtos",ProdutoController.deleteAllProdutos);

//Pedido Routes

router.post("/pedido",PedidoController.createPedido);
router.get("/pedido/:pedidoId",PedidoController.readPedido);
router.get("/pedidos",PedidoController.readAllPedidos);
router.put("/pedido/:pedidoId",PedidoController.updatePedido);
//router.put("/upsert/:pedidoId",PedidoController.upsertPedido); não achei que faça sentido upsert em pedidos
router.delete("/pedido/:pedidoId",PedidoController.deletePedido);
router.delete("/pedidos",PedidoController.deleteAllPedidos);


export default router