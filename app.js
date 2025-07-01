// Multi-language psychology practice website functionality

// Translation data
const translations = {
    pl: {
        'nav.name': 'mgr Katarzyna Kryńska',
        'nav.title': 'Psycholog',
        'nav.about': 'O mnie',
        'nav.services': 'Usługi',
        'nav.approach': 'Podejście',
        'nav.contact': 'Kontakt',

        'hero.title': 'Profesjonalna pomoc psychologiczna',
        'hero.subtitle': 'Terapia skoncentrowana na rozwiązaniach',
        'hero.description': 'Wspieram dorosłych, dzieci i młodzież w odkrywaniu wewnętrznej siły i budowaniu zdrowego, satysfakcjonującego życia.',
        'hero.contact': 'Umów konsultację',
        'hero.learn': 'Dowiedz się więcej',

        'about.title': 'O mnie',
        'about.subtitle': 'Poznaj moje doświadczenie i podejście do terapii',
        'about.education.title': 'Wykształcenie',
        'about.education.description': 'Absolwentka Uniwersytetu Humanistycznospołecznego SWPS w Sopocie. Specjalizacja w terapii skoncentrowanej na rozwiązaniach.',
        'about.experience.title': 'Doświadczenie',
        'about.experience.description': 'Ponad 2 lata doświadczenia w pracy z dorosłymi, dziećmi, młodzieżą oraz rodzicami. Prowadzę konsultacje indywidualne oraz warsztaty psychoedukacyjne.',
        'about.languages.title': 'Języki',
        'about.languages.description': 'Konsultacje prowadzę w języku polskim, włoskim oraz angielskim, co pozwala mi wspierać klientów z różnych kultur.',
        'about.stats.price': 'Koszt sesji',
        'about.stats.languages': 'Języki',
        'about.stats.experience': 'Lata doświadczenia',

        'services.title': 'Usługi',
        'services.subtitle': 'Kompleksowa pomoc psychologiczna dostosowana do Twoich potrzeb',
        'services.adults.title': 'Dorośli',
        'services.adults.item1': 'Trudności emocjonalne (depresja, obniżony nastrój)',
        'services.adults.item2': 'Stany lękowe i ataki paniki',
        'services.adults.item3': 'Stres i wypalenie zawodowe',
        'services.adults.item4': 'Problemy w relacjach',
        'services.adults.item5': 'Kryzysy życiowe i zmiany',
        'services.adults.item6': 'Rozwój osobisty',
        'services.children.title': 'Dzieci i młodzież',
        'services.children.item1': 'Trudności emocjonalne',
        'services.children.item2': 'Zaburzenia zachowania',
        'services.children.item3': 'Budowanie pewności siebie',
        'services.children.item4': 'Problemy szkolne',
        'services.children.item5': 'Relacje z rówieśnikami',
        'services.children.item6': 'Wsparcie dla rodziców',
        'services.format.title': 'Formy terapii',
        'services.format.item1': 'Konsultacje indywidualne',
        'services.format.item2': 'Terapia online',
        'services.format.item3': 'Konsultacje stacjonarne',
        'services.format.item4': 'Warsztaty psychoedukacyjne',
        'services.format.item5': 'Wsparcie rodziców',
        'services.format.item6': 'Psychoedukacja',

        'approach.title': 'Moje podejście',
        'approach.subtitle': 'Terapia skoncentrowana na rozwiązaniach',
        'approach.description': 'Specjalizuję się w Terapii Skoncentrowanej na Rozwiązaniach, która wspiera klientów w odkrywaniu ich wewnętrznej siły i sprawczości. Wierzę, że kluczem do zdrowego i satysfakcjonującego życia jest zrozumienie siebie oraz swoich możliwości.',
        'approach.principle1.title': 'Orientacja na rozwiązania',
        'approach.principle1.description': 'Koncentrujemy się na tym, co działa i jak można wykorzystać Twoje zasoby do osiągnięcia celów.',
        'approach.principle2.title': 'Współpraca',
        'approach.principle2.description': 'Jesteś ekspertem od swojego życia. Razem odkrywamy najlepsze ścieżki do pozytywnych zmian.',
        'approach.principle3.title': 'Szacunek i zrozumienie',
        'approach.principle3.description': 'Każdy klient jest unikalny. Terapia jest dostosowana do Twoich indywidualnych potrzeb i celów.',

        'contact.title': 'Kontakt',
        'contact.subtitle': 'Skontaktuj się ze mną, aby umówić konsultację',
        'contact.locations.title': 'Lokalizacje',
        'contact.price.title': 'Cennik',
        'contact.price.consultation': 'Konsultacja indywidualna: 200 PLN',
        'contact.price.online': 'Konsultacja online: 200 PLN',
        'contact.languages.title': 'Języki konsultacji',
        'contact.form.name': 'Imię i nazwisko',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Telefon (opcjonalnie)',
        'contact.form.language': 'Preferowany język konsultacji',
        'contact.form.lang.pl': 'Polski',
        'contact.form.lang.it': 'Włoski',
        'contact.form.lang.en': 'Angielski',
        'contact.form.message': 'Wiadomość',
        'contact.form.submit': 'Wyślij wiadomość',

        'footer.description': 'Psycholog • Terapia skoncentrowana na rozwiązaniach',
        'footer.location': 'Gdańsk • Straszyn • Pomorskie',
        'footer.copyright': '© 2025 mgr Katarzyna Kryńska. Wszystkie prawa zastrzeżone.'
    },

    it: {
        'nav.name': 'dott.ssa Katarzyna Kryńska',
        'nav.title': 'Psicologa',
        'nav.about': 'Chi sono',
        'nav.services': 'Servizi',
        'nav.approach': 'Approccio',
        'nav.contact': 'Contatto',

        'hero.title': 'Aiuto psicologico professionale',
        'hero.subtitle': 'Terapia focalizzata sulle soluzioni',
        'hero.description': 'Supporto adulti, bambini e adolescenti nello scoprire la loro forza interiore e costruire una vita sana e soddisfacente.',
        'hero.contact': 'Prenota consulenza',
        'hero.learn': 'Scopri di più',

        'about.title': 'Chi sono',
        'about.subtitle': 'Conosci la mia esperienza e il mio approccio alla terapia',
        'about.education.title': 'Formazione',
        'about.education.description': 'Laureata presso l\'Università SWPS di Sopot. Specializzazione in terapia focalizzata sulle soluzioni.',
        'about.experience.title': 'Esperienza',
        'about.experience.description': 'Oltre 2 anni di esperienza nel lavoro con adulti, bambini, adolescenti e genitori. Conduco consultazioni individuali e workshop psicoeducativi.',
        'about.languages.title': 'Lingue',
        'about.languages.description': 'Conduco consultazioni in polacco, italiano e inglese, permettendomi di supportare clienti di diverse culture.',
        'about.stats.price': 'Costo sessione',
        'about.stats.languages': 'Lingue',
        'about.stats.experience': 'Anni esperienza',

        'services.title': 'Servizi',
        'services.subtitle': 'Aiuto psicologico completo adattato alle tue esigenze',
        'services.adults.title': 'Adulti',
        'services.adults.item1': 'Difficoltà emotive (depressione, umore basso)',
        'services.adults.item2': 'Stati d\'ansia e attacchi di panico',
        'services.adults.item3': 'Stress e burnout professionale',
        'services.adults.item4': 'Problemi relazionali',
        'services.adults.item5': 'Crisi di vita e cambiamenti',
        'services.adults.item6': 'Sviluppo personale',
        'services.children.title': 'Bambini e adolescenti',
        'services.children.item1': 'Difficoltà emotive',
        'services.children.item2': 'Disturbi comportamentali',
        'services.children.item3': 'Costruzione fiducia in sé',
        'services.children.item4': 'Problemi scolastici',
        'services.children.item5': 'Relazioni con i pari',
        'services.children.item6': 'Supporto per genitori',
        'services.format.title': 'Forme di terapia',
        'services.format.item1': 'Consultazioni individuali',
        'services.format.item2': 'Terapia online',
        'services.format.item3': 'Consultazioni in presenza',
        'services.format.item4': 'Workshop psicoeducativi',
        'services.format.item5': 'Supporto genitori',
        'services.format.item6': 'Psicoeducazione',

        'approach.title': 'Il mio approccio',
        'approach.subtitle': 'Terapia focalizzata sulle soluzioni',
        'approach.description': 'Mi specializzo nella Terapia Focalizzata sulle Soluzioni, che supporta i clienti nel scoprire la loro forza interiore e capacità di azione. Credo che la chiave per una vita sana e soddisfacente sia la comprensione di sé e delle proprie possibilità.',
        'approach.principle1.title': 'Orientamento alle soluzioni',
        'approach.principle1.description': 'Ci concentriamo su ciò che funziona e su come utilizzare le tue risorse per raggiungere gli obiettivi.',
        'approach.principle2.title': 'Collaborazione',
        'approach.principle2.description': 'Sei l\'esperto della tua vita. Insieme scopriamo i migliori percorsi verso cambiamenti positivi.',
        'approach.principle3.title': 'Rispetto e comprensione',
        'approach.principle3.description': 'Ogni cliente è unico. La terapia è adattata alle tue esigenze e obiettivi individuali.',

        'contact.title': 'Contatto',
        'contact.subtitle': 'Contattami per prenotare una consulenza',
        'contact.locations.title': 'Ubicazioni',
        'contact.price.title': 'Tariffe',
        'contact.price.consultation': 'Consulenza individuale: 200 PLN',
        'contact.price.online': 'Consulenza online: 200 PLN',
        'contact.languages.title': 'Lingue di consulenza',
        'contact.form.name': 'Nome e cognome',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Telefono (opzionale)',
        'contact.form.language': 'Lingua preferita per la consulenza',
        'contact.form.lang.pl': 'Polacco',
        'contact.form.lang.it': 'Italiano',
        'contact.form.lang.en': 'Inglese',
        'contact.form.message': 'Messaggio',
        'contact.form.submit': 'Invia messaggio',

        'footer.description': 'Psicologa • Terapia focalizzata sulle soluzioni',
        'footer.location': 'Danzica • Straszyn • Pomerania',
        'footer.copyright': '© 2025 dott.ssa Katarzyna Kryńska. Tutti i diritti riservati.'
    },

    en: {
        'nav.name': 'Katarzyna Kryńska, M.A.',
        'nav.title': 'Psychologist',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.approach': 'Approach',
        'nav.contact': 'Contact',

        'hero.title': 'Professional psychological help',
        'hero.subtitle': 'Solution-focused therapy',
        'hero.description': 'I support adults, children and adolescents in discovering their inner strength and building a healthy, fulfilling life.',
        'hero.contact': 'Book consultation',
        'hero.learn': 'Learn more',

        'about.title': 'About me',
        'about.subtitle': 'Get to know my experience and approach to therapy',
        'about.education.title': 'Education',
        'about.education.description': 'Graduate of SWPS University in Sopot. Specialization in solution-focused therapy.',
        'about.experience.title': 'Experience',
        'about.experience.description': 'Over 2 years of experience working with adults, children, adolescents and parents. I conduct individual consultations and psychoeducational workshops.',
        'about.languages.title': 'Languages',
        'about.languages.description': 'I conduct consultations in Polish, Italian and English, allowing me to support clients from different cultures.',
        'about.stats.price': 'Session cost',
        'about.stats.languages': 'Languages',
        'about.stats.experience': 'Years experience',

        'services.title': 'Services',
        'services.subtitle': 'Comprehensive psychological help tailored to your needs',
        'services.adults.title': 'Adults',
        'services.adults.item1': 'Emotional difficulties (depression, low mood)',
        'services.adults.item2': 'Anxiety states and panic attacks',
        'services.adults.item3': 'Stress and professional burnout',
        'services.adults.item4': 'Relationship problems',
        'services.adults.item5': 'Life crises and changes',
        'services.adults.item6': 'Personal development',
        'services.children.title': 'Children and adolescents',
        'services.children.item1': 'Emotional difficulties',
        'services.children.item2': 'Behavioral disorders',
        'services.children.item3': 'Building self-confidence',
        'services.children.item4': 'School problems',
        'services.children.item5': 'Peer relationships',
        'services.children.item6': 'Support for parents',
        'services.format.title': 'Therapy formats',
        'services.format.item1': 'Individual consultations',
        'services.format.item2': 'Online therapy',
        'services.format.item3': 'In-person consultations',
        'services.format.item4': 'Psychoeducational workshops',
        'services.format.item5': 'Parental support',
        'services.format.item6': 'Psychoeducation',

        'approach.title': 'My approach',
        'approach.subtitle': 'Solution-focused therapy',
        'approach.description': 'I specialize in Solution-Focused Therapy, which supports clients in discovering their inner strength and agency. I believe that the key to a healthy and fulfilling life is understanding yourself and your possibilities.',
        'approach.principle1.title': 'Solution orientation',
        'approach.principle1.description': 'We focus on what works and how you can use your resources to achieve your goals.',
        'approach.principle2.title': 'Collaboration',
        'approach.principle2.description': 'You are the expert on your life. Together we discover the best paths to positive changes.',
        'approach.principle3.title': 'Respect and understanding',
        'approach.principle3.description': 'Each client is unique. Therapy is tailored to your individual needs and goals.',

        'contact.title': 'Contact',
        'contact.subtitle': 'Contact me to book a consultation',
        'contact.locations.title': 'Locations',
        'contact.price.title': 'Pricing',
        'contact.price.consultation': 'Individual consultation: 200 PLN',
        'contact.price.online': 'Online consultation: 200 PLN',
        'contact.languages.title': 'Consultation languages',
        'contact.form.name': 'Full name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone (optional)',
        'contact.form.language': 'Preferred consultation language',
        'contact.form.lang.pl': 'Polish',
        'contact.form.lang.it': 'Italian',
        'contact.form.lang.en': 'English',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send message',

        'footer.description': 'Psychologist • Solution-focused therapy',
        'footer.location': 'Gdansk • Straszyn • Pomeranian',
        'footer.copyright': '© 2025 Katarzyna Kryńska, M.A. All rights reserved.'
    }
};

