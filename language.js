const translations = {
    en: {
        // Home page
        home: "Home",
        blog: "Blog",
        contact: "Contact",
        greeting: "Hey, I'm Kevin",
        subtitle: "A Software Engineer crafting digital experiences that make a difference.",
        fullstack: "Full-stack Developer",
        mobile: "Mobile App Developer",
        bilingual: "Bilingual Professional",
        learnMore: "Learn More About Me",
        
        // About section
        journey: "My Journey",
        journeyText1: "My journey in technology began during my time at National Chung Cheng University, where I studied Computer Science and Information Engineering. Throughout my academic career, I developed a strong foundation in software development while maintaining excellence in both technical and language skills.",
        journeyText2: "After graduation, I joined IBM as an Application Developer, where I collaborated with talented engineers and designers to create robust frontend solutions. This experience led me to my current role at VOCOM INTERNATIONAL, where I'm responsible for developing backend APIs for eSIM systems.",
        journeyText3: "My diverse experience includes internships in FinTech at CTBC Bank, blockchain technology at Fansi, and Android development at SABF. Each role has contributed to my growth as a well-rounded developer.",
        
        // Skills section
        skillsExpertise: "Skills & Expertise",
        technicalSkills: "Technical Skills",
        fullstackDev: "Full-stack Development",
        mobileDev: "Mobile Development",
        devTools: "Development Tools",
        professionalSkills: "Professional Skills",
        projectManagement: "Project Management",
        languageServices: "Language Services",
        
        // Work Timeline
        workTimeline: "Work Timeline",
        present: "Present",
        
        // Featured Work
        featuredWork: "Featured Work",
        learnMoreArrow: "Learn more →",
        
        // Contact page
        getInTouch: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
    },
    zh: {
        // Home page
        home: "首頁",
        blog: "部落格",
        contact: "聯絡我",
        greeting: "嗨，我是 Kevin",
        subtitle: "一位致力於創造有意義數位體驗的軟體工程師。",
        fullstack: "全端開發工程師",
        mobile: "行動應用開發者",
        bilingual: "雙語專業人才",
        learnMore: "了解更多",
        
        // About section
        journey: "我的歷程",
        journeyText1: "我的技術之旅始於國立中正大學，在那裡我主修資訊工程學系。在學術生涯中，我在保持優異的技術和語言能力的同時，也建立了紮實的軟體開發基礎。",
        journeyText2: "畢業後，我加入 IBM 擔任應用程式開發人員，與優秀的工程師和設計師合作，創建強大的前端解決方案。這些經驗帶領我到現在的職位，在 VOCOM INTERNATIONAL 負責開發 eSIM 系統的後端 API。",
        journeyText3: "我的經驗包括在中國信託的金融科技實習、在 Fansi 的區塊鏈技術實習，以及在印度商亞竹基金會的 Android 開發實習。每個角色都為我成為全方位開發者提供了寶貴經驗。",
        
        // Skills section
        skillsExpertise: "技能與專長",
        technicalSkills: "技術能力",
        fullstackDev: "全端開發",
        mobileDev: "行動開發",
        devTools: "開發工具",
        professionalSkills: "專業技能",
        projectManagement: "專案管理",
        languageServices: "語言服務",
        
        // Work Timeline
        workTimeline: "工作經歷",
        present: "至今",
        
        // Featured Work
        featuredWork: "精選作品",
        learnMoreArrow: "了解更多 →",
        
        // Contact page
        getInTouch: "聯絡方式",
        name: "姓名",
        email: "電子郵件",
        message: "訊息",
        send: "發送訊息"
    }
};

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Add language toggle button
const languageToggle = document.createElement('button');
languageToggle.id = 'language-toggle';
languageToggle.className = 'language-toggle';
languageToggle.setAttribute('aria-label', 'Toggle language');
languageToggle.textContent = 'EN/中';
document.body.appendChild(languageToggle);

// Initialize language
let currentLang = localStorage.getItem('language') || 'en';
updateContent(currentLang);

// Toggle language on button click
languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLang);
    updateContent(currentLang);
    
    // Add rotation animation
    languageToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        languageToggle.style.transform = '';
    }, 300);
});

// Update content when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
}); 