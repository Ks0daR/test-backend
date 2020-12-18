import format from "pg-format";

const insertString =
  "INSERT INTO product (img, name, description, price ) values %L";

const products = [
  [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffb%2FHotdog_-_Evan_Swigart.jpg%2F1200px-Hotdog_-_Evan_Swigart.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHot_dog&tbnid=poqCDj6JigeRCM&vet=12ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygAegUIARC-AQ..i&docid=hITNL9GZPT6kDM&w=1200&h=797&q=hotdog&client=firefox-b-d&ved=2ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygAegUIARC-AQ",
    "Kyiv",
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию',
    1.5,
  ],
  [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FBKhwpT1PlR7_1cgmTBdgkVL7a1c%3D%2F1147x860%2Fsmart%2Ffilters%3Ano_upscale()%2F200473154-001-56a497ca3df78cf77283268d.jpg&imgrefurl=https%3A%2F%2Fwww.thespruceeats.com%2Fhomemade-frankfurters-hot-dogs-recipe-1808481&tbnid=zi_oe7mpSs3UMM&vet=12ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygDegUIARDEAQ..i&docid=xHPsjTPB3XXHSM&w=1147&h=860&q=hotdog&client=firefox-b-d&ved=2ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygDegUIARDEAQ",
    "Dnepr",
    'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..',
    2.5,
  ],
  [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpotatorolls.com%2Fwp-content%2Fuploads%2FBasic-Hot-Dogs2-600x500.jpg&imgrefurl=https%3A%2F%2Fpotatorolls.com%2Frecipes%2Fclassic-hot-dog%2F&tbnid=OPkPwTxlVQNfXM&vet=12ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygEegUIARDHAQ..i&docid=yfJvVesOQMIMaM&w=600&h=500&q=hotdog&client=firefox-b-d&ved=2ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygEegUIARDHAQ",
    "Lviv",
    "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, ",
    3.5,
  ],
  [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia3.s-nbcnews.com%2Fi%2Fnewscms%2F2020_27%2F1586837%2Fhotdogs-te-main-200702_1e1ea98797356fd7f729a2b294d7bb26.jpg&imgrefurl=https%3A%2F%2Fwww.today.com%2Frecipes%2Fsunny-anderson-s-easy-blt-hotdog-recipe-t185816&tbnid=Pu-266DgJQwM6M&vet=12ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygHegUIARDOAQ..i&docid=ByK6jZRidFpclM&w=2400&h=1200&q=hotdog&client=firefox-b-d&ved=2ahUKEwji3KKk1dftAhXGAncKHZr7CmgQMygHegUIARDOAQ",
    "Harkiv",
    "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
    4.5,
  ],
];

export const resultFormat = format(insertString, products);