// Language detection and management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'pl';
        this.initializeLanguage();
        this.bindEventListeners();
    }

    async initializeLanguage() {
        // Try to detect country/language
        const detectedLang = await this.detectLanguage();
        this.setLanguage(detectedLang);
    }

    async detectLanguage() {
        try {
            // Try browser language first
            const browserLang = navigator.language.toLowerCase();

            if (browserLang.startsWith('pl')) return 'pl';
            if (browserLang.startsWith('it')) return 'it';

            // Try IP geolocation as fallback
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                if (data.country_code === 'PL') return 'pl';
                if (data.country_code === 'IT') return 'it';

                return 'en'; // Default for other countries
            } catch (error) {
                console.log('Geolocation failed, using browser language');
                return browserLang.startsWith('pl') ? 'pl' :
                    browserLang.startsWith('it') ? 'it' : 'en';
            }
        } catch (error) {
            console.log('Language detection failed, defaulting to Polish');
            return 'pl';
        }
    }

    setLanguage(lang) {
        if (!translations[lang]) lang = 'pl';

        this.currentLanguage = lang;
        this.updateLanguageButtons();
        this.translatePage();
        this.updateHTMLLang();
    }

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
        });
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.dataset.key;
            const translation = translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateHTMLLang() {
        document.documentElement.lang = this.currentLanguage;

        // Update meta tags
        const title = document.querySelector('title');
        const description = document.querySelector('meta[name="description"]');

        if (this.currentLanguage === 'it') {
            title.textContent = 'dott.ssa Katarzyna Kryńska - Psicologa Danzica | Terapia Focalizzata sulle Soluzioni';
            description.content = 'Psicologa dott.ssa Katarzyna Kryńska - Danzica, Straszyn. Terapia focalizzata sulle soluzioni per adulti, bambini e adolescenti. Consultazioni online e in presenza.';
        } else if (this.currentLanguage === 'en') {
            title.textContent = 'Katarzyna Kryńska, M.A. - Psychologist Gdansk | Solution-Focused Therapy';
            description.content = 'Psychologist Katarzyna Kryńska, M.A. - Gdansk, Straszyn. Solution-focused therapy for adults, children and adolescents. Online and in-person consultations.';
        }
    }

    bindEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.dataset.lang);
            });
        });
    }
}

