const express = require('express');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8087;

// logando o método
router.use((req, res, next) => {
  console.log(`/${req.method}`);
  console.log(`from :: ${req.socket.remoteAddress}`);
  next();
});

router.get('/', (req, res) => {
  res.send({ ok: 'ok' });
});

// nested objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
