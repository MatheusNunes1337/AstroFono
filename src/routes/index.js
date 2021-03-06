import Router from 'express'

import questionRoute from './questionRoute'
import authRoute from './authRoute'
import postRoute from './postRoute'
import schoolRoute from './schoolRoute'
import studentRoute from './studentRoute'
import bookRoute from './bookRoute'
import adminRoute from './adminRoute'
import recoverRoute from './recoverRoute'


const routes = Router()

routes.use('/auth', authRoute)
routes.use('/question', questionRoute)
routes.use('/student', studentRoute)
routes.use('/recover', recoverRoute)
routes.use('/admin', adminRoute)
routes.use('/book', bookRoute)
routes.use('/school', schoolRoute)
routes.use('/post', postRoute)


export default routes
