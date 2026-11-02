// Варианты логотипа ФавАвто: общие для сайта (index.html) и страницы logo.html
const Y = '#F2A900', K = '#161a1f';
// каждый вариант: знак (40×40) и слово; f — цвет текста, s — цвет подписи
const V = [
  {t: 'Стрела', d: 'Знак — стрела манипулятора или бетононасоса, поднятая вверх: техника и рост.',
   mark: (bg, fg) => `<rect width="40" height="40" rx="9" fill="${bg}"/><path d="M8 31 17 15l9 6 7-12" fill="none" stroke="${fg}" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/><rect x="6" y="29" width="15" height="5" rx="1.5" fill="${fg}"/>`,
   word: (f, s, a = Y, ai = K) => `<text x="52" y="22" font-family="Onest" font-weight="800" font-size="21" letter-spacing="1.3" fill="${f}">ФАВАВТО</text><text x="52" y="37" font-family="Onest" font-size="11" fill="${s}">спецтехника из Китая</text>`, w: 200},
  {t: 'Монограмма ФА', d: 'Буквы Ф и А в шестиграннике-гайке. Строгий «промышленный» знак, хорошо читается мелко — на технике, наклейках, в фавиконе.',
   mark: (bg, fg) => `<path d="M20 1.5 36.5 11v18L20 38.5 3.5 29V11z" fill="${bg}"/><text x="20" y="27" text-anchor="middle" font-family="Unbounded" font-weight="800" font-size="15" fill="${fg}" letter-spacing="-1">ФА</text>`,
   word: (f, s, a = Y, ai = K) => `<text x="52" y="22" font-family="Unbounded" font-weight="800" font-size="18" fill="${f}">ФавАвто</text><text x="52" y="37" font-family="Onest" font-size="11" letter-spacing="1.6" fill="${s}">СПЕЦТЕХНИКА</text>`, w: 200},
  {t: 'Сигнальная полоса', d: 'Знак из диагональных полос, как на ограждениях и бортах спецтехники. Курсивное слово — движение и поставка.',
   mark: (bg, fg) => `<path d="M10 4h28L30 36H2z" fill="${bg}"/><path d="M14 4h7L12 36H5zM27 4h7l-9 32h-7z" fill="${fg}"/>`,
   word: (f, s, a = Y, ai = K) => `<text x="50" y="25" font-family="Onest" font-weight="900" font-style="italic" font-size="24" fill="${f}" transform="skewX(-8)" transform-origin="50 25">ФАВАВТО</text><rect x="51" y="31" width="128" height="3" fill="${a}"/>`, w: 190},
  {t: 'Из Китая в Россию', d: 'Буква Ф в форме стрелки вправо: поставка напрямую с завода. Подходит, если делать акцент на «под заказ».',
   mark: (bg, fg) => `<rect width="40" height="40" rx="20" fill="${bg}"/><path d="M18 7h4v26h-4z" fill="${fg}"/><path d="M20 13h-5a7 7 0 0 0 0 14h5M20 13h5l6 7-6 7h-5" fill="none" stroke="${fg}" stroke-width="4" stroke-linejoin="round"/>`,
   word: (f, s, a = Y, ai = K) => `<text x="52" y="21" font-family="Onest" font-weight="800" font-size="20" fill="${f}">ФавАвто</text><text x="52" y="36" font-family="Onest" font-weight="500" font-size="11" fill="${s}">техника с заводов Китая</text>`, w: 200},
  {t: 'Шрифтовой', d: 'Без отдельного знака: широкий шрифт и жёлтая плашка на «АВТО». Самый простой вариант, хорошо смотрится на бортах и баннерах.',
   mark: (bg, fg) => `<rect width="40" height="40" rx="6" fill="${bg}"/><text x="20" y="28" text-anchor="middle" font-family="Unbounded" font-weight="800" font-size="20" fill="${fg}">Ф</text>`,
   word: (f, s, a = Y, ai = K) => `<text x="0" y="27" font-family="Unbounded" font-weight="800" font-size="22" fill="${f}">ФАВ</text><rect x="62" y="5" width="96" height="30" rx="4" fill="${a}"/><text x="68" y="27" font-family="Unbounded" font-weight="800" font-size="22" fill="${ai}">АВТО</text>`, w: 162, noMark: true},
];
const logo = (v, f, s, bg, fg, a, ai) => `<svg viewBox="0 0 ${v.w} 40" width="${v.w * 1.2}" height="48">${v.noMark ? '' : v.mark(bg, fg)}${v.word(f, s, a, ai)}</svg>`;

// логотип в шапке/подвале сайта: dark — на тёмном фоне
const siteLogo = (v, dark) => logo(v, dark ? '#fff' : K, dark ? '#a9b1bb' : '#66707c', Y, K);
const favicon = v => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">${v.mark(Y, K)}</svg>`);
