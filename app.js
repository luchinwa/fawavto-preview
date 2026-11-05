// ФавАвто — прототип сайта спецтехники. Данные из КП ООО «ФавАвто Трейд»; фото из архива клиента.
const PHONE = '8 800 250-15-98';
const CITY = 'Краснодар';

const CATS = {
  pump:  {name: 'Автобетононасосы', img: 'p124'},
  lift:  {name: 'Автовышки', img: 'p174'},
  manip: {name: 'Манипуляторы', img: 'p146'},
  tral:  {name: 'Тралы', img: 'p089'},
  loader: {name: 'Погрузчики MGP', img: 'mg946-1'},
};

// stock: true — в наличии в Краснодаре; иначе lead — ориентировочный срок поставки
const M = [
  {id: 'sqs125', cat: 'manip', stock: true, name: 'Манипулятор XCMG SQS125-4 на шасси ISUZU ELF',
   chips: ['5 т', 'стрела 11,2 м', 'шасси 2024'], price: '8 000 000 ₽',
   imgs: ['sqs125-1', 'sqs125-2', 'sqs125-3', 'sqs125-4'],
   keys: [['5 т', 'грузоподъёмность'], ['12,4 м', 'высота подъёма'], ['205 л.с.', 'Евро 6'], ['6,1 м', 'грузовой отсек']],
   specs: [
     ['Крановая установка XCMG SQS125-4', [['Грузоподъёмность', '5 т'], ['Стрела', 'телескопическая, 4 секции'], ['Длина стрелы', '3,94–11,2 м'], ['Макс. рабочий радиус', '11,2 м'], ['Макс. высота подъёма', '12,4 м'], ['Угол поворота', '360°'], ['Размах опор', '2,15–5,1 м']]],
     ['Шасси ISUZU ELF', [['Модель', 'QL1110TZCQZMA'], ['Год выпуска', 'сентябрь 2024'], ['Колёсная формула', '4×2'], ['Мощность', '151 кВт / 205 л.с.'], ['Топливо / экокласс', 'дизель, Евро 6'], ['Габариты', '9180×2550×3250 мм'], ['Полная масса', '11 995 кг'], ['Колёсная база', '5150 мм']]],
     ['Комплектация', ['Грузовой отсек 6,1×2,5×0,6 м', 'Алюминиевый борт', 'Топливный бак 90 л']],
   ]},
  {id: 'amur', cat: 'tral', stock: true, name: 'Трал AMUR LYR9400, 40 т',
   chips: ['40 т', '2024', 'пневмоподвеска', 'ЭПТС'], price: '5 000 000 ₽',
   imgs: ['amur-1', 'amur-2', 'amur-3', 'amur-4'],
   keys: [['40 т', 'грузоподъёмность'], ['4 оси', 'последняя подруливающая'], ['15,7 м', 'длина'], ['ЭПТС', 'готов к учёту']],
   specs: [
     ['Полуприцеп', [['Модель', 'AMUR LYR9400'], ['Год выпуска', '2024'], ['Грузоподъёмность', '40 000 кг'], ['Габариты', '15 696×2530×3874 мм'], ['Колёсная база', '7500+1810+1810+1814 мм'], ['Высота ССУ', '1150–1250 мм'], ['Подвеска', 'пневматическая'], ['Шины', '16 шт., 235/75R17.5 + запасное']]],
     ['Узлы и комплектация', ['Оси YUEKE, последняя ось со следящим поворотом', 'Тормозная система и пневматика WABCO, SAMPA', 'Опоры JOST', 'Алюминиевые сходни', 'Деревянный пол, 16 петель крепления', '2 противооткатных упора']],
   ]},
  {id: 'pump30', cat: 'pump', stock: true, name: 'Автобетононасос 30 м на шасси ISUZU',
   chips: ['30 м', '90 м³/ч', 'Евро 6'], price: '1 800 000 ¥',
   imgs: ['pump-isuzu30'],
   keys: [['29,5 м', 'подача по вертикали'], ['25,9 м', 'по горизонтали'], ['90 м³/ч', 'производительность'], ['540°', 'поворот стрелы']],
   specs: [
     ['Стрела и опоры', [['Высота по вертикали', '29,5 м'], ['Длина по горизонтали', '25,9 м'], ['Глубина досягаемости', '18,8 м'], ['Поворот платформы', '540°'], ['Выход опор', 'перед. 5840 / зад. 4050 мм']]],
     ['Насос', [['Производительность', 'до 90 м³/ч'], ['Давление бетона', '10 МПа'], ['Бетоновод', '125 мм'], ['Бункер', '0,65 м³'], ['Высота загрузки', '1450 мм'], ['Гидросистема', 'открытая, 31,5 МПа']]],
     ['Шасси ISUZU', [['Колёсная формула', '4×2'], ['Мощность', '279 кВт'], ['Экокласс', 'Евро 6'], ['Габариты', '10 020×2550×3700 мм'], ['Полная масса', '20 000 кг']]],
     ['Комплектующие', ['Электрика SIEMENS', 'Уплотнения цилиндров PARKER', 'Клапан опор YUATSUSEIKI']],
   ]},
  {id: 'mg946', cat: 'loader', stock: true, name: 'Фронтальный погрузчик MGP 946 pro',
   chips: ['3 т', 'ковш 1,8 м³', 'Weichai 92 кВт', 'ЭПСМ'], price: '4 000 000 ₽',
   imgs: ['mg946-1', 'mg946-2'],
   keys: [['3 т', 'грузоподъёмность'], ['1,8 м³', 'ковш'], ['92 кВт', 'Weichai, 6 цил.'], ['3,8 м', 'высота выгрузки']],
   specs: [
     ['Погрузчик', [['Номинальная грузоподъёмность', '3000 кг'], ['Объём ковша', '1,8 м³'], ['Ширина ковша', '2400 мм'], ['Высота выгрузки', '3800 мм'], ['Эксплуатационная масса', '9300 кг'], ['Габариты', '7200×2400×3300 мм'], ['Колёсная база', '3150 мм'], ['Шины', '17,5-25']]],
     ['Двигатель и трансмиссия', [['Двигатель', 'Weichai, дизель, 92 кВт'], ['Цилиндров', '6'], ['Гидротрансформатор', '315'], ['Управление', 'гидравлическое пилотное, два рычага']]],
     ['Комплектация', ['Быстросъём навесного', 'Кондиционер, отопитель', 'Тройной клапан', 'Подогрев двигателя 220 В', 'ЭПСМ']],
   ]},
  {id: 'mg928', cat: 'loader', stock: true, name: 'Фронтальный погрузчик MGP 928 pro',
   chips: ['1,5 т', 'ковш 1 м³', 'автомат', 'ЭПСМ'], price: '1 400 000 ₽',
   imgs: ['mg928-1', 'mg928-2'],
   keys: [['1,5 т', 'грузоподъёмность'], ['1 м³', 'ковш'], ['36 кВт', 'Yunnei 490'], ['АКПП', 'один рычаг']],
   specs: [
     ['Погрузчик', [['Номинальная нагрузка', '1500 кг'], ['Объём ковша', '1–1,1 м³'], ['Ширина ковша', '1800 мм'], ['Высота выгрузки', '3200 мм'], ['Макс. высота подъёма', '4010 мм'], ['Эксплуатационная масса', '4000 кг'], ['Габариты', '5540×1800×2740 мм'], ['Макс. скорость', '35 км/ч']]],
     ['Двигатель и трансмиссия', [['Двигатель', 'Yunnei 490, 4 цил.'], ['Мощность', '36 кВт'], ['Коробка', 'автомат'], ['Управление', 'один рычаг']]],
     ['Комплектация', ['Быстросъём, палетные вилы', 'Камера заднего вида', 'Кондиционер', 'Предпусковой подогреватель', 'ЭПСМ']],
   ]},
  {id: 'mg85pe', cat: 'loader', stock: true, name: 'Мини-погрузчик MGP MG85PE',
   chips: ['850 кг', 'ковш 0,5 м³', 'Xinchai 40 кВт', 'ЭПСМ'], price: '281 000 ¥',
   imgs: ['mg85pe-1', 'mg85pe-2', 'mg85pe-3', 'mg85pe-4', 'mg85pe-5'],
   keys: [['850 кг', 'рабочая нагрузка'], ['0,5 м³', 'ковш'], ['40 кВт', 'Xinchai 490'], ['4 м', 'рабочая высота']],
   note: 'Цена в юанях с НДС, оплата в рублях по курсу банка поставщика на день оплаты.',
   specs: [
     ['Погрузчик', [['Рабочая нагрузка', '850 кг'], ['Объём ковша', '0,5 м³'], ['Ширина ковша', '1880 мм'], ['Высота сброса', '2400 мм'], ['Общая рабочая высота', '4000 мм'], ['Масса', '3200 кг'], ['Длина с ковшом', '3490 мм'], ['Макс. скорость', '12 км/ч']]],
     ['Двигатель и гидравлика', [['Двигатель', 'Xinchai 490'], ['Мощность', '40 кВт'], ['Топливный бак', '60 л'], ['Поток гидравлики', '75 л/мин'], ['Управление', 'джойстики']]],
     ['Комплектация', ['Быстросъём, палетные вилы', 'Кондиционер, отопитель', 'ЭПСМ']],
   ]},

  {id: 'pump52', cat: 'pump', name: 'Автобетононасос SANY SYM5350THB 52 м на Mercedes-Benz',
   chips: ['52 м', '170 м³/ч', '6×4'], price: 'от 2 800 000 ¥', lead: 'до 30 дней',
   imgs: ['pump-52', 'p053'],
   keys: [['52 м', 'по вертикали'], ['48 м', 'по горизонтали'], ['170 м³/ч', 'производительность'], ['5', 'секций стрелы']],
   note: 'Два варианта комплектации: 2 800 000 ¥ и 3 048 000 ¥.',
   specs: [
     ['Стрела и опоры', [['Высота по вертикали', '52 м'], ['Длина по горизонтали', '48 м'], ['Глубина досягаемости', '33,6 м'], ['Мин. радиус', '12,7 м'], ['Секций', '5'], ['Поворот', '360°'], ['Выход опор', 'перед. 9470 / зад. 12 680 мм']]],
     ['Насос', [['Производительность', '170 / 120 м³/ч'], ['Давление', '8,3 / 12 МПа'], ['Цилиндр', '260 × 2200 мм'], ['Гидросистема', 'открытая, 32 МПа'], ['Масляный / водный бак', '680 / 620 л'], ['Бетоновод', '125 мм']]],
     ['Шасси Mercedes-Benz', [['Колёсная формула', '6×4'], ['Год выпуска', '2020'], ['Двигатель', 'OM470LA.6-56, 335 кВт'], ['Экокласс', 'Евро 6'], ['Габариты', '13 850×2500×4000 мм'], ['Полная масса', '40 850 кг']]],
   ]},
  {id: 'pump56', cat: 'pump', name: 'Автобетононасос SANY SYM5418THB 56 м на Mercedes-Benz',
   chips: ['56 м', '180 м³/ч', '8×4'], price: '2 942 000 ¥', lead: 'до 40 дней',
   imgs: ['pump-56', 'p164'],
   keys: [['56 м', 'по вертикали'], ['51 м', 'по горизонтали'], ['180 м³/ч', 'производительность'], ['6', 'секций стрелы']],
   specs: [
     ['Стрела и опоры', [['Высота по вертикали', '56 м'], ['Длина по горизонтали', '51 м'], ['Глубина досягаемости', '36,6 м'], ['Мин. радиус', '15,2 м'], ['Секций', '6'], ['Поворот', '360°'], ['Выход опор', 'перед. 9470 / зад. 12 680 мм']]],
     ['Насос', [['Производительность', '180 / 125 м³/ч'], ['Давление', '8,3 / 12 МПа'], ['Цилиндр', '260 × 2100 мм'], ['Гидросистема', 'открытая, 32 МПа'], ['Масляный / водный бак', '680 / 620 л'], ['Бетоновод', '125 мм']]],
     ['Шасси Mercedes-Benz', [['Колёсная формула', '8×4'], ['Год выпуска', '2021'], ['Двигатель', 'OM470LA.6-56, 335 кВт'], ['Экокласс', 'Евро 6'], ['Габариты', '13 850×2500×4000 мм'], ['Полная масса', '42 500 кг']]],
   ]},
  {id: 'pump62', cat: 'pump', name: 'Автобетононасос SANY SYM5463THBFB 62 м на Mercedes-Benz',
   chips: ['62 м', '180 м³/ч', '8×4'], price: '3 421 000 ¥', lead: 'до 30 дней',
   imgs: ['pump-62', 'p167'],
   keys: [['61,1 м', 'по вертикали'], ['55,9 м', 'по горизонтали'], ['180 м³/ч', 'производительность'], ['6', 'секций стрелы']],
   specs: [
     ['Стрела и опоры', [['Высота по вертикали', '61,1 м'], ['Длина по горизонтали', '55,9 м'], ['Глубина досягаемости', '42,7 м'], ['Мин. радиус', '13,6 м'], ['Секций', '6'], ['Поворот', '360°'], ['Выход опор', 'перед. 12 170 / зад. 13 200 мм']]],
     ['Насос', [['Производительность', '180 / 120 м³/ч'], ['Давление', '8,3 / 13 МПа'], ['Цилиндр', '260 × 1900 мм'], ['Гидросистема', 'открытая, 32 МПа'], ['Масляный / водный бак', '800 / 700 л'], ['Бетоновод', '125 мм']]],
     ['Шасси Mercedes-Benz 4146', [['Колёсная формула', '8×4'], ['Двигатель', 'OM470LA.6-56, 335 кВт'], ['Экокласс', 'Евро 6'], ['Габариты', '14 550×2550×4000 мм'], ['Полная масса', '46 000 кг']]],
   ]},
  {id: 'pumpx62', cat: 'pump', name: 'Автобетононасос XCMG 62 м на Mercedes-Benz Arocs',
   chips: ['62 м', '170 м³/ч', 'Bosch Rexroth'], price: '3 500 000 ¥', lead: 'до 30 дней',
   imgs: ['pump-xcmg62', 'p159'],
   keys: [['61,1 м', 'по вертикали'], ['55,9 м', 'по горизонтали'], ['170 м³/ч', 'производительность'], ['6', 'секций стрелы']],
   specs: [
     ['Стрела и опоры', [['Высота по вертикали', '61,1 м'], ['Длина по горизонтали', '55,9 м'], ['Глубина досягаемости', '42,5 м'], ['Секций', '6'], ['Поворот', '360°'], ['Пролёт опор', '12 125 мм']]],
     ['Насос', [['Производительность', '170 м³/ч'], ['Давление подачи', '10,2 МПа'], ['Заполнитель', 'до 40 мм'], ['Цилиндр', '260 × 2000 мм'], ['Бункер', '650 л'], ['Клапан', 'S-образный'], ['Гидронасосы', 'Bosch Rexroth (Германия)']]],
     ['Шасси Mercedes-Benz Arocs 4143', [['Колёсная формула', '8×4'], ['Год выпуска', '2021'], ['Двигатель', 'OM470LA.6-56, 335 кВт'], ['Экокласс', 'Евро 6'], ['Габариты', '14 850×2500×4000 мм'], ['Полная масса', '45 000 кг']]],
   ]},
  {id: 'sqs200', cat: 'manip', name: 'Манипулятор XCMG SQS200 на шасси ISUZU GIGA',
   chips: ['9 т', 'стрела 18,6 м', '6×4'], price: '1 256 000 ¥', lead: '40–60 дней',
   imgs: ['sqs200', 'p140', 'p146'],
   keys: [['9 т', 'грузоподъёмность'], ['20 м', 'высота подъёма'], ['300 л.с.', 'Евро 6'], ['8,5 м', 'грузовой отсек']],
   specs: [
     ['Крановая установка XCMG SQS200', [['Грузоподъёмность', '9 т'], ['Стрела', 'телескопическая'], ['Макс. длина стрелы', '18,6 м'], ['Макс. высота подъёма', '20 м'], ['Угол поворота', '360°'], ['Размах опор', '2,3–7,4 м']]],
     ['Шасси ISUZU GIGA', [['Модель', 'QL1252FTFZY'], ['Год выпуска', '2024'], ['Колёсная формула', '6×4'], ['Мощность', '221 кВт / 300 л.с.'], ['Экокласс', 'Евро 6'], ['Габариты', '11 585×2540×3040 мм'], ['Полная масса', '25 000 кг'], ['Шины', '295/80R22.5']]],
     ['Комплектация', ['Грузовой отсек 8,5 м', 'Алюминиевые сходни']],
   ]},
  {id: 'lift28', cat: 'lift', name: 'Автовышка 28 м на шасси ISUZU ELF',
   chips: ['28 м', 'люлька 195 кг', '2024'], price: '480 000 ¥', lead: 'по запросу',
   imgs: ['lift-28'],
   keys: [['28 м', 'рабочая высота'], ['195 кг', 'в люльке'], ['130 л.с.', 'дизель'], ['3', 'места в кабине']],
   specs: [
     ['Подъёмник', [['Макс. высота', '28 м'], ['Грузоподъёмность люльки', '195 кг'], ['Управление', 'пульт']]],
     ['Шасси ISUZU ELF', [['Модель', 'QL5073UGK6HA'], ['Год выпуска', '2024'], ['Двигатель', 'ISUZU 4KB1, 2499 см³'], ['Мощность', '96 кВт / 130 л.с.'], ['Габариты', '6450×2100×2920 мм'], ['Колёсная база', '3360 мм'], ['Шины', '7.00R16LT']]],
   ]},
  {id: 'lift30', cat: 'lift', name: 'Автовышка 30 м на шасси ISUZU',
   chips: ['30 м', 'люлька 200 кг', '2024'], price: '496 500 ¥', lead: '20 рабочих дней',
   imgs: ['lift-30'], example: true,
   keys: [['30 м', 'рабочая высота'], ['200 кг', 'в люльке'], ['130 л.с.', 'дизель'], ['7,2 т', 'полная масса']],
   specs: [
     ['Подъёмник', [['Макс. высота', '30 м'], ['Грузоподъёмность люльки', '200 кг'], ['Управление', 'пульт']]],
     ['Шасси ISUZU', [['Год выпуска', '2024'], ['Двигатель', 'ISUZU 4KB1, 2499 см³'], ['Мощность', '96 кВт / 130 л.с.'], ['Габариты', '5950×2290×3150 мм'], ['Полная масса', '7155 кг'], ['Колёсная база', '3360 мм']]],
   ]},
  {id: 'lift36', cat: 'lift', name: 'Автовышка 36 м на шасси ISUZU',
   chips: ['36 м', 'люлька 200 кг', '140 л.с.'], price: '596 509 ¥', lead: 'около 1 месяца',
   imgs: ['lift-36'], example: true,
   keys: [['36 м', 'рабочая высота'], ['200 кг', 'в люльке'], ['360°', 'поворот'], ['6', 'секций стрелы']],
   specs: [
     ['Подъёмник', [['Макс. высота', '36 м'], ['Стрела', '6 секций, синхронное выдвижение'], ['Грузоподъёмность люльки', '200 кг'], ['Корзина', '1800×700×1100 мм, складная'], ['Управление', 'дистанционное / электрическое / ручное']]],
     ['Шасси ISUZU', [['Модель', 'QL1080BUKAY'], ['Колёсная формула', '4×2'], ['Двигатель', '4KH1, 2999 см³'], ['Мощность', '103 кВт / 140 л.с.'], ['Габариты', '6950×2130×2315 мм'], ['Полная масса', '8280 кг']]],
   ]},
  {id: 'lift45', cat: 'lift', name: 'Автовышка 45 м на шасси ISUZU GIGA',
   chips: ['45 м', 'люлька 400 кг', '2024'], price: '915 200 ¥', lead: 'по запросу',
   imgs: ['lift-45'],
   keys: [['45 м', 'рабочая высота'], ['400 кг', 'в люльке'], ['205 л.с.', 'Евро 6'], ['7', 'секций стрелы']],
   specs: [
     ['Подъёмник', [['Макс. высота', '45 м'], ['Стрела', '7 секций, синхронная телескопическая'], ['Грузоподъёмность люльки', '400 кг'], ['Поворот люльки', '360°']]],
     ['Шасси ISUZU GIGA', [['Модель', 'QL1180JQFRCY'], ['Год выпуска', '2024'], ['Колёсная формула', '4×2'], ['Двигатель', 'ISUZU 4HK1, 5193 см³'], ['Мощность', '151 кВт / 205 л.с.'], ['Габариты', '9650×2500×3950 мм'], ['Полная масса', '18 000 кг'], ['Шины', '295/80R22']]],
   ]},
];

