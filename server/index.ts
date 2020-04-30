import dotenv from 'dotenv'
import { startNextApp } from './next'
import { startProbot } from './probot'
dotenv.config()

startProbot()
startNextApp()
