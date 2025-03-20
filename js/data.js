import { getRandomArrayElement, getRandomInteger } from './util.js';

const DESCRIPTIONS = [
  'Прекрасный момент! 🌟',
  'Незабываемые впечатления! ✨',
  'Потрясающий вид! 🌄',
  'Идеальный кадр! 📸',
  'Фото на память ',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const COUNT_OF_PHOTO = 25;
const MIN_COUNT_OF_MESSAGE_TEXT = 1;
const MAX_COUNT_OF_MESSAGE_TEXT = 2;
const MIN_COUNT_OF_AVATAR = 1;
const MAX_COUNT_OF_AVATAR = 6;
const MIN_COUNT_OF_LIKES = 15;
const MAX_COUNT_OF_LIKES = 200;
const MIN_COUNT_OF_COMMENT = 0;
const MAX_COUNT_OF_COMMENT = 30;

// Генератор ID для комментариев
const createCommentIdGenerator = () => {
  let commentIdCounter = 0;
  return () => ++commentIdCounter;
};
const generateCommentId = createCommentIdGenerator();


// Функция для генерации сообщения
const getMessageText = () => {
  const count = getRandomInteger (MIN_COUNT_OF_MESSAGE_TEXT, MAX_COUNT_OF_MESSAGE_TEXT);
  return Array.from({length: count}, () => getRandomArrayElement(MESSAGE)).join(' ');
};

// Функция создания комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger (MIN_COUNT_OF_AVATAR, MAX_COUNT_OF_AVATAR)}.svg`,
  message: getMessageText(),
  name: getRandomArrayElement(NAMES)
});

// Функция создания фото
const createPhoto = (index) => ({

  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),

  // Добавляем генерацию лайков (15-200)
  likes: getRandomInteger(MIN_COUNT_OF_LIKES, MAX_COUNT_OF_LIKES),

  // Генерируем от О до ЗО комментариев
  comments: Array.from({length: getRandomInteger(MIN_COUNT_OF_COMMENT, MAX_COUNT_OF_COMMENT)},() => createComment())

});


// Создаём альбом
const createAlbumOfPhoto = () => Array.from({length: COUNT_OF_PHOTO},(_, index) => createPhoto(index));

export { createAlbumOfPhoto };
//console.log(createAlbumOfPhoto);

