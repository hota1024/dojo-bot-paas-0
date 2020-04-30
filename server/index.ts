import dotenv from 'dotenv'
import { startNextApp } from './next'
import { startProbot } from './probot'
import { makeAsync } from './helper/makeAsync'
dotenv.config()

makeAsync(startNextApp)()
makeAsync(startProbot)()
