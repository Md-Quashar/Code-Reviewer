const app=require('./src/app')
require('dotenv').config()

try {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
} catch (err) {
  console.error('Error starting server:', err);
}
