import { Router } from '../utils/router'

export const router = new Router()

router.get('/', (req, res) => {
  res.end()
})

