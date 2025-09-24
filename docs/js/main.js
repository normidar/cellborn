// 多言語対応データ
const translations = {
    ja: {
        'hero.title': '革新的な物流とIT技術で<br>未来をつなぐ',
        'hero.subtitle': '日本と中国を結ぶ物流ソリューションと、最先端の仮想通貨技術開発',
        'hero.contact': 'お問い合わせ',
        'hero.services': 'サービス紹介',
        'about.title': '会社概要',
        'about.company.title': '会社情報',
        'about.company.name': '会社名:',
        'about.company.location': '所在地:',
        'about.company.address': '住所:',
        'about.company.addressDetail': '東京都品川区八潮５丁目３－１５－１０３',
        'about.company.postal': '郵便番号:',
        'about.business.title': '事業内容',
        'about.business.type': '業種:',
        'about.business.typeDetail': '物流、IT業',
        'about.business.logistics': '中国と日本の間の物流業務',
        'about.business.crypto': 'IT分野で仮想通貨への試み（PoC）',
        'services.title': 'サービス',
        'services.logistics.title': '国際物流',
        'services.logistics.description': '日本と中国間の効率的な物流ソリューションを提供。通関手続きから配送まで、ワンストップでサポートいたします。',
        'services.crypto.title': '仮想通貨PoC',
        'services.crypto.description': '最先端のブロックチェーン技術を活用した仮想通貨システムの概念実証（PoC）開発を行っています。',
        'services.consulting.title': 'コンサルティング',
        'services.consulting.description': '物流とIT技術を融合した革新的なソリューションのコンサルティングサービスを提供します。',
        'contact.title': 'お問い合わせ',
        'contact.info.title': '連絡先情報',
        'contact.info.address': '住所',
        'contact.info.addressDetail': '〒140-0003<br>東京都品川区八潮５丁目３－１５－１０３',
        'contact.info.languages': '対応言語',
        'contact.info.languagesList': '日本語、中国語、英語',
        'contact.form.title': 'お問い合わせフォーム',
        'contact.form.name': 'お名前',
        'contact.form.subject': '件名',
        'contact.form.message': 'メッセージ',
        'contact.form.submit': '送信',
        'footer.copyright': '© 2024 Cellborn合同会社. All rights reserved.',
        'footer.address': '東京都品川区八潮５丁目３－１５－１０３'
    },
    zh: {
        'hero.title': '以创新物流和IT技术<br>连接未来',
        'hero.subtitle': '连接日本与中国的物流解决方案和最前沿的虚拟货币技术开发',
        'hero.contact': '联系我们',
        'hero.services': '服务介绍',
        'about.title': '公司概要',
        'about.company.title': '公司信息',
        'about.company.name': '公司名称:',
        'about.company.location': '所在地:',
        'about.company.address': '地址:',
        'about.company.addressDetail': '东京都品川区八潮５丁目３－１５－１０３',
        'about.company.postal': '邮政编码:',
        'about.business.title': '业务内容',
        'about.business.type': '行业:',
        'about.business.typeDetail': '物流、IT业',
        'about.business.logistics': '中国与日本间的物流业务',
        'about.business.crypto': 'IT领域虚拟货币尝试（PoC）',
        'services.title': '服务',
        'services.logistics.title': '国际物流',
        'services.logistics.description': '提供日本与中国间高效的物流解决方案。从通关手续到配送，提供一站式支持服务。',
        'services.crypto.title': '虚拟货币PoC',
        'services.crypto.description': '利用最前沿的区块链技术进行虚拟货币系统的概念验证（PoC）开发。',
        'services.consulting.title': '咨询服务',
        'services.consulting.description': '提供融合物流与IT技术的创新解决方案咨询服务。',
        'contact.title': '联系我们',
        'contact.info.title': '联系信息',
        'contact.info.address': '地址',
        'contact.info.addressDetail': '〒140-0003<br>东京都品川区八潮５丁目３－１５－１０３',
        'contact.info.languages': '支持语言',
        'contact.info.languagesList': '日语、中文、英语',
        'contact.form.title': '联系表单',
        'contact.form.name': '姓名',
        'contact.form.subject': '主题',
        'contact.form.message': '消息',
        'contact.form.submit': '发送',
        'footer.copyright': '© 2024 Cellborn合同会社. 保留所有权利.',
        'footer.address': '东京都品川区八潮５丁目３－１５－１０３'
    },
    en: {
        'hero.title': 'Connecting the Future with<br>Innovative Logistics & IT',
        'hero.subtitle': 'Logistics solutions connecting Japan and China, and cutting-edge cryptocurrency technology development',
        'hero.contact': 'Contact Us',
        'hero.services': 'Our Services',
        'about.title': 'About Us',
        'about.company.title': 'Company Information',
        'about.company.name': 'Company Name:',
        'about.company.location': 'Location:',
        'about.company.address': 'Address:',
        'about.company.addressDetail': '5-3-15-103 Yashio, Shinagawa-ku, Tokyo',
        'about.company.postal': 'Postal Code:',
        'about.business.title': 'Business Description',
        'about.business.type': 'Industry:',
        'about.business.typeDetail': 'Logistics, IT',
        'about.business.logistics': 'Logistics operations between China and Japan',
        'about.business.crypto': 'Cryptocurrency initiatives in IT field (PoC)',
        'services.title': 'Services',
        'services.logistics.title': 'International Logistics',
        'services.logistics.description': 'Providing efficient logistics solutions between Japan and China. One-stop support from customs procedures to delivery.',
        'services.crypto.title': 'Cryptocurrency PoC',
        'services.crypto.description': 'Developing proof of concept (PoC) for cryptocurrency systems using cutting-edge blockchain technology.',
        'services.consulting.title': 'Consulting',
        'services.consulting.description': 'Providing consulting services for innovative solutions that combine logistics and IT technology.',
        'contact.title': 'Contact Us',
        'contact.info.title': 'Contact Information',
        'contact.info.address': 'Address',
        'contact.info.addressDetail': '〒140-0003<br>5-3-15-103 Yashio, Shinagawa-ku, Tokyo',
        'contact.info.languages': 'Supported Languages',
        'contact.info.languagesList': 'Japanese, Chinese, English',
        'contact.form.title': 'Contact Form',
        'contact.form.name': 'Name',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send',
        'footer.copyright': '© 2024 Cellborn LLC. All rights reserved.',
        'footer.address': '5-3-15-103 Yashio, Shinagawa-ku, Tokyo'
    }
};