// что ещё привозим под заказ — по фото проданной техники
const ANY = [
  ['p124', 'Автобетононасосы'], ['p174', 'Автовышки'], ['p146', 'Манипуляторы'], ['p032', 'Автокраны'],
  ['p017', 'Автобетоносмесители'], ['p044', 'Эвакуаторы'], ['p083', 'Самосвалы'], ['p130', 'Седельные тягачи'],
  ['p058', 'Рефрижераторы и фургоны'], ['p089', 'Тралы и полуприцепы'], ['p022', 'Фронтальные погрузчики'], ['p181', 'Экскаваторы-погрузчики'],
];

const PF = [
  ['pump', 'Бетононасосы', [['p124', 'Автобетононасос SANY на Mercedes-Benz'], ['p053', 'Автобетононасос на шасси Scania'], ['p159', 'Автобетононасос на шасси Scania'], ['p164', 'Автобетононасос на ISUZU GIGA'], ['p167', 'Автобетононасос на ISUZU GIGA']]],
  ['manip', 'Манипуляторы и краны', [['p010', 'Манипулятор на ISUZU ELF'], ['p146', 'Манипулятор на ISUZU GIGA'], ['p140', 'Манипулятор на ISUZU GIGA'], ['p117', 'Эвакуатор-манипулятор на ISUZU'], ['p028', 'Автокран на ISUZU'], ['p032', 'Автокран на ISUZU']]],
  ['truck', 'Грузовики и тягачи', [['p017', 'Автобетоносмеситель на ISUZU GIGA'], ['p152', 'Самозагружающийся бетоносмеситель'], ['p044', 'Эвакуатор на ISUZU ELF'], ['p083', 'Самосвал на ISUZU'], ['p058', 'Рефрижератор на ISUZU ELF'], ['p082', 'Рефрижератор на ISUZU GIGA'], ['p113', 'Изотермический фургон'], ['p130', 'Седельные тягачи'], ['p135', 'Седельный тягач']]],
  ['tral', 'Тралы и полуприцепы', [['p089', 'Трал AMUR'], ['p093', 'Трал'], ['p153', 'Шторный полуприцеп']]],
  ['other', 'Вышки и погрузчики', [['p174', 'Автовышка на ISUZU'], ['p022', 'Фронтальный погрузчик'], ['p181', 'Экскаватор-погрузчик'], ['p177', 'Вилочный погрузчик']]],
];

