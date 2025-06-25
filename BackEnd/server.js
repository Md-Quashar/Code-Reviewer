const app=require('./src/app')
require('dotenv').config()
const port=process.env.Port | 3000
try {
  app.listen(port, () => {
    console.log('Server running on port 3000');
  });
} catch (err) {
  console.error('Error starting server:', err);
}
