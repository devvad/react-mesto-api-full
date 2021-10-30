const Card = require('../models/card');
const BadReqError = require('../errors/bad-req-err');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbiden-err');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadReqError('Проверьте обязательные поля');
      }
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .orFail(() => {
      throw new Error('IncorrectId');
    })
    .then((card) => {
      if (card.owner._id.toString() === req.user._id) {
        Card.deleteOne(card).then(() => {
          res.status(200).send({ message: 'карточка удалена' });
        });
      } else {
        throw new ForbiddenError('У тебя нет прав на удаление этой карточки');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadReqError('Карточка по указанному id не найдена');
      } else if (err.message === 'IncorrectId') {
        next(new NotFoundError('Карточка по указанному id не найдена'));
      } else next(err);
    });
};
// Вы очень классный ревьюер! Спасибо)
const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .orFail(() => {
      throw new Error('IncorrectId');
    })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadReqError('Карточка по указанному id не найдена');
      } else if (err.message === 'IncorrectId') {
        throw new NotFoundError('Карточка по указанному id не найдена');
      }
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .orFail(() => {
      throw new Error('IncorrectId');
    })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadReqError('Карточка по указанному id не найдена');
      } else if (err.message === 'IncorrectId') {
        throw new NotFoundError('Карточка по указанному id не найдена');
      }
    })
    .catch(next);
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
