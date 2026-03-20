// вкладки
function openTab(tabId, btn) {
    document.querySelectorAll(".content")
        .forEach(el => el.classList.remove("active"));

    document.querySelectorAll(".tabs button")
        .forEach(b => b.classList.remove("active"));

    document.getElementById(tabId)
        .classList.add("active");

    btn.classList.add("active");
}

let count = 0;

function clickCounter() {
    count++;
    document.getElementById("counter").textContent = count;
}


const quotes = {
    action: [
        "Я вернусь.",
        "Прощай, детка.",
        "Почему такой серьезный?",
        "Мне нужна скорость.",
        "Давай, сделай мой день.",
        "Никогда не сдавайся.",
        "Я не в опасности. Я и есть опасность.",
        "У каждого действия есть последствия.",
        "Иногда нужно нарушать правила."
    ],
    drama: [
        "Жизнь как коробка шоколадных конфет.",
        "Ты со мной разговариваешь?",
        "Я вижу мертвых людей.",
        "Надежда — это хорошая вещь.",
        "Иногда правда слишком тяжела.",
        "Мы все хотим быть услышанными.",
        "Счастье можно найти даже в тёмные времена.",
        "Прошлое не изменить, но можно изменить будущее.",
        "Каждый делает свой выбор."
    ],
    comedy: [
        "Это провал, брат.",
        "Ну ты понял.",
        "Я не суеверный, но немного верю.",
        "В бесконечность и дальше.",
        "Спокойствие, только спокойствие.",
        "Это не баг, это фича.",
        "Я просто гений, но скромный.",
        "Главное — вовремя пошутить.",
        "Смех — лучшее лекарство."
    ],
    fantasy: [
        "Да пребудет с тобой сила.",
        "Ты не пройдешь.",
        "Зима близко.",
        "Даже самый маленький человек может изменить будущее.",
        "Страх убивает разум.",
        "Магия всегда имеет цену.",
        "Судьба не предопределена.",
        "Мир больше, чем кажется."
    ]

};

function newQuote() {
    const allQuotes = [
        ...quotes.action,
        ...quotes.drama,
        ...quotes.comedy,
        ...quotes.fantasy
    ];

    const random = Math.floor(Math.random() * allQuotes.length);
    showQuote(allQuotes[random]);
}

function getQuote(type) {
    const arr = quotes[type];
    const random = Math.floor(Math.random() * arr.length);
    showQuote(arr[random]);
}

function showQuote(text) {
    const quote = document.getElementById("quote");
    quote.style.opacity = 0;

    setTimeout(() => {
        quote.textContent = text;
        quote.style.opacity = 1;
    }, 200);
}

function searchQuotes() {
    const value = document.getElementById("search").value.toLowerCase();
    const results = document.getElementById("results");

    const allQuotes = [
        ...quotes.action,
        ...quotes.drama,
        ...quotes.comedy,
        ...quotes.fantasy
    ];

    results.innerHTML = "";

    const filtered = allQuotes.filter(q =>
        q.toLowerCase().includes(value)
    );

    filtered.forEach(q => {
        const div = document.createElement("div");
        div.textContent = q;
        div.style.padding = "10px";
        div.style.margin = "5px";
        div.style.background = "rgba(255,255,255,0.1)";
        div.style.borderRadius = "10px";

        div.onclick = () => showQuote(q);

        results.appendChild(div);
    });
}