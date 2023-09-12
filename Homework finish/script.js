const emmetInput = document.getElementById('emmetInput');
const htmlOutput = document.getElementById('htmlOutput');
const errorOutput = document.getElementById('errorOutput');


function emmetToHtml(emmet) {
  try {
  const tokens = emmet.split(/([>^])/);
  let html = '';
  const stack = [];
  let indent = 0;
  let isFirstTag = true; // Флаг, що вказує на те, що це перший тег
  let hasChildren = true; // Нова змінна для відстеження наявності дітей у поточного тегу

   // Визначення шаблонів тегів
  const tagMap = {
    a: '<a href="">',
    br: '<br/>',
    p: '<p>',
    frame: '<frame />',
    link: '<link rel="stylesheet" href="">',
    meta: '<meta>',
    style: '<style>',
    script: '<script>',
    img: '<img src="" alt="">',
    form: '<form action="">',
    label: '<label for="">',
    input: '<input type="text">',
    button: '<button>',
    'ol+': `<ol>\n${'  '.repeat(indent + 1)}<li></li>\n${'  '.repeat(indent)}`,
    'ul+': `<ul>\n${'  '.repeat(indent + 1)}<li></li>\n`,
    ul: '<ul>',
    li: '<li>',
    'ul>li': `<ul>\n${'  '.repeat(indent + 1)}<li></li>\n`,
    'table': `<table>`,
    'table+': `<table>\n${'  '.repeat(indent + 1)}<tr>\n${'  '.repeat(indent + 2)}<td></td>\n${'  '.repeat(indent + 1)}</tr>\n${'  '.repeat(indent)}`,
    'tr+': `<tr>\n${'  '.repeat(indent + 1)}<td></td>\n${'  '.repeat(indent)}`,
  };

  
  for (const token of tokens) {
    if (token === '>') {
      // Збільшення відступу та додавання символу нового рядка перед наступним тегом
      indent++;
      isFirstTag = true;
      html += '\n'; 
    } else if (token === '^') {
      // Обробка закриваючих тегів (^)
      while (stack.length > 0 && stack.length >= indent) {
        const closingTag = `</${stack.pop()}>`;
        if (!hasChildren) {
          html += `${'  '.repeat(stack.length)}${closingTag.trim()}\n`;
        } else {
          html += `${'  '.repeat(stack.length)}${closingTag}\n`;
        }
      }
      indent = Math.max(0, indent - 1);
      isFirstTag = true;
      hasChildren = true;
    } else if (token.startsWith('.')) {
      // Обробка класів
      const classes = token.substring(1).split('.').join(' ');
      const classAttribute = ` class="${classes}"`;
      if (isFirstTag) {
        const openTag = `<div${classAttribute}>`;
        html += `${'  '.repeat(indent)}${openTag}`;
        stack.push('div');
        isFirstTag = false;
      } else {
        const tagKey = stack.pop();
        const tagTemplate = `<${tagKey}${classAttribute}></${tagKey}>`;
        html += `${tagTemplate}`;
        stack.push(tagKey);
      }
    } else if (token.startsWith('#')) {
     // Обробка ідентифікаторів
        const idAndClass = token.substring(1).split('.');
        const id = idAndClass[0];
        const classes = idAndClass.slice(1).join(' ');
        const idAttribute = id ? ` id="${id}"` : '';
        const classAttribute = classes ? ` class="${classes}"` : '';
      if (isFirstTag) {
        const openTag = `<div${idAttribute}${classAttribute}>`;
        html += `${'  '.repeat(indent)}${openTag}`;
        stack.push('div');
        isFirstTag = false;
      } else if (stack.length > 0) {
        const tagKey = stack.pop();
        const tagTemplate = `<${tagKey}${idAttribute}${classAttribute}></${tagKey}>\n`;
        html += `${'  '.repeat(stack.length)}${tagTemplate}`;
        stack.push(tagKey);
      } else {
        const openTag = `<div${idAttribute}${classAttribute}></div>\n`;
        html += `${'  '.repeat(indent)}${openTag}`;
      }
    } else if (token.includes('*')) {
      // Обробка множини тегів
      const parts = token.split('*');
      const tag = parts[0];
      const count = parseInt(parts[1], 10) || 1;
      for (let i = 0; i < count; i++) {
        const openTag = `<${tag}></${tag}>`;
        html += `${'  '.repeat(indent)}${openTag}\n`;
        isFirstTag = false;
      }
    } else {
      // Обробка інших токенів, включаючи ідентифікатори
      const parts = token.split(/([.#])/);
      const tag = parts[0];
      const classes = [];
      let id = '';

      for (let i = 1; i < parts.length; i += 2) {
        if (parts[i] === '.') {
          classes.push(parts[i + 1]);
        } else if (parts[i] === '#') {
          id = parts[i + 1];
        }
      }


  // Перевірка на відсутність відповідного шаблону
  if (!tagMap[tag]) {
    throw new Error(`Невідомий тег: ${tag}`);
  }

  // Створення рядка для атрибута class
      const classAttribute = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';

    // Створення рядка для атрибута id
      const idAttribute = id ? ` id="${id}"` : '';
      if (isFirstTag) {
        if (tagMap[tag]) {
           // Якщо існує шаблон для тегу в мапі (tagMap)
          const tagTemplate = tagMap[tag];
          const openTag = `${tagTemplate.replace('>', `${idAttribute}${classAttribute}>`)}`;
          html += `${'  '.repeat(indent)}${openTag}`;
          stack.push(tag);
        } else {
          // Якщо немає шаблону для тегу в мапі (tagMap)
          const openTag = `<${tag}${idAttribute}${classAttribute}>`;
          html += `${'  '.repeat(indent)}${openTag}`;
          stack.push(tag);
          isFirstTag = false;
        }
      } else if (tagMap[tag]) {
        const tagTemplate = tagMap[tag];
        if (tag === 'a' || tag === 'p' || tag === 'div') {
          html = html.trim(); // Видаляємо зайві пробіли
          html += `${tagTemplate.replace('>', `${idAttribute}${classAttribute}>`)}`;
        } else {
          html += `${tagTemplate.replace('>', `${idAttribute}${classAttribute}>`)}`;
        }
        stack.push(tag);
      } else {
        const openTag = `<${tag}${idAttribute}${classAttribute}></${tag}>`;
        if (tag === 'a' || tag === 'p' || tag === 'div') {
          html = html.trim(); // Видаляємо зайві пробіли
          html += openTag;
        } else {
          html += `${'  '.repeat(indent)}${openTag}`;
        }
        isFirstTag = false; // Змінено флаг після вставки відкриваючого тегу
      }
    }
    hasChildren = false; // Змінено флаг після обробки поточного токену
  }

  // Закриваючі теги для залишених в стеці елементів
  while (stack.length > 0) {
    const closingTag = `</${stack.pop()}>`;
    if (!hasChildren) {
      html += `${'  '.repeat(stack.length)}${closingTag.trim()}\n`;
    } else {
      html += `${'  '.repeat(stack.length)}${closingTag}\n`;
    }
  }

  // Видалити зайві пробіли і символи нового рядка
  html = html.replace(/\n\s*$/g, '');
  html = html.replace(/\+/g, '');

  
  return html;
} catch (error) {
     // Якщо виникає помилка, вивести її у errorOutput
     errorOutput.textContent = `Помилка: ${error.message}`;
    }
  }
  

  // Слухач подій для введення Emmet-коду
emmetInput.addEventListener('input', (event) => {
  const emmetLines = event.target.value.split('\n'); // Розділити введення на рядки
  let htmlResult = '';

  // Очищення попередніх помилок при новому введенні
  errorOutput.textContent = '';

  for (let i = 0; i < emmetLines.length; i++) {
    const emmetLine = emmetLines[i].trim(); // Обрізати пробіли на початку і в кінці рядка

    if (emmetLine === '') {
      // Додавання пробілу, якщо рядок порожній
      htmlResult += ' \n';
    } else {
      try {
        // Виклик функції emmetToHtml для обробки кожного рядка
        const htmlLine = emmetToHtml(emmetLine); 
        if (htmlLine !== undefined) {
          htmlResult += htmlLine + '\n'; // Додати результат до загального результуючого HTML з новим рядком
        }
      } catch (error) {
        // Обробка помилок та виведення їх повідомлень
        errorOutput.textContent = `Помилка в рядку "${emmetLine}": ${error.message}`;
         break; // Зупинити обробку решти рядків, якщо виникає помилка
      }
    }
  }
  // Відображення результату в вікні виводу HTML
  htmlOutput.textContent = htmlResult.trim(); 
});


