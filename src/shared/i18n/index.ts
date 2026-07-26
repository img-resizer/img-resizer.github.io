export const defaultLocale = 'en';

export const locales = [
	'en',
	'es',
	'pt',
	'fr',
	'de',
	'it',
	'ja',
	'ko',
	'id',
	'ru',
	'uk',
	'tr',
	'pl',
	'nl',
	'no',
	'he',
	'ar',
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	de: 'Deutsch',
	it: 'Italiano',
	ja: '日本語',
	ko: '한국어',
	id: 'Indonesian',
	ru: 'Русский',
	uk: 'Українська',
	tr: 'Türkçe',
	pl: 'Polski',
	nl: 'Dutch',
	no: 'Norsk',
	he: 'Hebrew',
	ar: 'Arabic',
};

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	de: 'Deutsch',
	it: 'Italiano',
	ja: '日本語',
	ko: '한국어',
	id: 'Bahasa Indonesia',
	ru: 'Русский',
	uk: 'Українська',
	tr: 'Türkçe',
	pl: 'Polski',
	nl: 'Nederlands',
	no: 'Norsk',
	he: 'עברית',
	ar: 'العربية',
};

export const localeDir: Record<Locale, 'ltr' | 'rtl'> = {
	en: 'ltr',
	es: 'ltr',
	pt: 'ltr',
	fr: 'ltr',
	de: 'ltr',
	it: 'ltr',
	ja: 'ltr',
	ko: 'ltr',
	id: 'ltr',
	ru: 'ltr',
	uk: 'ltr',
	tr: 'ltr',
	pl: 'ltr',
	nl: 'ltr',
	no: 'ltr',
	he: 'rtl',
	ar: 'rtl',
};

export const nonDefaultLocales = locales.filter((locale) => locale !== defaultLocale);

export const isLocale = (value: string | undefined): value is Locale =>
	!!value && (locales as readonly string[]).includes(value);

export const getLocaleFromPath = (pathname: string): Locale => {
	const first = pathname.split('/').filter(Boolean)[0];
	return isLocale(first) ? first : defaultLocale;
};

export const stripLocaleFromPath = (pathname: string) => {
	const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
	const parts = clean.split('/').filter(Boolean);
	if (isLocale(parts[0])) parts.shift();
	return `/${parts.join('/')}${clean.endsWith('/') && parts.length ? '/' : ''}`;
};

export const localizedPath = (locale: Locale, path = '/') => {
	const clean = path.startsWith('/') ? path : `/${path}`;
	if (locale === defaultLocale) return clean;
	return `/${locale}${clean === '/' ? '/' : clean}`;
};