const WEEK = ['amur', 'sqs125', 'mg946', 'pumpx62'];

const STEPS = [['Заявка', 'Тип техники, задачи, бюджет и сроки'], ['Подбор и договор', 'Модель, комплектация, цена и срок поставки'], ['Поставка', 'Выкуп на заводе, доставка, таможенное оформление'], ['Передача', 'ЭПТС и передача техники в Краснодаре']];

// курс ЦБ: запасное значение на 04.11.2026, при загрузке обновляется с cbr-xml-daily.ru
let RATE = {v: 12.18, d: '04.11.2026'};
const isCny = m => m.price.endsWith('¥');
const num = m => +m.price.replace(/\D/g, '');
const fmtRub = r => r >= 1e6 ? (r / 1e6).toFixed(1).replace('.', ',').replace(',0', '') + ' млн ₽' : Math.round(r / 1e3) + ' тыс. ₽';
const rub = m => isCny(m) ? `<span data-rub="${num(m)}">≈ ${fmtRub(num(m) * RATE.v)}</span>` : '';
const rateTxt = () => `<span data-rate>${RATE.v.toFixed(2).replace('.', ',')}</span>`;

// подборки для каталога (SEO-страницы)
const TAGS = {
  'mercedes':  {n: 'Бетононасосы на Mercedes-Benz', f: m => /Mercedes/.test(m.name)},
  'isuzu':     {n: 'Техника на шасси ISUZU', f: m => /ISUZU/.test(m.name)},
  'pump-50':   {n: 'Бетононасосы 52–62 м', f: m => m.cat === 'pump' && /\b[56]\d м/.test(m.name)},
  'manip-5':   {n: 'Манипуляторы 5–9 т', f: m => m.cat === 'manip'},
  'loader-cn': {n: 'Китайские погрузчики', f: m => m.cat === 'loader'},
  'rub':       {n: 'Цена в рублях', f: m => !isCny(m)},
};

