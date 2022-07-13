const router = require('express').Router();

const { Entry } = require('../db/models');

router.route('/')
  // Отображение списка всех записей
  .get(async (req, res) => {
    const entries = await Entry.findAll();
    res.end(JSON.stringify(entries));
  })

  // Принятие данных формы создания новой записи
  .post(async (req, res) => {
    const entry = await Entry.create(req.body.entry);
    try {
      await entry.save();

      res.redirect(`/${entry.id}`);
    } catch (err) {
      res.end(JSON.stringify({ errors: [err] }));
    }
  });

router.route('/:id')
  // Показ одной, конкретной записи
  .get(async (req, res) => {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    res.end(JSON.stringify(entry));
  })

  // Обновление PUT=UPDATE+CREATE / PATCH=UPDATE
  .patch(async (req, res) => {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    const { singer, songTitle } = req.body;
    entry.singer = singer;
    entry.songTitle = songTitle;
    entry.save();
    res.status(200).end();
  })

  // Удаление одной конкретной записи
  .delete(async (req, res) => {
  try {
    const result = await Entry.destroy({ where: { id: req.params.id } });
    res.status(200).end();
  } catch(error) {
    res.status(500).end();
  }
});

module.exports = router;