const en = {
	nav: {
		batch: 'Batch resize',
		compress: 'Compress Image',
		breakpoints: 'Breakpoints',
		guides: 'Guides',
		rss: 'RSS',
		language: 'Language',
	},
	footer: {
		copy: 'A private image resizer and compressor for careful, everyday work.',
		tools: 'Tools',
		info: 'Information',
		resizer: 'Image resizer',
		batch: 'Batch resize',
		compress: 'Compress Image',
		breakpoints: 'Image Breakpoint Generator',
		plugins: 'Plugins',
		guides: 'Guides',
		contact: 'Contact us',
		privacy: 'Privacy Policy',
		terms: 'Terms of Use',
		note: 'Processing stays in your browser.',
	},
	tool: {
		drop: 'Drop an image here',
		browse: 'or click to browse your device',
		formats: 'JPEG, PNG, or WebP',
		width: 'Width',
		height: 'Height',
		keepRatio: 'Keep aspect ratio',
		ratioHint: 'Turn this off to set width and height independently.',
		format: 'Output format',
		maxSize: 'Maximum file size',
		optional: 'optional',
		noLimit: 'No limit',
		replace: 'Replace',
		chooseOther: 'Choose other files',
		quality: 'Image quality',
		originalDimensions: 'Original dimensions preserved',
		compressionHint: 'Compression changes encoding quality, not the crop or canvas size.',
		resizeDownload: 'Resize and download',
		compressDownload: 'Compress and download',
		reset: 'Reset',
		estimate: 'Estimated output',
		statusReady: 'Choose an image to begin.',
		selectImage: 'Please choose a JPEG, PNG, or WebP image.',
		previewReadyResize: 'Preview ready. Adjust the output settings or download now.',
		previewReadyCompress: 'Preview ready. Choose compression settings or download now.',
		processingResize: 'Processing image on this device...',
		processingCompress: 'Compressing image on this device...',
		finishedResize: 'Finished. Your resized image is downloading now.',
		finishedCompress: 'Finished. Your compressed image is downloading now.',
	},
	breakpointTool: {
		drop: 'Drop an image here',
		browse: 'or click to browse your device',
		formats: 'JPEG, PNG, or WebP',
		eyebrow: 'Responsive exports',
		heading: 'Generate image breakpoints',
		copy: 'Create several smaller image files and a ready srcset snippet for responsive layouts. Everything runs locally in your browser.',
		min: 'Smallest width',
		max: 'Largest width',
		step: 'Step',
		quality: 'Quality',
		format: 'Output format',
		alt: 'Image alt text',
		altPlaceholder: 'Describe the image for the final snippet',
		generate: 'Generate breakpoints',
		reset: 'Reset settings',
		start: 'Choose an image to begin.',
		replace: 'Choose another image',
		loaded: 'Image loaded. Adjust widths, then generate breakpoints.',
		generating: 'Generating responsive image breakpoints on this device...',
		resultsEyebrow: 'Generated files',
		resultsHeading: 'Breakpoints ready',
		downloadAll: 'Download all',
		download: 'Download',
		html: 'Responsive HTML',
		copyCode: 'Copy code',
		copied: 'Copied',
		failed: 'Failed',
	},
	pages: {
		homeTitle: 'Private Image Resizer and Compressor',
		homeDescription:
			'Resize and compress images online in your browser. Preview the result, control dimensions and file size, then download without uploading your image.',
		homeEyebrow: 'Private by design',
		homeH1: 'Resize and compress images without the upload',
		homeStrong: 'A practical image resizer for work that should stay private.',
		homeCopy:
			'See the picture before processing, choose exact dimensions or a file size, and download a clean JPEG, PNG, or WebP result.',
		compressTitle: 'Compress Image Online | Image Resizer',
		compressDescription:
			'Compress images online to a smaller JPEG, PNG, or WebP file. Set a maximum file size, preview the source, and process it privately in your browser.',
		compressEyebrow: 'Dedicated compressor',
		compressH1: 'Compress Image Online',
		compressStrong: 'Reduce image file size with direct control.',
		compressCopy:
			'Choose an image, select JPEG or WebP, adjust quality or enter an optional maximum size, and download the compressed result without changing its dimensions.',
		breakpointTitle: 'Image Breakpoint Generator | Responsive Image Tool',
		breakpointDescription:
			'Generate responsive image breakpoints, srcset markup, and multiple image sizes locally in your browser without uploading the source image.',
		breakpointEyebrow: 'Responsive image tool',
		breakpointH1: 'Image Breakpoint Generator',
		breakpointStrong: 'Create responsive image sizes from one source file.',
		breakpointCopy:
			'The Image Breakpoint Generator builds smaller image variants, keeps proportions intact, and prepares a copy-ready srcset snippet for modern layouts.',
		pluginsTitle: 'Image Resizer Plugins',
		pluginsDescription:
			'Install Image Resizer plugins for Chrome, Firefox, and Obsidian. Resize and compress images from the browser or inside an Obsidian vault.',
		pluginsEyebrow: 'Plugins',
		pluginsH1: 'Use Image Resizer where your images already are',
		pluginsStrong: 'Resize and compress without changing your workflow.',
		pluginsCopy:
			'The Chrome and Firefox extensions handle browser tasks quickly, while the Obsidian plugin works with image files stored inside a vault.',
		blogTitle: 'Image Resizing and Compression Guides | Image Resizer',
		blogDescription:
			'Practical guides to image resizing, compression, file formats, social dimensions, and private browser-based image processing.',
		blogEyebrow: 'Field notes',
		blogH1: 'Better images, fewer guesses',
		blogCopy:
			'Practical guides for choosing dimensions, controlling file size, and understanding what image compression changes.',
		blogRss: 'Follow the blog via RSS',
		contactTitle: 'Contact Us | Image Resizer',
		contactDescription:
			'Contact the Image Resizer team about the website, image tools, accessibility, privacy, or technical problems.',
		contactEyebrow: 'Contact',
		contactH1: 'Contact us',
		privacyTitle: 'Privacy Policy | Image Resizer',
		privacyDescription:
			'Read how Image Resizer handles local image processing, privacy, browser storage, and contact information.',
		privacyEyebrow: 'Legal',
		privacyH1: 'Privacy Policy',
		termsTitle: 'Terms of Use | Image Resizer',
		termsDescription:
			'Review the terms that apply when using the Image Resizer website, browser-based image tools, presets, and written guides.',
		termsEyebrow: 'Legal',
		termsH1: 'Terms of Use',
	},
};

