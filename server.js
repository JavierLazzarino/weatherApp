const app = require('./src/app');
const { PORT } = require('./src/config');

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