// вкладка «Описание» по типу техники
const DESC = {
  pump: 'Автобетононасос для подачи бетона на высоту и в труднодоступные места: стройка, монолит, мосты. Стрела из нескольких секций, поворот 360°, выносные опоры. Поставляем новые машины SANY и XCMG на шасси Mercedes-Benz и ISUZU.',
  lift: 'Автогидроподъёмник (АГП) для работ на высоте: монтаж, обслуживание освещения и фасадов, коммунальные работы. Телескопическая стрела, люлька с поворотом, управление из люльки и с пульта.',
  manip: 'Бортовой автомобиль с крано-манипуляторной установкой XCMG: погрузка и перевозка стройматериалов, оборудования, контейнеров одной машиной.',
  tral: 'Низкорамный полуприцеп для перевозки спецтехники и негабаритных грузов. Пневмоподвеска, алюминиевые сходни, точки крепления груза.',
  loader: 'Погрузчики собственной марки MGP: работа с сыпучими материалами, погрузка, планировка, складские работы. Быстросъём навесного оборудования, кабина с кондиционером.',
};

const $ = s => document.querySelector(s);
const img = (n, alt = '', cls = '') => `<img src="img/${n}.jpg" alt="${alt}" loading="lazy"${cls ? ` class="${cls}"` : ''}>`;
const byCat = c => M.filter(m => m.cat === c);
const plural = (n, a, b, c) => n + ' ' + (n % 10 === 1 && n % 100 !== 11 ? a : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? b : c);

