import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'
import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/',PageController.home)
router.get('/pedidos',PageController.pedidos)
router.get('/historia',PageController.historia)
router.get('/cardapio',PageController.cardapio)
router.get('/pagamento',PageController.pagamento)
router.get('/search',SearchController.search)
router.get('/produtos',ApiController.getProducts)
export default router
