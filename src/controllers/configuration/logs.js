import { handler, Router } from '../../utils/router'
import { logsConfigurationService } from '../../services/manage/configuration/logs'

export const router = new Router()

router.get('/all', async (req, res) => {
    const buffer = await logsConfigurationService.getLogs()
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Disposition', 'attachment; filename="logs.zip"')
    res.send(buffer)
})

