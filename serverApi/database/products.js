import format from "pg-format";

const insertString =
  "INSERT INTO product (img, name, description, price ) values %L";

const products = [
  [
    "https://www.thespruceeats.com/thmb/TqdGCew1WBQNSRibLwPEJFL-r30=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200473154-001-56a497ca3df78cf77283268d.jpg",
    "Kyiv",
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию',
    1.5,
  ],
  [
    "https://media3.s-nbcnews.com/j/newscms/2020_27/1586837/hotdogs-te-main-200702_1e1ea98797356fd7f729a2b294d7bb26.today-inline-large.jpg",
    "Dnepr",
    'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..',
    2.5,
  ],
  [
    "https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/131207233339/131214004840/p_O.jpg",
    "Lviv",
    "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, ",
    3.5,
  ],
  [
    "https://delimanouaru.azureedge.net/media/article/image/cache/580x436/a/-/a-33524_1.jpg",
    "Harkiv",
    "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    4.5,
  ],
];

export const addProductsInDB = format(insertString, products);