function card(m){
  return `<article class="card">
    <a class="thumb" href="#/m/${m.id}">${img(m.imgs[0], m.name)}<span class="badge ${m.stock ? 'in' : 'ord'}">${m.stock ? 'В наличии' : 'Под заказ'}</span>${WEEK.includes(m.id) ? '<span class="badge wk">Предложение недели</span>' : ''}</a>
    <div class="card-b">
      <span class="cat">${CATS[m.cat].name}</span>
      <h3><a href="#/m/${m.id}">${m.name}</a></h3>
      <div class="chips">${m.chips.map(c => `<span>${c}</span>`).join('')}</div>
      <div class="card-f">
        <div><div class="price">${m.price}<small>${isCny(m) ? rub(m) + ' · ' : ''}${m.stock ? 'с НДС · ' + CITY : 'с НДС · срок ' + m.lead}</small></div></div>
        <button class="btn btn-dark" data-request="${m.id}" data-mode="${m.stock ? 'buy' : 'lead'}">${m.stock ? 'Заказать' : 'Узнать сроки'}</button>
      </div>
    </div>
  </article>`;
}

function phero(crumbs, title, text){
  return `<div class="hero phero"><div class="wrap hero-in">
    <div class="crumbs"><a href="#/">Главная</a> / ${crumbs}</div><h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div></div>`;
}

function leadbox(title = 'Подберём технику под вашу задачу', what = ''){
  return `<div class="wrap"><div class="leadbox">
    <div><h2>${title}</h2><p>Оставьте заявку — перезвоним в течение рабочего дня.</p>
      <ul><li>Техника в наличии в Краснодаре — осмотр на площадке</li><li>Под заказ — любая спецтехника с заводов Китая</li><li>Цена в договоре, НДС, ЭПТС</li></ul></div>
    ${form(what, true)}
  </div></div>`;
}

function form(what = '', inline = false){
  const opts = ['Подобрать технику', ...M.map(m => m.name), ...ANY.map(a => a[1] + ' — под заказ')];
  return `<form class="form" data-form>
    <div class="row"><input name="name" placeholder="Имя" required><input name="phone" type="tel" placeholder="Телефон" required></div>
    <select name="what">${opts.map(o => `<option${o === what ? ' selected' : ''}>${o}</option>`).join('')}</select>
    <textarea name="msg" placeholder="Задача, бюджет, сроки"></textarea>
    <button class="btn btn-acc">Отправить заявку</button>
    <small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
  </form>`;
}

const steps = () => `<div class="steps">${STEPS.map(([b, s]) => `<div class="step"><b>${b}</b><span>${s}</span></div>`).join('')}</div>`;

const conds = () => `<div class="conds">
  <div class="cond"><h3>Техника в наличии</h3><p>Стоит на площадке в Краснодаре. Осмотр, проверка и передача с документами (ЭПТС или ЭПСМ) за 1–3 дня. Цена с НДС.</p></div>
  <div class="cond"><h3>Под заказ</h3><p>Цена в юанях с НДС, оплата в рублях по курсу банка поставщика на день оплаты. Этапы оплаты и срок — в договоре.</p></div>
  <div class="cond"><h3>Документы</h3><p>Договор поставки, таможенная декларация, ЭПТС. Техника готова к постановке на учёт.</p></div>
</div>`;

