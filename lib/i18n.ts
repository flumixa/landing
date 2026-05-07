export type Lang = "en" | "ru";

export type FeatureIcon =
  | "radio-tower"
  | "sliders"
  | "circle-dot"
  | "calendar-clock"
  | "split"
  | "wifi";

export type OsIcon = "apple" | "windows" | "linux";

export interface Dict {
  nav: { features: string; screenshots: string; install: string; roadmap: string; faq: string };
  cta: { download: string; github: string; issues: string; getStarted: string };
  hero: {
    pill_beta: string; pill_free: string;
    h1_pre: string; h1_grad: string; lede: string;
    cta_primary: string; cta_secondary: string;
    meta_platforms: string; meta_size: string; meta_lang: string;
  };
  features: {
    eyebrow: string; title: string; sub: string;
    items: Array<{ icon: FeatureIcon; t: string; d: string }>;
  };
  quickstart: {
    eyebrow: string; title: string; sub: string;
    steps: Array<{ t: string; d: string }>;
  };
  shots: {
    eyebrow: string; title: string; sub: string;
    rows: Array<{ t: string; d: string; features: string[] }>;
  };
  beta: {
    badge: string; title: string; body: string;
    cta_download: string; cta_issues: string;
  };
  reqs: {
    eyebrow: string; title: string; sub: string;
    head: { os: string; ver: string; notes: string };
    rows: Array<{ os: string; icon: OsIcon; ver: string; notes: string }>;
    foot: string;
  };
  download: {
    eyebrow: string; title: string; sub: string;
    cards: Array<{ os: string; icon: OsIcon; arch: string; desc: string; file: string }>;
    docs: string;
  };
  roadmap: {
    eyebrow: string; title: string; sub: string;
    near_h: string; mid_h: string;
    near: string[]; mid: string[];
  };
  faq: {
    eyebrow: string; title: string;
    items: Array<{ q: string; a: string }>;
  };
  finalcta: { title: string; sub: string; cta_dl: string; cta_gh: string };
  footer: {
    tagline: string;
    product_h: string; community_h: string; docs_h: string;
    product: Array<[string, string]>;
    community: Array<[string, string]>;
    docs: Array<[string, string]>;
    copy: string; version: string;
  };
}

