import mongoose from 'mongoose'
require('dotenv').config()

// Connect via mongoose
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    writeConcern: {
      j: true,
    },
  })
  .then(() => console.log('**DB CONNECTED**'))
  .catch(err => console.log('DB CONNECTION ERR => ', err))