function home(){
  const stock = M.filter(m => m.stock);
  const order = ['pumpx62', 'pump56', 'sqs200', 'lift45'].map(id => M.find(m => m.id === id));
  const week = WEEK.map(id => M.find(m => m.id === id));
  return `<div class="hero" style="background-image:url(img/hero.jpg)"><div class="wrap hero-in">
      <span class="tag">ООО «ФавАвто Трейд»</span>
      <h1>Спецтехника из Китая — <em>в наличии</em> в Краснодаре и под заказ</h1>
      <p>Автобетононасосы, автовышки, манипуляторы, тралы и погрузчики MGP. Привозим технику напрямую с заводов — с НДС, ЭПТС и гарантией поставки по договору.</p>
      <div class="btns"><a class="btn btn-acc" href="#/catalog">Смотреть каталог</a><button class="btn btn-ghost" data-request="">Оставить заявку</button></div>
      <div class="facts"><div><b>${plural(stock.length, 'машина', 'машины', 'машин')}</b><span>в наличии в Краснодаре</span></div><div><b>до 62 м</b><span>бетононасосы SANY и XCMG</span></div><div><b>30–60 дней</b><span>поставка под заказ</span></div><div><b>НДС · ЭПТС</b><span>полный пакет документов</span></div></div>
  </div></div>
  <div class="wrap">
    <section><div class="sec-head"><div><h2>Предложения недели</h2><p>Выбор менеджера: машины, которые стоит посмотреть в первую очередь</p></div><a class="more" href="#/catalog">Весь каталог</a></div>
      <div class="grid g4">${week.map(card).join('')}</div></section>
    <section><div class="sec-head"><div><h2>В наличии в Краснодаре</h2><p>Можно осмотреть и забрать сразу</p></div><a class="more" href="#/catalog/stock">Вся техника в наличии</a></div>
      <div class="grid">${stock.map(card).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Каталог</h2><p>Модели с ценами и характеристиками</p></div><a class="more" href="#/catalog">Весь каталог</a></div>
      <div class="cats">${Object.entries(CATS).map(([k, c]) => `<a class="cat-t" href="#/catalog/${k}">${img(c.img, c.name)}<div><b>${c.name}</b><span>${plural(byCat(k).length, 'модель', 'модели', 'моделей')}</span></div></a>`).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Под заказ</h2><p>Цены в юанях с НДС, оплата в рублях по курсу банка на день оплаты</p></div><a class="more" href="#/catalog/order">Все модели под заказ</a></div>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">${order.map(card).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Привезём любую спецтехнику</h2><p>Нет нужной модели в каталоге — подберём на заводе под вашу задачу</p></div><a class="more" href="#/order">Как заказать</a></div>
      <div class="cats small">${ANY.map(([i, n]) => `<a class="cat-t" href="#/order" data-request="${n} — под заказ">${img(i, n)}<div><b>${n}</b></div></a>`).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Портфолио</h2><p>Техника, которую мы уже привезли и продали</p></div><a class="more" href="#/portfolio">Всё портфолио</a></div>
      <div class="strip">${[['p124', 'Автобетононасос SANY'], ['p146', 'Манипулятор ISUZU GIGA'], ['p017', 'Бетоносмеситель'], ['p089', 'Трал AMUR'], ['p130', 'Седельные тягачи']].map(([i, n]) => `<a href="#/portfolio">${img(i, n)}<span>${n}</span></a>`).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Как проходит поставка под заказ</h2></div></div>${steps()}</section>
    <section><div class="sec-head"><div><h2>Условия</h2></div></div>${conds()}</section>
  </div>
  ${leadbox()}`;
}

function catalog(f = 'all'){
  const t = TAGS[f];
  const list = t ? M.filter(t.f) : f === 'all' ? M : f === 'stock' ? M.filter(m => m.stock) : f === 'order' ? M.filter(m => !m.stock) : byCat(f);
  const title = t ? t.n : CATS[f] ? CATS[f].name : f === 'stock' ? 'В наличии в Краснодаре' : f === 'order' ? 'Под заказ' : 'Каталог спецтехники';
  seo(`${title} — купить в Краснодаре, цены`, `${title}: ${plural(list.length, 'модель', 'модели', 'моделей')} с ценами и характеристиками. В наличии в Краснодаре и под заказ из Китая.`);
  const tab = (k, n, c) => `<a href="#/catalog${k === 'all' ? '' : '/' + k}" class="${f === k ? 'on' : ''}">${n}<small>${c}</small></a>`;
  return phero(`<a href="#/catalog">Каталог</a>${f !== 'all' ? ' / ' + title : ''}`, title, 'Цены с НДС, в рублях или юанях; оплата в рублях по курсу банка поставщика на день оплаты.') +
  `<div class="wrap">
    <div class="filters">${tab('all', 'Все', M.length)}${tab('stock', 'В наличии', M.filter(m => m.stock).length)}${tab('order', 'Под заказ', M.filter(m => !m.stock).length)}<span class="sep"></span>${Object.entries(CATS).map(([k, c]) => tab(k, c.name, byCat(k).length)).join('')}</div>
    <div class="tags"><span>Популярное:</span>${Object.entries(TAGS).map(([k, x]) => `<a href="#/catalog/${k}" class="${f === k ? 'on' : ''}">${x.n}</a>`).join('')}</div>
    <div class="grid">${list.map(card).join('')}</div>
    <section><div class="sec-head"><div><h2>Нет нужной модели?</h2><p>Привезём под заказ любую спецтехнику — подберём завод, комплектацию и срок</p></div><a class="more" href="#/order">Заказать подбор</a></div></section>
  </div>
  ${leadbox('Подберём модель под задачу')}`;
}