// Smooth scrolling navigation
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.bindEventListeners();
        this.handleScroll();
    }

    bindEventListeners() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Handle scroll for navbar styling
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}

// Contact form with email obfuscation
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messageDiv = document.getElementById('formMessage');
        this.bindEventListeners();
    }

    bindEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            language: formData.get('language'),
            message: formData.get('message')
        };

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            this.showMessage('error', this.getTranslation('form.error.required'));
            return;
        }

        if (!this.isValidEmail(data.email)) {
            this.showMessage('error', this.getTranslation('form.error.email'));
            return;
        }

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = this.getTranslation('form.sending');
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual email service)
            await this.submitForm(data);
            this.showMessage('success', this.getTranslation('form.success'));
            this.form.reset();
        } catch (error) {
            this.showMessage('error', this.getTranslation('form.error.general'));
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async submitForm(data) {
        // Email obfuscation - construct email dynamically
        const emailParts = ['kryns', 'katarzyna', 'gmail', 'com'];
        const email = `${emailParts[0]}${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`;

        // Create mailto link with form data
        const subject = encodeURIComponent(`Nowy formularz www - ${data.language.toUpperCase()}`);
        const body = encodeURIComponent(`
Imię i nazwisko: ${data.name}
Email: ${data.email}
Telefon: ${data.phone || 'Nie podano'}
Preferowany język: ${data.language}

Wiadomość:
${data.message}
        `);

        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

        // For demonstration, we'll use mailto (in production, use a proper email service)
        return new Promise((resolve) => {
            window.location.href = mailtoLink;
            setTimeout(resolve, 1000);
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(type, message) {
        this.messageDiv.className = `form-message ${type}`;
        this.messageDiv.textContent = message;
        this.messageDiv.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.messageDiv.style.display = 'none';
        }, 5000);
    }

    getTranslation(key) {
        const messages = {
            'form.error.required': {
                pl: 'Proszę wypełnić wszystkie wymagane pola.',
                it: 'Si prega di compilare tutti i campi obbligatori.',
                en: 'Please fill in all required fields.'
            },
            'form.error.email': {
                pl: 'Proszę podać prawidłowy adres email.',
                it: 'Si prega di inserire un indirizzo email valido.',
                en: 'Please enter a valid email address.'
            },
            'form.error.general': {
                pl: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.',
                it: 'Si è verificato un errore durante l\'invio del messaggio. Riprova.',
                en: 'An error occurred while sending the message. Please try again.'
            },
            'form.success': {
                pl: 'Wiadomość została wysłana pomyślnie. Skontaktuję się z Tobą wkrótce.',
                it: 'Messaggio inviato con successo. Ti contatterò presto.',
                en: 'Message sent successfully. I will contact you soon.'
            },
            'form.sending': {
                pl: 'Wysyłanie...',
                it: 'Invio in corso...',
                en: 'Sending...'
            }
        };

        const currentLang = document.querySelector('.lang-btn.active')?.dataset?.lang || 'pl';
        return messages[key]?.[currentLang] || messages[key]?.['pl'] || 'Error';
    }
}

// Page visibility and scroll effects
class PageEffects {
    constructor() {
        this.observeElements();
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe sections for fade-in effects
        document.querySelectorAll('.section, .hero').forEach(section => {
            observer.observe(section);
        });
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
    new Navigation();
    new ContactForm();
    new PageEffects();

    // Add some fade-in animations CSS if not already present
    if (!document.querySelector('#fadeInStyles')) {
        const style = document.createElement('style');
        style.id = 'fadeInStyles';
        style.textContent = `
            .section, .hero {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .section.visible, .hero.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Trigger initial visibility for hero section
    setTimeout(() => {
        document.querySelector('.hero')?.classList.add('visible');
    }, 100);
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button if desired
if (window.innerHeight > 600) {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.onclick = scrollToTop;
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
        }
    });
}