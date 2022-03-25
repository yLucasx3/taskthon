import mongoose from 'mongoose'
import envs from '../enviroment'

mongoose.connect(envs.dbUrl, {});

export default mongoose.connection