function machine(id){
  const m = M.find(x => x.id === id);
  if (!m) return home();
  const c = CATS[m.cat];
  seo(`${m.name} — купить в Краснодаре, цена ${m.price}`, `${m.name}: ${m.chips.join(', ')}. ${m.stock ? 'В наличии в Краснодаре' : 'Под заказ, срок ' + m.lead}. Цена ${m.price} с НДС.`);
  const pay = isCny(m) ? `<p>Цена указана в юанях с НДС. Оплата в рублях по курсу банка поставщика на день оплаты; ориентир по курсу ЦБ на <span data-rdate>${RATE.d}</span> — ${rub(m)} (${rateTxt()} ₽ за юань).</p><p>Этапы оплаты фиксируем в договоре поставки.</p>` : '<p>Цена в рублях с НДС. Безналичная оплата по договору.</p>';
  const ship = m.stock ? `<p>Техника стоит на площадке в Краснодаре. Осмотр и проверка — по предварительной записи, передача с ${m.cat === 'loader' ? 'ЭПСМ' : 'ЭПТС'} за 1–3 дня.</p><p>Доставку до вашего объекта рассчитаем по запросу.</p>` : `<p>Выкупаем технику на заводе, организуем доставку и таможенное оформление. Ориентировочный срок — ${m.lead}, точный срок фиксируем в договоре.</p><p>Передача техники в Краснодаре с ЭПТС.</p>`;
  const specs = `<div class="specs">${m.specs.map(([h, rows]) => `<div class="spec"><h3>${h}</h3>${typeof rows[0] === 'string' ? `<ul>${rows.map(r => `<li>${r}</li>`).join('')}</ul>` : `<dl>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`}</div>`).join('')}</div>`;
  const tabs = [['Характеристики', specs], ['Описание', `<div class="tabtxt"><p>${DESC[m.cat]}</p>${m.note ? `<p>${m.note}</p>` : ''}</div>`], ['Доставка', `<div class="tabtxt">${ship}</div>`], ['Оплата', `<div class="tabtxt">${pay}</div>`]];
  return phero(`<a href="#/catalog">Каталог</a> / <a href="#/catalog/${m.cat}">${c.name}</a>`, m.name, '') +
  `<div class="wrap">
    <div class="mach">
      <div>
        <div class="gal-main">${img(m.imgs[0], m.name, 'gm')}</div>
        ${m.imgs.length > 1 ? `<div class="gal-th">${m.imgs.map((i, k) => `<button class="${k ? '' : 'on'}" data-gal="${i}">${img(i, '')}</button>`).join('')}</div>` : ''}
        ${m.example ? '<p class="muted" style="font-size:14px">Фото для примера — аналогичная техника из поставок.</p>' : ''}
      </div>
      <div class="mach-side">
        <span class="status ${m.stock ? 'in' : 'ord'}">${m.stock ? 'В наличии · ' + CITY : 'Под заказ · срок ' + m.lead}</span>
        <div class="keys">${m.keys.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join('')}</div>
        <div class="buy">
          <div class="price">${m.price}<small>с НДС${isCny(m) ? ` · ${rub(m)} по курсу ЦБ ${rateTxt()}` : ''}</small></div>
          <div class="pnote">Цена зависит от комплектации${isCny(m) ? ' и курса юаня' : ''}</div>
          <p>${m.stock ? (m.price.endsWith('¥') ? 'Оплата в рублях по курсу банка поставщика на день оплаты. ' : 'Цена в рублях. ') + 'Осмотр на площадке в Краснодаре по записи.' : 'Оплата в рублях по курсу банка поставщика на день оплаты. Срок и этапы оплаты фиксируем в договоре.'}</p>
          ${m.stock ? `<button class="btn btn-acc" data-request="${m.id}" data-mode="buy">Заказать</button><button class="btn btn-line" data-request="${m.id}" data-mode="visit">Записаться на осмотр</button>` : `<button class="btn btn-acc" data-request="${m.id}" data-mode="lead">Узнать сроки поставки</button>`}
          <a class="btn btn-line" href="tel:88002501598">${PHONE}</a>
        </div>
        ${m.note ? `<div class="note" style="margin-top:14px">${m.note}</div>` : ''}
      </div>
    </div>
    <div class="tabs">${tabs.map(([n], i) => `<button class="${i ? '' : 'on'}" data-tab="${i}">${n}</button>`).join('')}</div>
    ${tabs.map(([, h], i) => `<div class="tabp" data-panel="${i}"${i ? ' hidden' : ''}>${h}</div>`).join('')}
    <section><div class="sec-head"><div><h2>Ещё в разделе «${c.name}»</h2></div><a class="more" href="#/catalog/${m.cat}">Все</a></div>
      <div class="grid">${byCat(m.cat).filter(x => x !== m).concat(M.filter(x => x.cat !== m.cat)).slice(0, 3).map(card).join('')}</div></section>
  </div>
  ${leadbox('Вопрос по этой технике?', m.name)}`;
}

function order(){
  return phero('Под заказ', 'Спецтехника под заказ', 'Привозим новую технику напрямую с заводов Китая: подбираем модель, проверяем на заводе, доставляем и оформляем документы.') +
  `<div class="wrap">
    <section style="padding-top:44px"><div class="sec-head"><div><h2>Что привозим</h2><p>Нажмите на тип техники, чтобы оставить заявку</p></div></div>
      <div class="cats small">${ANY.map(([i, n]) => `<a class="cat-t" href="#/order" data-request="${n} — под заказ">${img(i, n)}<div><b>${n}</b></div></a>`).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Готовые предложения</h2><p>Модели с ценой и сроком поставки</p></div><a class="more" href="#/catalog/order">Все модели</a></div>
      <div class="grid">${M.filter(m => !m.stock).slice(0, 6).map(card).join('')}</div></section>
    <section><div class="sec-head"><div><h2>Этапы поставки</h2></div></div>${steps()}</section>
    <section><div class="sec-head"><div><h2>Условия</h2></div></div>${conds()}</section>
  </div>
  ${leadbox('Заявка на поставку под заказ')}`;
}

function portfolio(f = 'all'){
  const groups = f === 'all' ? PF : PF.filter(g => g[0] === f);
  const items = groups.flatMap(g => g[2]);
  return phero('Портфолио', 'Портфолио поставок', 'Техника, которую мы привезли из Китая и передали клиентам. Фото с площадок и заводов.') +
  `<div class="wrap">
    <div class="filters"><a href="#/portfolio" class="${f === 'all' ? 'on' : ''}">Все<small>${PF.flatMap(g => g[2]).length}</small></a>${PF.map(([k, n, l]) => `<a href="#/portfolio/${k}" class="${f === k ? 'on' : ''}">${n}<small>${l.length}</small></a>`).join('')}</div>
    <div class="pf">${items.map(([i, n]) => `<figure data-zoom="${i}">${img(i, n)}<figcaption>${n}</figcaption></figure>`).join('')}</div>
  </div>
  ${leadbox('Нужна такая же техника?')}`;
}