// 現在の言語
let currentLanguage = 'ja';

// DOM要素
const languageButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');

// 言語切り替え機能
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // ボタンのアクティブ状態を更新
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // テキストを更新
    i18nElements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // HTML lang属性を更新
    document.documentElement.setAttribute('lang', lang);
    
    // ページタイトルを更新
    const titles = {
        ja: 'Cellborn合同会社 - 物流・IT',
        zh: 'Cellborn合同会社 - 物流·IT',
        en: 'Cellborn LLC - Logistics & IT'
    };
    document.title = titles[lang];
    
    // ローカルストレージに保存
    localStorage.setItem('preferredLanguage', lang);
}

// スムーススクロール機能
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// フェードインアニメーション
function fadeInAnimation() {
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
    
    // アニメーション対象要素を追加
    document.querySelectorAll('.about-card, .service-card, .contact-content').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ヘッダーのスクロール効果
function headerScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// お問い合わせフォームの処理
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // フォームデータを取得
            const formData = new FormData(form);
            const name = formData.get('name');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // 会社のメールアドレス（必要に応じて変更してください）
            const companyEmail = 'normidar7@gmail.com';
            
            // メール本文を作成
            const emailBody = `お名前: ${name}\n\nメッセージ:\n${message}`;
            
            // mailtoリンクを作成
            const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // メールソフトを開く
            window.location.href = mailtoLink;
            
            // フォームをリセット
            form.reset();
        });
    }
}

// パフォーマンス最適化：画像の遅延読み込み
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// アクセシビリティ改善
function improveAccessibility() {
    // キーボードナビゲーション
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // フォーカス管理
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #2563eb';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
}

// 初期化処理
function init() {
    // 保存された言語設定を読み込み
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'ja';
    switchLanguage(savedLanguage);
    
    // イベントリスナーを設定
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
    
    // その他の機能を初期化
    smoothScroll();
    fadeInAnimation();
    headerScrollEffect();
    setupContactForm();
    lazyLoadImages();
    improveAccessibility();
    
    // ページ読み込み完了後のアニメーション
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', init);

// ページ表示時のパフォーマンス測定（開発用）
window.addEventListener('load', () => {
    if (performance.getEntriesByType) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
    }
});

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// レスポンシブ対応：画面サイズ変更時の処理
window.addEventListener('resize', () => {
    // モバイルメニューが開いている場合は閉じる（必要に応じて）
    // 他のレスポンシブ調整
});

// PWA対応（サービスワーカー登録）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
