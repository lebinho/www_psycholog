// ===== mgr Katarzyna Kryńska — Psycholog =====

// Listy oferty (renderowane z JS, jak w wersji React)
const adults = [
    "Kryzysy życiowe i emocjonalne",
    "Trudności w relacjach z bliskimi",
    "Radzenie sobie ze stresem i wypaleniem",
    "Stany lękowe i obniżony nastrój",
    "Niskie poczucie własnej wartości"
];
const youth = [
    "Trudności emocjonalne okresu dojrzewania",
    "Problemy w relacjach rówieśniczych",
    "Budowanie pewności siebie",
    "Trudności szkolne i stres",
    "Wsparcie dla rodziców (psychoedukacja)"
];

const CHECK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>';

function fillList(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(t => `<li>${CHECK}<span>${t}</span></li>`).join('');
}
fillList('adults', adults);
fillList('youth', youth);

// Tło paska nawigacji po przewinięciu
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Przełącznik trybu jasny / ciemny
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
