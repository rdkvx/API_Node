import mongoose, { mongo } from 'mongoose'
import { authentication } from './constants.js'

mongoose.connect(authentication.uri, {
    authSource: "admin",
    user: authentication.user,
    pass: authentication.password
})

let db = mongoose.connection;

export let dbConnect = {
    db
}