export const DICT: Record<Lang, Dict> = {
  en: {
    nav: { features: "Features", screenshots: "Screenshots", install: "Install", roadmap: "Roadmap", faq: "FAQ" },
    cta: { download: "Download", github: "GitHub", issues: "Report issue", getStarted: "Get started" },
    hero: {
      pill_beta: "Public beta",
      pill_free: "Free during beta",
      h1_pre: "Multi-stream broadcasting,",
      h1_grad: "on your machine",
      lede: "Pull RTMP from any encoder, mix audio across cameras, record locally, schedule automations, and broadcast to YouTube, Twitch, Kick — all at once. Cross-platform desktop. No cloud lock-in.",
      cta_primary: "Download free",
      cta_secondary: "View on GitHub",
      meta_platforms: "macOS · Windows · Linux",
      meta_size: "~150 MB",
      meta_lang: "EN / RU UI",
    },
    features: {
      eyebrow: "What it does",
      title: "A full broadcast pipeline in one app",
      sub: "Six capabilities that normally require three separate tools — running natively on your laptop or studio machine.",
      items: [
        { icon: "radio-tower", t: "Multiple inputs", d: "Accept RTMP from OBS, hardware encoders, or mobile. Loop local media files. Add as many sources as your machine can handle." },
        { icon: "sliders", t: "A/V mixer", d: "Pair video from one source with audio from another. Sync offset slider for lip-sync correction. No external mixer needed." },
        { icon: "circle-dot", t: "One-click recording", d: "Capture any source or mix to MP4. Custom output folder. Full broadcast quality, no transcoding penalty." },
        { icon: "calendar-clock", t: "Scheduler", d: "Automate one-shot or recurring weekly recordings and broadcasts. Set it once, forget about it." },
        { icon: "split", t: "Multi-destination", d: "Push the same stream to YouTube, Twitch, Kick, Restream, or any custom RTMP target — simultaneously, from one machine." },
        { icon: "wifi", t: "LAN preview", d: "Flip a switch to publish a low-latency HLS feed over your local network. Scan a QR code from any phone or iPad to monitor." },
      ],
    },
    quickstart: {
      eyebrow: "Quick start",
      title: "Live in four steps",
      sub: "From a fresh install to broadcasting on YouTube — under five minutes.",
      steps: [
        { t: "Add a source", d: "Sources → Add source. Name it, pick RTMP ingest or local file." },
        { t: "Point your encoder", d: "Copy the publish URL into OBS Stream settings. Source goes live in ~3 seconds." },
        { t: "Add a destination", d: "Destinations → Add destination. Pick YouTube, Twitch, Kick. Paste your stream key." },
        { t: "Hit Go live", d: "One button in the top bar. Stream pushes to every destination at once." },
      ],
    },
    shots: {
      eyebrow: "In the app",
      title: "Built for operators, not marketers",
      sub: "Dense, technical, fast. Every value visible. No hidden modal chains.",
      rows: [
        { t: "Sources & live preview", d: "See every input at a glance — RTMP ingests, USB cameras, screen captures, media files. Click any source for a real-time preview.", features: ["Per-source FPS / bitrate / dropped-frame counters", "Hot-swap audio/video without restarting the stream", "Drag to reorder, right-click for advanced options"] },
        { t: "Multi-destination broadcasting", d: "Add YouTube, Twitch, Kick, Restream, or any custom RTMP target. Each shows independent connection status, bitrate, and uptime — push to all simultaneously.", features: ["Per-destination connection health", "Reconnect logic with exponential backoff", "Stream key validation before going live"] },
        { t: "Recordings & scheduler", d: "Record any source or mix to disk with one click. Schedule one-shot or recurring weekly events. Output folder of your choice.", features: ["Native MP4 — no transcoding penalty", "Full broadcast quality preserved", "Crash-resistant: partial files remain playable"] },
      ],
    },
    beta: {
      badge: "Public beta",
      title: "Free during beta. Honest about what works.",
      body: "The core pipeline — ingest, mix, record, schedule, broadcast — works end-to-end. There are rough edges, occasional crashes, and breaking changes between versions. If something fails, attach your log and open an issue. We respond within a few days.",
      cta_download: "Download",
      cta_issues: "Open an issue",
    },
    reqs: {
      eyebrow: "Requirements",
      title: "Runs on what you already have",
      sub: "Lightweight installer, modest runtime. ~512 MB idle, ~1 GB while streaming.",
      head: { os: "Platform", ver: "Version", notes: "Notes" },
      rows: [
        { os: "macOS", icon: "apple", ver: "11 Big Sur+", notes: "Apple Silicon (arm64) only for now. Intel build returning soon." },
        { os: "Windows", icon: "windows", ver: "10 / 11", notes: "x64. Run the .exe; SmartScreen may warn — choose “Run anyway”." },
        { os: "Linux", icon: "linux", ver: "glibc 2.31+", notes: "Debian 11+, Ubuntu 20.04+, Fedora 33+, RHEL 9+. Requires libwebkit2gtk-4.1." },
      ],
      foot: "Disk: ~150 MB for the app · Free space scaled to your recordings.",
    },
    download: {
      eyebrow: "Install",
      title: "Pick your platform",
      sub: "Latest release on GitHub. Detailed install steps in the docs.",
      cards: [
        { os: "macOS", icon: "apple", arch: "arm64 · Apple Silicon", desc: "Tar archive. Strip the quarantine flag once, drag to /Applications, launch.", file: "FlumixaMediaServer-macos-arm64.tar.gz" },
        { os: "Windows", icon: "windows", arch: "x64 · 10 / 11", desc: "Zip archive. Extract anywhere, run FlumixaMediaServer.exe. Allow through SmartScreen.", file: "FlumixaMediaServer-windows-amd64.zip" },
        { os: "Linux", icon: "linux", arch: "amd64 · webkit2gtk-4.1", desc: "Tar archive. Install libwebkit2gtk-4.1-0, extract, run the binary.", file: "FlumixaMediaServer-linux-amd64.tar.gz" },
      ],
      docs: "Full install instructions on GitHub →",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "What’s coming",
      sub: "Early adopters shape what gets built first. Have something specific you need? Open a feature request.",
      near_h: "Near-term",
      mid_h: "Mid-term",
      near: [
        "macOS code signing + notarization (no more xattr workaround)",
        "Universal macOS binary (Intel + Apple Silicon)",
        "Windows NSIS installer with Start Menu entry",
        "In-app update notifier",
      ],
      mid: [
        "Cloud relay tier (paid)",
        "Audio-only output mode for podcast workflows",
        "Stream-key health check before going live",
        "VOD post-recording auto-upload",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        { q: "Is it really free?", a: "During public beta — yes, fully free with no limits. Eventually FMS will move to a freemium model. The free tier will retain core mixing, streaming, and recording. Pro features under consideration: cloud relay, advanced scheduling, transcoding presets, monitoring dashboard." },
        { q: "How does this compare to OBS?", a: "OBS is a single-machine production switcher with a scene composer. FMS is a media server: it ingests RTMP from upstream encoders (which can include OBS), mixes/records/schedules them, and pushes to multiple destinations. OBS handles your scene; FMS orchestrates the pipeline." },
        { q: "Why is the macOS app “damaged”?", a: "It isn’t — the binary just isn’t notarized yet. macOS quarantines anything downloaded from the internet that isn’t signed. Run <code>xattr -dr com.apple.quarantine \"/Applications/Flumixa Media Server.app\"</code> once and it launches normally. Signing is on the near-term roadmap." },
        { q: "Where are recordings saved?", a: "A folder you choose, set in Recordings → Change folder. Default is your OS’s Videos directory. Files are written as native MP4 with full broadcast quality — no re-encoding step, so output bitrate matches input." },
        { q: "How many destinations can I push to at once?", a: "No hard limit. The practical cap is your upstream bandwidth — each destination gets the full encoded stream. A 6 Mbps stream to four destinations needs ~24 Mbps upload." },
        { q: "Where can I report bugs or request features?", a: "GitHub issues. Each report should include OS + version, FMS version (in About), repro steps, and the contents of <code>app.log</code> (path is in the install docs). We respond within a few days." },
      ],
    },
    finalcta: {
      title: "Try it tonight.",
      sub: "No account, no signup, no telemetry. Download, run, broadcast.",
      cta_dl: "Download free",
      cta_gh: "Star on GitHub",
    },
    footer: {
      tagline: "A free, cross-platform desktop app for broadcasting to many places at once.",
      product_h: "Product",
      community_h: "Community",
      docs_h: "Docs",
      product: [["Features", "#features"], ["Screenshots", "#screenshots"], ["Roadmap", "#roadmap"], ["Download", "#install"]],
      community: [["GitHub", "https://github.com/flumixa/fms"], ["Issues", "https://github.com/flumixa/fms/issues"], ["Releases", "https://github.com/flumixa/fms/releases"]],
      docs: [["Install guide", "https://github.com/flumixa/fms#installation"], ["Quick start", "https://github.com/flumixa/fms#quick-start"], ["FAQ", "#faq"]],
      copy: "© 2026 Alexander Sharapov. All rights reserved.",
      version: "Public beta · v0.1",
    },
  },

  ru: {
    nav: { features: "Возможности", screenshots: "Скриншоты", install: "Установка", roadmap: "Дорожная карта", faq: "FAQ" },
    cta: { download: "Скачать", github: "GitHub", issues: "Сообщить об ошибке", getStarted: "Начать" },
    hero: {
      pill_beta: "Публичная бета",
      pill_free: "Бесплатно во время беты",
      h1_pre: "Мультистриминг,",
      h1_grad: "на вашей машине",
      lede: "Принимайте RTMP с любого энкодера, миксуйте звук между камерами, пишите локально, ставьте задания по расписанию и вещайте на YouTube, Twitch, Kick — одновременно. Десктопное приложение для всех платформ. Без облачной привязки.",
      cta_primary: "Скачать бесплатно",
      cta_secondary: "GitHub",
      meta_platforms: "macOS · Windows · Linux",
      meta_size: "~150 МБ",
      meta_lang: "EN / RU интерфейс",
    },
    features: {
      eyebrow: "Что умеет",
      title: "Полный broadcast-конвейер в одном приложении",
      sub: "Шесть возможностей, для которых обычно нужны три отдельные программы — нативно, на вашем ноутбуке или студийной машине.",
      items: [
        { icon: "radio-tower", t: "Несколько входов", d: "Принимайте RTMP из OBS, аппаратных энкодеров или мобильных. Зацикливайте медиафайлы. Добавляйте столько источников, сколько потянет машина." },
        { icon: "sliders", t: "A/V микшер", d: "Соединяйте видео с одного источника со звуком с другого. Слайдер смещения для синхронизации губ. Внешний микшер не нужен." },
        { icon: "circle-dot", t: "Запись в один клик", d: "Сохраняйте любой источник или микс в MP4. Произвольная папка. Полное вещательное качество без транскодинга." },
        { icon: "calendar-clock", t: "Планировщик", d: "Автоматизируйте разовые или еженедельные записи и эфиры. Один раз настроил — забыл." },
        { icon: "split", t: "Много назначений", d: "Один поток на YouTube, Twitch, Kick, Restream и любой кастомный RTMP — одновременно, с одной машины." },
        { icon: "wifi", t: "LAN превью", d: "Включите тумблер — низколатентный HLS-фид по локальной сети. Сканируйте QR-код с телефона или iPad для мониторинга." },
      ],
    },
    quickstart: {
      eyebrow: "Быстрый старт",
      title: "В эфире за четыре шага",
      sub: "От установки до вещания на YouTube — меньше пяти минут.",
      steps: [
        { t: "Добавьте источник", d: "Sources → Add source. Имя, тип (RTMP ingest или файл)." },
        { t: "Направьте энкодер", d: "Скопируйте publish URL в настройки потока OBS. Источник появляется через ~3 секунды." },
        { t: "Добавьте назначение", d: "Destinations → Add destination. YouTube, Twitch, Kick. Вставьте stream key." },
        { t: "Жмите Go live", d: "Одна кнопка в верхней панели. Поток уходит на все назначения сразу." },
      ],
    },
    shots: {
      eyebrow: "В приложении",
      title: "Сделано для операторов, не для маркетологов",
      sub: "Плотный, технический, быстрый. Все значения видны. Без скрытых модальных цепочек.",
      rows: [
        { t: "Источники и live-превью", d: "Все входы как на ладони — RTMP, USB-камеры, захват экрана, медиафайлы. Клик по источнику — превью в реальном времени.", features: ["Счётчики FPS / битрейта / дропов на источник", "Hot-swap аудио и видео без перезапуска эфира", "Drag для перестановки, ПКМ для расширенных настроек"] },
        { t: "Вещание на несколько назначений", d: "YouTube, Twitch, Kick, Restream, любой кастомный RTMP. У каждого — независимый статус соединения, битрейт и uptime. Поток уходит на все сразу.", features: ["Статус соединения по каждому назначению", "Логика переподключения с экспоненциальным backoff", "Проверка stream key до выхода в эфир"] },
        { t: "Записи и расписание", d: "Запись любого источника или микса в один клик. Разовые или еженедельные задания. Папка вывода на ваш выбор.", features: ["Нативный MP4 — без транскодинга", "Полное вещательное качество сохраняется", "Устойчив к падениям: частичные файлы остаются воспроизводимыми"] },
      ],
    },
    beta: {
      badge: "Публичная бета",
      title: "Бесплатно во время беты. Честно про то, что работает.",
      body: "Базовый конвейер — приём, микс, запись, расписание, вещание — работает целиком. Есть шероховатости, иногда краши и breaking changes между версиями. Если что-то сломалось — приложите лог и заведите issue. Отвечаем за несколько дней.",
      cta_download: "Скачать",
      cta_issues: "Завести issue",
    },
    reqs: {
      eyebrow: "Требования",
      title: "Работает на том, что у вас уже есть",
      sub: "Лёгкий установщик, скромный runtime. ~512 МБ idle, ~1 ГБ во время эфира.",
      head: { os: "Платформа", ver: "Версия", notes: "Заметки" },
      rows: [
        { os: "macOS", icon: "apple", ver: "11 Big Sur+", notes: "Только Apple Silicon (arm64). Intel-сборка вернётся скоро." },
        { os: "Windows", icon: "windows", ver: "10 / 11", notes: "x64. Запустите .exe; SmartScreen может предупредить — выберите «Run anyway»." },
        { os: "Linux", icon: "linux", ver: "glibc 2.31+", notes: "Debian 11+, Ubuntu 20.04+, Fedora 33+, RHEL 9+. Нужен libwebkit2gtk-4.1." },
      ],
      foot: "Диск: ~150 МБ под приложение · Свободное место по объёму ваших записей.",
    },
    download: {
      eyebrow: "Установка",
      title: "Выберите платформу",
      sub: "Последний релиз на GitHub. Подробная инструкция — в документации.",
      cards: [
        { os: "macOS", icon: "apple", arch: "arm64 · Apple Silicon", desc: "Tar-архив. Снимите карантин один раз, перетащите в /Applications, запускайте.", file: "FlumixaMediaServer-macos-arm64.tar.gz" },
        { os: "Windows", icon: "windows", arch: "x64 · 10 / 11", desc: "Zip-архив. Распакуйте, запустите FlumixaMediaServer.exe. Разрешите через SmartScreen.", file: "FlumixaMediaServer-windows-amd64.zip" },
        { os: "Linux", icon: "linux", arch: "amd64 · webkit2gtk-4.1", desc: "Tar-архив. Установите libwebkit2gtk-4.1-0, распакуйте, запустите бинарь.", file: "FlumixaMediaServer-linux-amd64.tar.gz" },
      ],
      docs: "Полная инструкция на GitHub →",
    },
    roadmap: {
      eyebrow: "Дорожная карта",
      title: "Что впереди",
      sub: "Ранние пользователи определяют, что строить первым. Нужно что-то конкретное — заведите feature request.",
      near_h: "Ближайшее",
      mid_h: "Среднесрочное",
      near: [
        "Подпись и нотаризация под macOS (без xattr)",
        "Универсальный macOS-бинарь (Intel + Apple Silicon)",
        "Windows NSIS-инсталлятор с пунктом в Start Menu",
        "Уведомления об апдейтах в приложении",
      ],
      mid: [
        "Cloud relay (платный тариф)",
        "Audio-only режим для подкастов",
        "Проверка stream key до выхода в эфир",
        "Авто-загрузка VOD после записи",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы",
      items: [
        { q: "Это правда бесплатно?", a: "Во время публичной беты — да, без ограничений. Со временем FMS перейдёт на freemium. Бесплатный тариф сохранит микс, стриминг и запись. На рассмотрении: cloud relay, продвинутое расписание, пресеты транскодинга, мониторинг." },
        { q: "Чем это отличается от OBS?", a: "OBS — это однопрограммный продакшн-свитчер со сценами. FMS — медиа-сервер: принимает RTMP от внешних энкодеров (включая OBS), миксует, пишет, ставит расписание и пушит на много назначений. OBS строит сцену; FMS оркестрирует конвейер." },
        { q: "Почему macOS говорит «damaged»?", a: "Не «damaged» — просто бинарь пока не заверен Apple. macOS карантинит всё скачанное без подписи. Один раз выполните <code>xattr -dr com.apple.quarantine \"/Applications/Flumixa Media Server.app\"</code> — и запускается нормально. Подпись есть в ближайшем roadmap." },
        { q: "Куда сохраняются записи?", a: "В папку, которую вы выбрали в Recordings → Change folder. По умолчанию — системная Videos. Файлы пишутся в нативный MP4 без транскодинга, выходной битрейт совпадает с входным." },
        { q: "На сколько назначений можно вещать одновременно?", a: "Жёсткого лимита нет. Практический предел — ваш upload. Каждое назначение получает полный закодированный поток. 6 Мбит/с на 4 назначения — нужно ~24 Мбит/с upload." },
        { q: "Куда писать о багах и фичах?", a: "GitHub issues. К отчёту приложите ОС + версию, версию FMS (в About), шаги воспроизведения и содержимое <code>app.log</code>. Отвечаем за несколько дней." },
      ],
    },
    finalcta: {
      title: "Попробуйте сегодня вечером.",
      sub: "Без аккаунта, без регистрации, без телеметрии. Скачал, запустил, вещай.",
      cta_dl: "Скачать бесплатно",
      cta_gh: "Star на GitHub",
    },
    footer: {
      tagline: "Бесплатное кросс-платформенное десктопное приложение для вещания во много мест одновременно.",
      product_h: "Продукт",
      community_h: "Сообщество",
      docs_h: "Документация",
      product: [["Возможности", "#features"], ["Скриншоты", "#screenshots"], ["Дорожная карта", "#roadmap"], ["Скачать", "#install"]],
      community: [["GitHub", "https://github.com/flumixa/fms"], ["Issues", "https://github.com/flumixa/fms/issues"], ["Releases", "https://github.com/flumixa/fms/releases"]],
      docs: [["Установка", "https://github.com/flumixa/fms#installation"], ["Быстрый старт", "https://github.com/flumixa/fms#quick-start"], ["FAQ", "#faq"]],
      copy: "© 2026 Александр Шарапов. Все права защищены.",
      version: "Публичная бета · v0.1",
    },
  },
};
