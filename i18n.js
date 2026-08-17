const translations = {
    ar: {
        // Common
        "site.name": "أحمد",
        "nav.home": "الرئيسية",
        "nav.about": "من أنا",
        "nav.portfolio": "مشاريعي",
        "nav.services": "الخدمات",
        "nav.contact": "تواصل معي",
        "nav.lang.ar": "عربي",
        "nav.lang.en": "EN",

        // Index page
        "hero.label": "مطور ويب",
        "hero.title.1": "مرحباً، أنا",
        "hero.title.2": "أحمد",
        "hero.desc": "أنشئ تطبيقات ويب احترافية وسريعة تحقق أهداف عملك. أجمع بين الإبداع والتقنية لتقديم حلول رقمية متميزة.",
        "hero.btn.works": "اعرض أعمالي",
        "hero.btn.contact": "تواصل معي",

        // Stats
        "stat.years": "سنوات الخبرة",
        "stat.projects": "مشروع مكتمل",
        "stat.clients": "عميل راضي",
        "stat.quality": "جودة الخدمة",

        // Bento cards
        "bento.dev.label": "طوير ويب",
        "bento.dev.title": "مطور ويب متخصص في بناء تطبيقات احترافية وفعالة",
        "bento.lang.label": "اللغات",
        "bento.lang.title": "أتقن العربية والإنجليزية بشكل احترافي",
        "bento.tech.label": "التقنيات",
        "bento.tech.title": "التقنيات الرئيسية",
        "bento.about.label": "نبذة عني",
        "bento.about.title": "أطمح دائماً لتقديم أفضل الحلول الرقمية",
        "bento.cta.title": "هل تريد طرح سؤال؟",
        "bento.cta.btn": "تواصل معي",

        // Services
        "services.title": "الخدمات الرئيسية",
        "services.subtitle": "أقدم مجموعة شاملة من خدمات تطوير الويب بأعلى جودة",
        "services.webdesign.title": "تصميم الويب",
        "services.webdesign.desc": "تصاميم حديثة وجذابة تعكس هويتك",
        "services.webdesign.f1": "تصاميم عصرية وجميلة",
        "services.webdesign.f2": "متوافق مع جميع الأجهزة",
        "services.webdesign.f3": "سهل الاستخدام",
        "services.webdesign.f4": "محسن للمحركات البحثية",
        "services.webdev.title": "تطوير الويب",
        "services.webdev.desc": "مواقع ديناميكية بتقنيات حديثة",
        "services.webdev.f1": "كود نظيف وقابل للصيانة",
        "services.webdev.f2": "أداء عالي",
        "services.webdev.f3": "أمان قوي",
        "services.webdev.f4": "قابل للتطوير والتوسع",
        "services.performance.title": "تحسين الأداء",
        "services.performance.desc": "مواقع سريعة وموثوقة",
        "services.performance.f1": "تحسين سرعة التحميل",
        "services.performance.f2": "تحسين SEO",
        "services.performance.f3": "تقليل استهلاك البيانات",
        "services.performance.f4": "تحليل ومراقبة الأداء",
        "services.support.title": "الصيانة والدعم",
        "services.support.desc": "دعم فني مستمر وصيانة دورية",
        "services.support.f1": "تحديثات دورية",
        "services.support.f2": "إصلاح الأخطاء",
        "services.support.f3": "دعم فني 24/7",
        "services.support.f4": "نسخ احتياطية",

        // Portfolio
        "portfolio.title": "مشاريعي",
        "portfolio.filter.all": "الكل",
        "portfolio.filter.ecommerce": "متاجر",
        "portfolio.filter.app": "تطبيقات",
        "portfolio.filter.website": "مواقع",
        "portfolio.project1.title": "متجر إلكتروني",
        "portfolio.project1.desc": "منصة تجارة إلكترونية كاملة مع نظام دفع وإدارة المخزون",
        "portfolio.project2.title": "تطبيق إدارة المهام",
        "portfolio.project2.desc": "تطبيق ويب لإدارة المهام اليومية مع ميزات متقدمة",
        "portfolio.project3.title": "موقع تعليمي",
        "portfolio.project3.desc": "منصة تعليمية تفاعلية لتعلم البرمجة",
        "portfolio.project4.title": "مدونة شخصية",
        "portfolio.project4.desc": "مدونة حول تطوير الويب والتقنيات الحديثة",
        "portfolio.view": "اعرض الموقع",
        "portfolio.github": "GitHub",

        // About
        "about.section.label": "من أنا",
        "about.section.desc": "تعرّف عليّ أكثر",
        "about.label": "مطور ويب",
        "about.title": "من أنا",
        "about.desc": "مرحباً! أنا مطور ويب متخصص في تطوير تطبيقات ويب حديثة واحترافية. أعشق تحويل الأفكار إلى حقيقة رقمية جميلة وفعالة.",
        "about.skills.title": "المهارات التقنية",
        "about.skills.frontend": "Frontend Development",
        "about.skills.uiux": "UI/UX Design",
        "about.skills.responsive": "Responsive Design",
        "about.skills.js": "JavaScript & DOM",
        "about.experience.title": "الخبرة",
        "about.exp1.title": "مطور ويب مستقل",
        "about.exp1.date": "2022 - الآن",
        "about.exp1.company": "مستقل",
        "about.exp1.desc": "تطوير مواقع ويب احترافية للشركات الصغيرة والمتوسطة",
        "about.exp2.title": "طالب تطوير ويب",
        "about.exp2.date": "2020 - 2022",
        "about.exp2.company": "تعليم ذاتي",
        "about.exp2.desc": "تعلم تقنيات الويب الحديثة والأساسيات القوية",

        // Services page
        "servicespage.title": "الخدمات",
        "servicespage.subtitle": "أقدم مجموعة شاملة من خدمات تطوير الويب",
        "pricing.title": "الأسعار",
        "pricing.basic.title": "الباقة الأساسية",
        "pricing.basic.price": "100 $",
        "pricing.basic.f1": "موقع ويب بسيط",
        "pricing.basic.f2": "حتى 5 صفحات",
        "pricing.basic.f3": "تصميم متجاوب",
        "pricing.basic.f4": "بريد إلكتروني واحد",
        "pricing.advanced.title": "الباقة المتقدمة",
        "pricing.advanced.price": "300 $",
        "pricing.advanced.f1": "موقع ويب متقدم",
        "pricing.advanced.f2": "حتى 15 صفحة",
        "pricing.advanced.f3": "تصميم احترافي",
        "pricing.advanced.f4": "نموذج اتصال",
        "pricing.advanced.f5": "صيانة 3 أشهر",
        "pricing.pro.title": "الباقة الاحترافية",
        "pricing.pro.price": "من 500 $",
        "pricing.pro.f1": "موقع متقدم مخصص",
        "pricing.pro.f2": "صفحات غير محدودة",
        "pricing.pro.f3": "تطوير مخصص",
        "pricing.pro.f4": "قاعدة بيانات",
        "pricing.pro.f5": "صيانة سنوية",
        "pricing.order": "اطلب الآن",

        // Contact
        "contact.title": "تواصل معي",
        "contact.subtitle": "أتطلع للاستماع إليك! تواصل معي لمناقشة مشروعك",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.location": "الموقع",
        "contact.location.value": "المملكة العربية السعودية",
        "contact.follow": "تابعني على",
        "contact.form.name": "الاسم الكامل",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.phone": "رقم الهاتف",
        "contact.form.subject": "الموضوع",
        "contact.form.subject.default": "اختر الموضوع",
        "contact.form.subject.project": "استفسار عن مشروع",
        "contact.form.subject.service": "استفسار عن الخدمات",
        "contact.form.subject.collab": "تعاون",
        "contact.form.subject.other": "أخرى",
        "contact.form.message": "الرسالة",
        "contact.form.submit": "إرسال الرسالة",

        // Footer
        "footer.about": "عني",
        "footer.about.desc": "مطور ويب متخصص في تطوير تطبيقات ويب حديثة وفعالة",
        "footer.links": "الروابط السريعة",
        "footer.contact": "تواصل معي",
        "footer.email": "البريد: example@email.com",
        "footer.rights": "جميع الحقوق محفوظة",

        // Common UI
        "btn.view.works": "اعرض أعمالي",
        "btn.contact": "تواصل معي",
        "btn.view.all": "عرض جميع المشاريع",
        "btn.request": "اطلب الآن"
    },
    en: {
        // Common
        "site.name": "Ahmad",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.portfolio": "Portfolio",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "nav.lang.ar": "عربي",
        "nav.lang.en": "EN",

        // Index page
        "hero.label": "Web Developer",
        "hero.title.1": "Hello, I'm",
        "hero.title.2": "Ahmad",
        "hero.desc": "Building professional and fast web applications that achieve your business goals. I combine creativity with technology to deliver outstanding digital solutions.",
        "hero.btn.works": "View My Work",
        "hero.btn.contact": "Contact Me",

        // Stats
        "stat.years": "Years of Experience",
        "stat.projects": "Projects Completed",
        "stat.clients": "Happy Clients",
        "stat.quality": "Service Quality",

        // Bento cards
        "bento.dev.label": "Web Development",
        "bento.dev.title": "Specialized in building professional and efficient web applications",
        "bento.lang.label": "Languages",
        "bento.lang.title": "Fluent in Arabic and English professionally",
        "bento.tech.label": "Technologies",
        "bento.tech.title": "Core Technologies",
        "bento.about.label": "About Me",
        "bento.about.title": "Always striving to deliver the best digital solutions",
        "bento.cta.title": "Want to ask a question?",
        "bento.cta.btn": "Contact Me",

        // Services
        "services.title": "Main Services",
        "services.subtitle": "Providing a comprehensive range of web development services with the highest quality",
        "services.webdesign.title": "Web Design",
        "services.webdesign.desc": "Modern and attractive designs that reflect your brand",
        "services.webdesign.f1": "Modern and beautiful designs",
        "services.webdesign.f2": "Compatible with all devices",
        "services.webdesign.f3": "Easy to use",
        "services.webdesign.f4": "SEO optimized",
        "services.webdev.title": "Web Development",
        "services.webdev.desc": "Dynamic websites with modern technologies",
        "services.webdev.f1": "Clean, maintainable code",
        "services.webdev.f2": "High performance",
        "services.webdev.f3": "Strong security",
        "services.webdev.f4": "Scalable",
        "services.performance.title": "Performance Optimization",
        "services.performance.desc": "Fast and reliable websites",
        "services.performance.f1": "Improve loading speed",
        "services.performance.f2": "SEO improvement",
        "services.performance.f3": "Reduce data consumption",
        "services.performance.f4": "Performance monitoring",
        "services.support.title": "Maintenance & Support",
        "services.support.desc": "Continuous technical support and periodic maintenance",
        "services.support.f1": "Regular updates",
        "services.support.f2": "Bug fixes",
        "services.support.f3": "24/7 support",
        "services.support.f4": "Backup copies",

        // Portfolio
        "portfolio.title": "My Projects",
        "portfolio.filter.all": "All",
        "portfolio.filter.ecommerce": "E-Commerce",
        "portfolio.filter.app": "Apps",
        "portfolio.filter.website": "Websites",
        "portfolio.project1.title": "E-Commerce Store",
        "portfolio.project1.desc": "Complete e-commerce platform with payment system and inventory management",
        "portfolio.project2.title": "Task Management App",
        "portfolio.project2.desc": "Web app for daily task management with advanced features",
        "portfolio.project3.title": "Educational Website",
        "portfolio.project3.desc": "Interactive educational platform for learning programming",
        "portfolio.project4.title": "Personal Blog",
        "portfolio.project4.desc": "Blog about web development and modern technologies",
        "portfolio.view": "View Site",
        "portfolio.github": "GitHub",

        // About
        "about.section.label": "About Me",
        "about.section.desc": "Learn more about me",
        "about.label": "Web Developer",
        "about.title": "About Me",
        "about.desc": "Hi! I'm a web developer specialized in building modern and professional web applications. I love turning ideas into beautiful and effective digital reality.",
        "about.skills.title": "Technical Skills",
        "about.skills.frontend": "Frontend Development",
        "about.skills.uiux": "UI/UX Design",
        "about.skills.responsive": "Responsive Design",
        "about.skills.js": "JavaScript & DOM",
        "about.experience.title": "Experience",
        "about.exp1.title": "Freelance Web Developer",
        "about.exp1.date": "2022 - Present",
        "about.exp1.company": "Freelance",
        "about.exp1.desc": "Developing professional websites for small and medium businesses",
        "about.exp2.title": "Web Development Student",
        "about.exp2.date": "2020 - 2022",
        "about.exp2.company": "Self-taught",
        "about.exp2.desc": "Learning modern web technologies and building strong foundations",

        // Services page
        "servicespage.title": "Services",
        "servicespage.subtitle": "Providing a comprehensive range of web development services",
        "pricing.title": "Pricing",
        "pricing.basic.title": "Basic Package",
        "pricing.basic.price": "$100",
        "pricing.basic.f1": "Simple website",
        "pricing.basic.f2": "Up to 5 pages",
        "pricing.basic.f3": "Responsive design",
        "pricing.basic.f4": "One email",
        "pricing.advanced.title": "Advanced Package",
        "pricing.advanced.price": "$300",
        "pricing.advanced.f1": "Advanced website",
        "pricing.advanced.f2": "Up to 15 pages",
        "pricing.advanced.f3": "Professional design",
        "pricing.advanced.f4": "Contact form",
        "pricing.advanced.f5": "3 months maintenance",
        "pricing.pro.title": "Professional Package",
        "pricing.pro.price": "From $500",
        "pricing.pro.f1": "Custom advanced website",
        "pricing.pro.f2": "Unlimited pages",
        "pricing.pro.f3": "Custom development",
        "pricing.pro.f4": "Database",
        "pricing.pro.f5": "Annual maintenance",
        "pricing.order": "Order Now",

        // Contact
        "contact.title": "Contact Me",
        "contact.subtitle": "I look forward to hearing from you! Contact me to discuss your project",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.location.value": "Saudi Arabia",
        "contact.follow": "Follow Me",
        "contact.form.name": "Full Name",
        "contact.form.email": "Email Address",
        "contact.form.phone": "Phone Number",
        "contact.form.subject": "Subject",
        "contact.form.subject.default": "Choose a subject",
        "contact.form.subject.project": "Project inquiry",
        "contact.form.subject.service": "Service inquiry",
        "contact.form.subject.collab": "Collaboration",
        "contact.form.subject.other": "Other",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",

        // Footer
        "footer.about": "About",
        "footer.about.desc": "Web developer specialized in building modern and efficient web applications",
        "footer.links": "Quick Links",
        "footer.contact": "Contact",
        "footer.email": "Email: example@email.com",
        "footer.rights": "All rights reserved",

        // Common UI
        "btn.view.works": "View My Work",
        "btn.contact": "Contact Me",
        "btn.view.all": "View All Projects",
        "btn.request": "Order Now"
    }
};

function getLang() {
    return localStorage.getItem("lang") || "ar";
}

function setLang(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function t(key) {
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) || key;
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        var translated = t(key);
        if (translated) {
            el.textContent = translated;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-placeholder");
        var translated = t(key);
        if (translated) {
            el.placeholder = translated;
        }
    });
}

function updateDirection() {
    var lang = getLang();
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
    updateDirection();
});