type Dictionary = typeof en;

const overrides: Partial<Record<Locale, Partial<Dictionary>>> = {
	es: {
		nav: { batch: 'Redimensionar lote', compress: 'Comprimir imagen', breakpoints: 'Breakpoints', guides: 'Guías', rss: 'RSS', language: 'Idioma' },
		footer: { copy: 'Un redimensionador y compresor de imágenes privado para el trabajo diario.', tools: 'Herramientas', info: 'Información', resizer: 'Redimensionar imagen', batch: 'Redimensionar lote', compress: 'Comprimir imagen', breakpoints: 'Generador de breakpoints', plugins: 'Plugins', guides: 'Guías', contact: 'Contacto', privacy: 'Política de privacidad', terms: 'Términos de uso', note: 'El procesamiento permanece en tu navegador.' },
		pages: { homeH1: 'Redimensiona y comprime imágenes sin subirlas', homeEyebrow: 'Privado por diseño', homeStrong: 'Una herramienta práctica para imágenes que deben seguir privadas.', homeCopy: 'Previsualiza la imagen, elige dimensiones exactas o tamaño de archivo, y descarga un JPEG, PNG o WebP limpio.', compressH1: 'Comprimir imagen online', compressEyebrow: 'Compresor dedicado', compressStrong: 'Reduce el tamaño del archivo con control directo.', breakpointH1: 'Generador de breakpoints de imagen', breakpointEyebrow: 'Herramienta responsive', breakpointStrong: 'Crea tamaños responsive desde una sola imagen.', pluginsH1: 'Usa Image Resizer donde ya están tus imágenes', pluginsEyebrow: 'Plugins', pluginsStrong: 'Redimensiona y comprime sin cambiar tu flujo de trabajo.', blogH1: 'Mejores imágenes, menos dudas', blogEyebrow: 'Guías prácticas', contactH1: 'Contacto', privacyH1: 'Política de privacidad', termsH1: 'Términos de uso' },
	},
	pt: {
		nav: { batch: 'Redimensionar em lote', compress: 'Comprimir imagem', breakpoints: 'Breakpoints', guides: 'Guias', rss: 'RSS', language: 'Idioma' },
		footer: { copy: 'Um redimensionador e compressor privado para o trabalho diário.', tools: 'Ferramentas', info: 'Informações', resizer: 'Redimensionar imagem', batch: 'Redimensionar em lote', compress: 'Comprimir imagem', breakpoints: 'Gerador de breakpoints', plugins: 'Plugins', guides: 'Guias', contact: 'Contato', privacy: 'Política de privacidade', terms: 'Termos de uso', note: 'O processamento fica no seu navegador.' },
		pages: { homeH1: 'Redimensione e comprima imagens sem upload', homeEyebrow: 'Privado por design', homeStrong: 'Uma ferramenta prática para imagens que devem continuar privadas.', homeCopy: 'Veja a imagem antes de processar, escolha dimensões ou tamanho de arquivo, e baixe o resultado.', compressH1: 'Comprimir imagem online', breakpointH1: 'Gerador de breakpoints de imagem', pluginsH1: 'Use o Image Resizer onde suas imagens já estão', blogH1: 'Imagens melhores, menos dúvidas', contactH1: 'Contato', privacyH1: 'Política de privacidade', termsH1: 'Termos de uso' },
	},
	fr: {
		nav: { batch: 'Lot d’images', compress: 'Compresser image', breakpoints: 'Breakpoints', guides: 'Guides', rss: 'RSS', language: 'Langue' },
		footer: { copy: 'Un outil privé pour redimensionner et compresser les images du quotidien.', tools: 'Outils', info: 'Information', resizer: 'Redimensionner image', batch: 'Lot d’images', compress: 'Compresser image', breakpoints: 'Générateur de breakpoints', plugins: 'Plugins', guides: 'Guides', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions d’utilisation', note: 'Le traitement reste dans votre navigateur.' },
		pages: { homeH1: 'Redimensionnez et compressez des images sans upload', homeEyebrow: 'Privé par conception', homeStrong: 'Un outil pratique pour les images qui doivent rester privées.', compressH1: 'Compresser une image en ligne', breakpointH1: 'Générateur de breakpoints d’image', pluginsH1: 'Utilisez Image Resizer là où sont déjà vos images', blogH1: 'De meilleures images, moins d’hésitation', contactH1: 'Contact', privacyH1: 'Politique de confidentialité', termsH1: 'Conditions d’utilisation' },
	},
	de: {
		nav: { batch: 'Stapelgröße', compress: 'Bild komprimieren', breakpoints: 'Breakpoints', guides: 'Anleitungen', rss: 'RSS', language: 'Sprache' },
		footer: { copy: 'Ein privater Bildverkleinerer und Kompressor für den Alltag.', tools: 'Tools', info: 'Informationen', resizer: 'Bild verkleinern', batch: 'Stapelgröße', compress: 'Bild komprimieren', breakpoints: 'Breakpoint Generator', plugins: 'Plugins', guides: 'Anleitungen', contact: 'Kontakt', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', note: 'Die Verarbeitung bleibt im Browser.' },
		pages: { homeH1: 'Bilder verkleinern und komprimieren ohne Upload', homeEyebrow: 'Privat entwickelt', homeStrong: 'Ein praktisches Tool für Bilder, die privat bleiben sollen.', compressH1: 'Bild online komprimieren', breakpointH1: 'Image Breakpoint Generator', pluginsH1: 'Nutze Image Resizer dort, wo deine Bilder sind', blogH1: 'Bessere Bilder, weniger Rätsel', contactH1: 'Kontakt', privacyH1: 'Datenschutzerklärung', termsH1: 'Nutzungsbedingungen' },
	},
	it: {
		nav: { batch: 'Ridimensiona batch', compress: 'Comprimi immagine', breakpoints: 'Breakpoint', guides: 'Guide', rss: 'RSS', language: 'Lingua' },
		footer: { copy: 'Uno strumento privato per ridimensionare e comprimere immagini quotidiane.', tools: 'Strumenti', info: 'Informazioni', resizer: 'Ridimensiona immagine', batch: 'Ridimensiona batch', compress: 'Comprimi immagine', breakpoints: 'Generatore breakpoint', plugins: 'Plugin', guides: 'Guide', contact: 'Contatti', privacy: 'Privacy Policy', terms: 'Termini di utilizzo', note: 'L’elaborazione resta nel browser.' },
		pages: { homeH1: 'Ridimensiona e comprimi immagini senza upload', homeEyebrow: 'Privato per design', homeStrong: 'Uno strumento pratico per immagini che devono restare private.', compressH1: 'Comprimi immagine online', breakpointH1: 'Generatore di breakpoint per immagini', pluginsH1: 'Usa Image Resizer dove sono già le tue immagini', blogH1: 'Immagini migliori, meno tentativi', contactH1: 'Contatti', privacyH1: 'Privacy Policy', termsH1: 'Termini di utilizzo' },
	},
	ja: {
		nav: { batch: '一括リサイズ', compress: '画像圧縮', breakpoints: 'ブレークポイント', guides: 'ガイド', rss: 'RSS', language: '言語' },
		footer: { copy: '日常作業向けのプライベートな画像リサイズと圧縮ツールです。', tools: 'ツール', info: '情報', resizer: '画像リサイズ', batch: '一括リサイズ', compress: '画像圧縮', breakpoints: '画像ブレークポイント生成', plugins: 'プラグイン', guides: 'ガイド', contact: 'お問い合わせ', privacy: 'プライバシーポリシー', terms: '利用規約', note: '処理はブラウザ内で行われます。' },
		pages: { homeH1: 'アップロードせずに画像をリサイズして圧縮', homeEyebrow: 'プライバシー重視', homeStrong: '非公開のまま扱いたい画像のための実用的なツールです。', compressH1: '画像をオンラインで圧縮', breakpointH1: '画像ブレークポイント生成', pluginsH1: '画像がある場所で Image Resizer を使う', blogH1: '迷わず、より良い画像へ', contactH1: 'お問い合わせ', privacyH1: 'プライバシーポリシー', termsH1: '利用規約' },
	},
	ko: {
		nav: { batch: '일괄 리사이즈', compress: '이미지 압축', breakpoints: '브레이크포인트', guides: '가이드', rss: 'RSS', language: '언어' },
		footer: { copy: '일상 작업을 위한 개인 이미지 리사이저와 압축 도구입니다.', tools: '도구', info: '정보', resizer: '이미지 리사이즈', batch: '일괄 리사이즈', compress: '이미지 압축', breakpoints: '이미지 브레이크포인트 생성기', plugins: '플러그인', guides: '가이드', contact: '문의', privacy: '개인정보 처리방침', terms: '이용 약관', note: '처리는 브라우저 안에서 진행됩니다.' },
		pages: { homeH1: '업로드 없이 이미지를 리사이즈하고 압축', homeEyebrow: '개인정보 중심 설계', homeStrong: '비공개로 유지해야 하는 이미지 작업을 위한 실용적인 도구입니다.', compressH1: '이미지 온라인 압축', breakpointH1: '이미지 브레이크포인트 생성기', pluginsH1: '이미지가 있는 곳에서 Image Resizer 사용', blogH1: '더 나은 이미지, 더 적은 추측', contactH1: '문의', privacyH1: '개인정보 처리방침', termsH1: '이용 약관' },
	},
	id: {
		nav: { batch: 'Ubah ukuran batch', compress: 'Kompres gambar', breakpoints: 'Breakpoint', guides: 'Panduan', rss: 'RSS', language: 'Bahasa' },
		footer: { copy: 'Alat privat untuk mengubah ukuran dan mengompres gambar sehari-hari.', tools: 'Alat', info: 'Informasi', resizer: 'Ubah ukuran gambar', batch: 'Ubah ukuran batch', compress: 'Kompres gambar', breakpoints: 'Generator breakpoint', plugins: 'Plugin', guides: 'Panduan', contact: 'Kontak', privacy: 'Kebijakan Privasi', terms: 'Ketentuan Penggunaan', note: 'Pemrosesan tetap di browser Anda.' },
		pages: { homeH1: 'Ubah ukuran dan kompres gambar tanpa upload', homeEyebrow: 'Privat sejak awal', homeStrong: 'Alat praktis untuk gambar yang harus tetap privat.', compressH1: 'Kompres gambar online', breakpointH1: 'Generator breakpoint gambar', pluginsH1: 'Gunakan Image Resizer di tempat gambar Anda berada', blogH1: 'Gambar lebih baik, lebih sedikit tebakan', contactH1: 'Kontak', privacyH1: 'Kebijakan Privasi', termsH1: 'Ketentuan Penggunaan' },
	},
	ru: {
		nav: { batch: 'Пакетный ресайз', compress: 'Сжать изображение', breakpoints: 'Брейкпоинты', guides: 'Гайды', rss: 'RSS', language: 'Язык' },
		footer: { copy: 'Приватный ресайзер и компрессор изображений для повседневной работы.', tools: 'Инструменты', info: 'Информация', resizer: 'Ресайз изображения', batch: 'Пакетный ресайз', compress: 'Сжать изображение', breakpoints: 'Генератор брейкпоинтов', plugins: 'Плагины', guides: 'Гайды', contact: 'Контакты', privacy: 'Политика конфиденциальности', terms: 'Условия использования', note: 'Обработка остаётся в браузере.' },
		pages: { homeH1: 'Меняйте размер и сжимайте изображения без загрузки', homeEyebrow: 'Приватно по умолчанию', homeStrong: 'Практичный ресайзер для изображений, которые должны оставаться приватными.', homeCopy: 'Посмотрите изображение перед обработкой, задайте размеры или лимит файла и скачайте JPEG, PNG или WebP.', compressH1: 'Сжать изображение онлайн', compressEyebrow: 'Отдельный компрессор', compressStrong: 'Уменьшайте размер файла с прямым контролем.', breakpointH1: 'Генератор брейкпоинтов изображений', breakpointEyebrow: 'Responsive-инструмент', breakpointStrong: 'Создайте responsive-размеры из одного исходника.', pluginsH1: 'Используйте Image Resizer там, где уже лежат изображения', blogH1: 'Лучше изображения, меньше догадок', contactH1: 'Контакты', privacyH1: 'Политика конфиденциальности', termsH1: 'Условия использования' },
	},
	uk: {
		nav: { batch: 'Пакетний ресайз', compress: 'Стиснути зображення', breakpoints: 'Брейкпоінти', guides: 'Гайди', rss: 'RSS', language: 'Мова' },
		footer: { copy: 'Приватний ресайзер і компресор зображень для щоденної роботи.', tools: 'Інструменти', info: 'Інформація', resizer: 'Ресайз зображення', batch: 'Пакетний ресайз', compress: 'Стиснути зображення', breakpoints: 'Генератор брейкпоінтів', plugins: 'Плагіни', guides: 'Гайди', contact: 'Контакти', privacy: 'Політика конфіденційності', terms: 'Умови використання', note: 'Обробка залишається у браузері.' },
		pages: { homeH1: 'Змінюйте розмір і стискайте зображення без завантаження', homeEyebrow: 'Приватно за задумом', homeStrong: 'Практичний інструмент для зображень, які мають залишатися приватними.', compressH1: 'Стиснути зображення онлайн', breakpointH1: 'Генератор брейкпоінтів зображень', pluginsH1: 'Використовуйте Image Resizer там, де вже є ваші зображення', blogH1: 'Кращі зображення, менше здогадок', contactH1: 'Контакти', privacyH1: 'Політика конфіденційності', termsH1: 'Умови використання' },
	},
	tr: {
		nav: { batch: 'Toplu boyutlandır', compress: 'Görsel sıkıştır', breakpoints: 'Breakpoint', guides: 'Rehberler', rss: 'RSS', language: 'Dil' },
		footer: { copy: 'Günlük işler için özel bir görsel boyutlandırıcı ve sıkıştırıcı.', tools: 'Araçlar', info: 'Bilgi', resizer: 'Görsel boyutlandır', batch: 'Toplu boyutlandır', compress: 'Görsel sıkıştır', breakpoints: 'Breakpoint oluşturucu', plugins: 'Eklentiler', guides: 'Rehberler', contact: 'İletişim', privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', note: 'İşleme tarayıcınızda kalır.' },
		pages: { homeH1: 'Görselleri yüklemeden boyutlandırın ve sıkıştırın', homeEyebrow: 'Gizlilik odaklı', homeStrong: 'Özel kalması gereken görseller için pratik bir araç.', compressH1: 'Görseli online sıkıştır', breakpointH1: 'Görsel breakpoint oluşturucu', pluginsH1: 'Image Resizer’ı görsellerinizin olduğu yerde kullanın', blogH1: 'Daha iyi görseller, daha az tahmin', contactH1: 'İletişim', privacyH1: 'Gizlilik Politikası', termsH1: 'Kullanım Şartları' },
	},
	pl: {
		nav: { batch: 'Zmiana wsadowa', compress: 'Kompresuj obraz', breakpoints: 'Breakpointy', guides: 'Poradniki', rss: 'RSS', language: 'Język' },
		footer: { copy: 'Prywatne narzędzie do zmiany rozmiaru i kompresji obrazów.', tools: 'Narzędzia', info: 'Informacje', resizer: 'Zmień rozmiar obrazu', batch: 'Zmiana wsadowa', compress: 'Kompresuj obraz', breakpoints: 'Generator breakpointów', plugins: 'Wtyczki', guides: 'Poradniki', contact: 'Kontakt', privacy: 'Polityka prywatności', terms: 'Warunki użycia', note: 'Przetwarzanie pozostaje w przeglądarce.' },
		pages: { homeH1: 'Zmieniaj rozmiar i kompresuj obrazy bez wysyłania', homeEyebrow: 'Prywatność w projekcie', homeStrong: 'Praktyczne narzędzie dla obrazów, które mają pozostać prywatne.', compressH1: 'Kompresuj obraz online', breakpointH1: 'Generator breakpointów obrazów', pluginsH1: 'Używaj Image Resizer tam, gdzie są Twoje obrazy', blogH1: 'Lepsze obrazy, mniej zgadywania', contactH1: 'Kontakt', privacyH1: 'Polityka prywatności', termsH1: 'Warunki użycia' },
	},
	nl: {
		nav: { batch: 'Batch resize', compress: 'Afbeelding comprimeren', breakpoints: 'Breakpoints', guides: 'Gidsen', rss: 'RSS', language: 'Taal' },
		footer: { copy: 'Een private afbeeldingsresizer en compressor voor dagelijks werk.', tools: 'Tools', info: 'Informatie', resizer: 'Afbeelding verkleinen', batch: 'Batch resize', compress: 'Afbeelding comprimeren', breakpoints: 'Breakpoint generator', plugins: 'Plugins', guides: 'Gidsen', contact: 'Contact', privacy: 'Privacybeleid', terms: 'Gebruiksvoorwaarden', note: 'De verwerking blijft in je browser.' },
		pages: { homeH1: 'Verklein en comprimeer afbeeldingen zonder upload', homeEyebrow: 'Privé ontworpen', homeStrong: 'Een praktische tool voor afbeeldingen die privé moeten blijven.', compressH1: 'Afbeelding online comprimeren', breakpointH1: 'Afbeelding breakpoint generator', pluginsH1: 'Gebruik Image Resizer waar je afbeeldingen al zijn', blogH1: 'Betere afbeeldingen, minder gokken', contactH1: 'Contact', privacyH1: 'Privacybeleid', termsH1: 'Gebruiksvoorwaarden' },
	},
	no: {
		nav: { batch: 'Batch endring', compress: 'Komprimer bilde', breakpoints: 'Breakpoints', guides: 'Guider', rss: 'RSS', language: 'Språk' },
		footer: { copy: 'Et privat verktøy for å endre størrelse og komprimere bilder.', tools: 'Verktøy', info: 'Informasjon', resizer: 'Endre bildestørrelse', batch: 'Batch endring', compress: 'Komprimer bilde', breakpoints: 'Breakpoint generator', plugins: 'Plugins', guides: 'Guider', contact: 'Kontakt', privacy: 'Personvern', terms: 'Vilkår for bruk', note: 'Behandlingen blir i nettleseren.' },
		pages: { homeH1: 'Endre størrelse og komprimer bilder uten opplasting', homeEyebrow: 'Privat av design', homeStrong: 'Et praktisk verktøy for bilder som skal forbli private.', compressH1: 'Komprimer bilde på nett', breakpointH1: 'Generator for bildebreakpoints', pluginsH1: 'Bruk Image Resizer der bildene dine allerede er', blogH1: 'Bedre bilder, mindre gjetting', contactH1: 'Kontakt', privacyH1: 'Personvern', termsH1: 'Vilkår for bruk' },
	},
	he: {
		nav: { batch: 'שינוי גודל באצווה', compress: 'דחיסת תמונה', breakpoints: 'נקודות שבירה', guides: 'מדריכים', rss: 'RSS', language: 'שפה' },
		footer: { copy: 'כלי פרטי לשינוי גודל ודחיסת תמונות לעבודה יומיומית.', tools: 'כלים', info: 'מידע', resizer: 'שינוי גודל תמונה', batch: 'שינוי גודל באצווה', compress: 'דחיסת תמונה', breakpoints: 'מחולל נקודות שבירה', plugins: 'תוספים', guides: 'מדריכים', contact: 'יצירת קשר', privacy: 'מדיניות פרטיות', terms: 'תנאי שימוש', note: 'העיבוד נשאר בדפדפן שלך.' },
		pages: { homeH1: 'שנו גודל ודחסו תמונות ללא העלאה', homeEyebrow: 'פרטי מהיסוד', homeStrong: 'כלי מעשי לתמונות שצריכות להישאר פרטיות.', compressH1: 'דחיסת תמונה אונליין', breakpointH1: 'מחולל נקודות שבירה לתמונות', pluginsH1: 'השתמשו ב-Image Resizer במקום שבו התמונות כבר נמצאות', blogH1: 'תמונות טובות יותר, פחות ניחושים', contactH1: 'יצירת קשר', privacyH1: 'מדיניות פרטיות', termsH1: 'תנאי שימוש' },
	},
	ar: {
		nav: { batch: 'تغيير جماعي', compress: 'ضغط الصورة', breakpoints: 'نقاط التوقف', guides: 'الأدلة', rss: 'RSS', language: 'اللغة' },
		footer: { copy: 'أداة خاصة لتغيير حجم الصور وضغطها في العمل اليومي.', tools: 'الأدوات', info: 'المعلومات', resizer: 'تغيير حجم الصورة', batch: 'تغيير جماعي', compress: 'ضغط الصورة', breakpoints: 'مولد نقاط التوقف', plugins: 'الإضافات', guides: 'الأدلة', contact: 'اتصل بنا', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', note: 'تظل المعالجة داخل متصفحك.' },
		pages: { homeH1: 'غيّر حجم الصور واضغطها بدون رفع', homeEyebrow: 'خصوصية منذ البداية', homeStrong: 'أداة عملية للصور التي يجب أن تبقى خاصة.', compressH1: 'ضغط الصورة عبر الإنترنت', breakpointH1: 'مولد نقاط توقف الصور', pluginsH1: 'استخدم Image Resizer حيث توجد صورك', blogH1: 'صور أفضل وتخمين أقل', contactH1: 'اتصل بنا', privacyH1: 'سياسة الخصوصية', termsH1: 'شروط الاستخدام' },
	},
};

const mergeDictionary = (locale: Locale): Dictionary => ({
	...en,
	...(overrides[locale] ?? {}),
	nav: { ...en.nav, ...(overrides[locale]?.nav ?? {}) },
	footer: { ...en.footer, ...(overrides[locale]?.footer ?? {}) },
	tool: { ...en.tool, ...(overrides[locale]?.tool ?? {}) },
	breakpointTool: { ...en.breakpointTool, ...(overrides[locale]?.breakpointTool ?? {}) },
	pages: { ...en.pages, ...(overrides[locale]?.pages ?? {}) },
});

export const getDictionary = (locale: Locale = defaultLocale) => mergeDictionary(locale);