function contacts(){
  return phero('Контакты', 'Контакты', '') +
  `<div class="wrap"><div class="contacts">
    <div class="cbox"><h3>Отдел продаж</h3><p class="big"><a href="tel:88002501598">${PHONE}</a></p><p class="muted">Пн–Пт, 9:00–18:00 · звонок по России бесплатный</p>
      <p style="margin-top:18px"><button class="btn btn-acc" data-request="">Оставить заявку</button></p></div>
    <div class="cbox"><h3>Площадка в Краснодаре</h3><p>Техника в наличии, осмотр по предварительной записи.</p><p class="muted">Адрес площадки уточняется.</p>
      <p style="margin-top:18px">ООО «ФавАвто Трейд»</p></div>
  </div></div>
  ${leadbox()}`;
}

function seo(title, desc){
  document.title = title + ' | ФавАвто';
  document.querySelector('meta[name=description]').content = desc;
}

function route(){
  seo('Спецтехника из Китая в Краснодаре — в наличии и под заказ', 'Автобетононасосы, автовышки, манипуляторы, тралы и погрузчики MGP в наличии в Краснодаре и под заказ из Китая. Цены с НДС, ЭПТС.');
  const [, page = '', arg] = location.hash.split('/');
  const pages = {'': home, catalog: () => catalog(arg || 'all'), m: () => machine(arg), order, portfolio: () => portfolio(arg || 'all'), contacts};
  $('#app').innerHTML = (pages[page] || home)();
  const nav = page === 'catalog' && arg === 'stock' ? 'stock' : page === 'm' ? 'catalog' : page;
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));
  $('#nav').classList.remove('open');
  $('#modal').hidden = true;
  window.scrollTo(0, 0);
}

const MODES = {buy: 'Заказать технику', visit: 'Запись на осмотр', lead: 'Узнать сроки поставки', call: 'Заказать звонок'};
function openModal(what, mode){
  const m = M.find(x => x.id === what);
  const name = m ? m.name : what;
  $('#modal').classList.remove('lightbox');
  $('.modal-box').innerHTML = `<button class="modal-x" data-close aria-label="Закрыть">×</button>
    <h3 id="mtitle">${MODES[mode] || 'Заявка на технику'}</h3>
    <p class="muted">${mode === 'call' ? 'Оставьте телефон — перезвоним в течение рабочего дня.' : name || 'Перезвоним в течение рабочего дня, подберём технику и посчитаем цену.'}</p>${mode === 'call' ? `<form class="form" data-form><input name="name" placeholder="Имя"><input name="phone" type="tel" placeholder="Телефон" required><button class="btn btn-acc">Перезвоните мне</button><small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small></form>` : form(name)}`;
  $('#modal').hidden = false;
}

document.addEventListener('click', e => {
  const r = e.target.closest('[data-request]');
  if (r){ e.preventDefault(); openModal(r.dataset.request, r.dataset.mode); return; }
  const tb = e.target.closest('[data-tab]');
  if (tb){ document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('on', b === tb)); document.querySelectorAll('[data-panel]').forEach(p => p.hidden = p.dataset.panel !== tb.dataset.tab); return; }
  const g = e.target.closest('[data-gal]');
  if (g){ $('.gm').src = `img/${g.dataset.gal}.jpg`; document.querySelectorAll('[data-gal]').forEach(b => b.classList.toggle('on', b === g)); return; }
  const z = e.target.closest('[data-zoom]');
  if (z){ $('#modal').classList.add('lightbox'); $('.modal-box').innerHTML = `<button class="modal-x" data-close style="color:#fff">×</button>${img(z.dataset.zoom, '')}`; $('#modal').hidden = false; return; }
  if (e.target.matches('[data-close]') || e.target.id === 'modal'){
    $('#modal').hidden = true;
    return;
  }
  if (e.target.closest('#burger')) $('#nav').classList.toggle('open');
});
document.addEventListener('submit', e => {
  if (!e.target.matches('[data-form]')) return;
  e.preventDefault();
  e.target.innerHTML = '<div class="ok">Спасибо! Заявка принята — перезвоним в течение рабочего дня.<br><small style="color:inherit;font-weight:400">Прототип: отправка заявок будет настроена после выбора канала.</small></div>';
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; });
// превью: переключатель вариантов логотипа (logos.js), выбор запоминается; ?logo=N в адресе
function setLogo(i){
  document.querySelectorAll('[data-logo]').forEach(el => el.innerHTML = siteLogo(V[i], el.dataset.logo === '1'));
  $('#fav').href = favicon(V[i]);
  document.querySelectorAll('[data-lg]').forEach(b => b.classList.toggle('on', +b.dataset.lg === i));
  try { localStorage.setItem('fw-logo', i); } catch (e) {}
}
$('#lsw-b').innerHTML = V.map((v, i) => `<button data-lg="${i}" title="${v.t}">${i + 1}</button>`).join('');
document.addEventListener('click', e => { const b = e.target.closest('[data-lg]'); if (b) setLogo(+b.dataset.lg); });
let lg = +(new URLSearchParams(location.search).get('logo') || 0) - 1;
if (!(lg >= 0 && lg < V.length)) { try { lg = +localStorage.getItem('fw-logo') || 0; } catch (e) { lg = 0; } }
setLogo(lg >= 0 && lg < V.length ? lg : 0);
window.addEventListener('hashchange', route);
route();
fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(r => r.json()).then(j => {
  const c = j.Valute.CNY;
  RATE = {v: c.Value / c.Nominal, d: new Date(j.Date).toLocaleDateString('ru-RU')};
  // обновляем суммы на странице без перерисовки
  document.querySelectorAll('[data-rub]').forEach(el => el.textContent = '≈ ' + fmtRub(el.dataset.rub * RATE.v));
  document.querySelectorAll('[data-rate], #rate').forEach(el => el.textContent = RATE.v.toFixed(2).replace('.', ','));
  document.querySelectorAll('[data-rdate]').forEach(el => el.textContent = RATE.d);
}).catch(() => {});
