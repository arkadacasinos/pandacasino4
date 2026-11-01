export default function HomePage() {
  const refLink = 'https://nymph-pahd4.com/adsrtcqlch'

  return (
    <div className="p4nd4-shell">
      {/* Top Header */}
      <header className="sticky top-0 z-40 h-16 bg-[#111418] border-b border-white/5 px-3 sm:px-6 flex items-center justify-between gap-3">
        {/* Left: Mobile menu anchor + Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#mobile-menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1f26] text-gray-300 hover:text-white"
            aria-label="Открыть меню Panda Casino"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          <a href={refLink} className="flex items-center gap-2.5 group">
            {/* Panda Icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-1.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-black">
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M12 7c-4.4 0-8 3.1-8 7 0 2.2 1.2 4.2 3.1 5.5.5.4 1.1.7 1.8.9 1 .3 2.1.6 3.1.6s2.1-.3 3.1-.6c.7-.2 1.3-.5 1.8-.9 1.9-1.3 3.1-3.3 3.1-5.5 0-3.9-3.6-7-8-7z" />
                <ellipse cx="8.5" cy="13.5" rx="1.5" ry="2" fill="white" />
                <ellipse cx="15.5" cy="13.5" rx="1.5" ry="2" fill="white" />
                <circle cx="8.5" cy="13.8" r="0.9" fill="black" />
                <circle cx="15.5" cy="13.8" r="0.9" fill="black" />
                <ellipse cx="12" cy="16.5" rx="1.2" ry="0.8" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight leading-none text-white">
                PANDA <span className="text-amber-400">CASINO</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">
                Официальный сайт
              </span>
            </div>
          </a>
        </div>

        {/* Search input in header (matches screenshot 2) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-4">
          <a
            href={refLink}
            className="w-full h-10 px-4 rounded-xl bg-[#1a1f26] border border-white/5 flex items-center gap-3 text-sm text-gray-400 hover:border-white/10 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Искать игры в Panda Casino...</span>
          </a>
        </div>

        {/* Right Auth buttons (matches screenshot 2: Вход + Регистрация) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={refLink}
            className="p4nd4-btn-secondary h-10 px-4 sm:px-6 text-xs sm:text-sm tracking-wide"
          >
            Вход
          </a>
          <a
            href={refLink}
            className="p4nd4-btn-primary h-10 px-4 sm:px-6 text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Layout: Left Sidebar + Content Area */}
      <div className="p4nd4-layout">
        {/* Left vertical sidebar rail (desktop, matching screenshot 2) */}
        <aside className="p4nd4-sidebar hidden md:flex">
          <a
            href={refLink}
            title="Panda Casino Главная"
            className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="2.5" />
              <circle cx="18" cy="6" r="2.5" />
              <path d="M12 8c-4 0-7 2.5-7 6 0 3 2.5 5 7 5s7-2 7-5c0-3.5-3-6-7-6z" />
            </svg>
          </a>
          <a
            href={refLink}
            title="Колесо фортуны"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="9" strokeWidth={2} />
              <path strokeWidth={2} d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
            </svg>
          </a>
          <a
            href={refLink}
            title="Бонусы и мешок подарков"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </a>
          <a
            href={refLink}
            title="Скачать приложение Panda Casino"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a
            href={refLink}
            title="VIP Клуб и турниры"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors relative"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </a>
          <a
            href={refLink}
            title="Акции и подарки"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </a>
          <a
            href={refLink}
            title="Магазин бонусов"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
          <a
            href={refLink}
            title="Новости и промокоды"
            className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </a>
          <div className="mt-auto flex flex-col gap-2">
            <a
              href={refLink}
              title="Миссии"
              className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="8" strokeWidth={2} />
                <circle cx="12" cy="12" r="4" strokeWidth={2} />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={refLink}
              title="Слоты 777"
              className="w-10 h-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
            >
              <span className="text-xs font-black text-amber-400">777</span>
            </a>
          </div>
        </aside>

        {/* Central main content */}
        <main className="p4nd4-main px-3 sm:px-6 py-4 sm:py-6 gap-6">
          {/* SCREEN 1: BANNERS ROW (Exact replica of Screenshot 2) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Hero Banner: Panda Mascot + Bonus (col-span-12 lg:col-span-6) */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c221a] via-[#0f2e22] to-[#0a1a14] border border-emerald-500/20 p-5 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] shadow-2xl">
              {/* Panda image positioned on the right */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none flex items-end justify-end">
                <img
                  src="/panda-hero.png"
                  alt="Panda Casino Mascot с пачками денег"
                  className="max-h-full object-contain object-bottom drop-shadow-2xl scale-110 sm:scale-125 origin-bottom-right"
                />
              </div>

              {/* Banner text content */}
              <div className="relative z-10 max-w-[62%] sm:max-w-[60%] flex flex-col gap-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400">
                  БОНУС
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-white leading-none tracking-tight">
                  <span className="text-emerald-400">ДО 225%</span>{' '}
                  <span className="text-white text-lg sm:text-2xl">+1500ФС</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  на первый депозит в Panda Casino
                </p>

                <div className="pt-2 sm:pt-3">
                  <a
                    href={refLink}
                    className="p4nd4-btn-primary h-11 px-6 sm:px-8 text-sm font-black shadow-xl shadow-amber-500/30 uppercase tracking-wide inline-flex"
                  >
                    Забрать бонус
                  </a>
                </div>
              </div>

              {/* Payment badges at bottom */}
              <div className="relative z-10 pt-4 flex items-center flex-wrap gap-3 sm:gap-4 text-xs font-semibold text-gray-400 border-t border-white/5 mt-4">
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  СБП
                </span>
                <span className="text-white font-bold">S Pay</span>
                <span className="text-emerald-400 font-black tracking-wider">МИР</span>
                <span className="text-gray-300">TRON</span>
                <span className="text-emerald-300">Tether USDT</span>
              </div>
            </div>

            {/* Banner 2: МИССИИ (Target icon) (col-span-12 sm:col-span-6 lg:col-span-3) */}
            <a
              href={refLink}
              className="sm:col-span-6 lg:col-span-3 p4nd4-card relative overflow-hidden p-6 flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[290px] group hover:border-amber-400/40 transition-all"
            >
              <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-gray-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-gray-600/70 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber-400" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                МИССИИ
              </h3>
              <p className="text-xs text-gray-400 mt-1">Выполняй задания и получай кэш</p>
            </a>

            {/* Banner 3: МАГАЗИН БОНУСОВ (Gift Bag icon) (col-span-12 sm:col-span-6 lg:col-span-3) */}
            <a
              href={refLink}
              className="sm:col-span-6 lg:col-span-3 p4nd4-card relative overflow-hidden p-6 flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[290px] group hover:border-amber-400/40 transition-all"
            >
              <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />
              <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform text-gray-500 group-hover:text-amber-400 transition-colors">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  <polygon points="12,13 13.2,15.5 16,15.8 14,17.7 14.5,20.4 12,19.1 9.5,20.4 10,17.7 8,15.8 10.8,15.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider leading-tight">
                МАГАЗИН<br />БОНУСОВ
              </h3>
              <p className="text-xs text-gray-400 mt-1">Обменивай баллы на фриспины</p>
            </a>
          </section>

          {/* SCREEN 1: WINNERS TICKER BAR (Live Wins Ticker from Screenshot 2) */}
          <section className="p4nd4-card p-2 sm:p-2.5 overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto p4nd4-no-scrollbar">
              {[
                { game: 'Fiesta Fortune', user: '@jdi***59', win: '1 808 ₽', color: 'from-amber-600 to-red-600' },
                { game: 'Big Bass 1000', user: 'user***38', win: '1 075 ₽', color: 'from-blue-600 to-cyan-600' },
                { game: 'Princess Frog', user: 'user***71', win: '1 340 ₽', color: 'from-emerald-600 to-teal-600' },
                { game: 'More Magic Apple', user: 'user***91', win: '438 ₽', color: 'from-red-600 to-amber-600' },
                { game: 'More Magic Apple', user: 'user***91', win: '525 ₽', color: 'from-red-600 to-amber-600' },
                { game: 'Battleground', user: 'user***35', win: '571 ₽', color: 'from-gray-700 to-gray-900' },
                { game: 'Gates of Olympus', user: 'user***66', win: '480 ₽', color: 'from-purple-600 to-indigo-600' },
                { game: 'Burning Coins 40', user: 'user***93', win: '580 ₽', color: 'from-orange-600 to-red-600' },
                { game: 'Joker Jewels', user: 'user***54', win: '1 500 ₽', color: 'from-indigo-600 to-purple-600' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={refLink}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0f1216] border border-white/5 hover:border-amber-400/30 flex-shrink-0 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${item.color} flex items-center justify-center text-[10px] font-black text-white shadow`}>
                    🎰
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[11px] text-gray-400">{item.user}</span>
                    <span className="text-xs font-bold text-emerald-400">{item.win}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* SCREEN 1: SEARCH & CATEGORIES TABS (Matches Screenshot 2) */}
          <section className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Search bar */}
              <a
                href={refLink}
                className="flex-1 relative h-11 px-10 rounded-xl bg-[#161a1f] border border-white/5 flex items-center text-sm text-gray-500 hover:border-amber-400/40 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Искать игры</span>
              </a>

              {/* Провайдеры button */}
              <a
                href={refLink}
                className="h-11 px-4 sm:px-5 rounded-xl bg-[#161a1f] border border-white/5 hover:border-white/10 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-200 transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span>Провайдеры</span>
              </a>
            </div>

            {/* Horizontal category chips */}
            <div className="flex items-center gap-2 overflow-x-auto p4nd4-no-scrollbar py-1">
              {[
                { label: 'Слоты', icon: '777', active: true },
                { label: 'Горячие', icon: '🔥', active: false },
                { label: 'Новые', icon: '✨', active: false },
                { label: 'Топ', icon: '💎', active: false },
                { label: 'Претенденты', icon: '🎯', active: false },
                { label: 'Отыгрыш бонуса', icon: '🎁', active: false },
                { label: 'Джекпот', icon: '⚡', active: false },
                { label: 'Лайв', icon: '🎲', active: false },
              ].map((cat, idx) => (
                <a
                  key={idx}
                  href={refLink}
                  className={`h-9 px-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 flex-shrink-0 transition-all ${
                    cat.active
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                      : 'bg-[#161a1f] text-gray-300 hover:text-white border border-white/5 hover:border-white/10'
                  }`}
                >
                  <span className="text-xs">{cat.icon}</span>
                  <span>{cat.label}</span>
                </a>
              ))}
            </div>
          </section>

          {/* QUICK POPULAR SLOTS PREVIEW (Direct access before the SEO text) */}
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'Gates of Olympus 1000', provider: 'Pragmatic Play', rtp: '96.5%', tag: 'ТОП' },
              { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.48%', tag: 'ХИТ' },
              { name: 'Big Bass Splash', provider: 'Reel Kingdom', rtp: '96.71%', tag: 'БОНУС' },
              { name: 'The Dog House Megaways', provider: 'Pragmatic Play', rtp: '96.55%', tag: 'ГОРЯЧЕЕ' },
              { name: 'Book of Ra Deluxe', provider: 'Novomatic', rtp: '95.1%', tag: 'КЛАССИКА' },
              { name: 'Sun of Egypt 3', provider: '3 Oaks Gaming', rtp: '95.6%', tag: 'ДЖЕКПОТ' },
            ].map((slot, idx) => (
              <a
                key={idx}
                href={refLink}
                className="p4nd4-card p-3 flex flex-col justify-between group hover:border-amber-400/40 transition-all h-36 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {slot.tag}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">{slot.rtp}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {slot.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 line-clamp-1">{slot.provider}</p>
                </div>
                <div className="w-full py-1 text-center bg-white/5 rounded text-[11px] font-bold text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                  Играть
                </div>
              </a>
            ))}
          </section>

          {/* SEO ARTICLE: 300-400+ WORDS PROSE WITH TARGET KEYWORDS (Ниже первого экрана) */}
          <article className="p4nd4-card p-5 sm:p-8 flex flex-col gap-6 text-gray-300 leading-relaxed text-sm sm:text-base border border-white/5">
            {/* Section 1 */}
            <section id="official" className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="text-amber-400">#</span> Panda Casino официальный сайт и рабочее зеркало
              </h2>
              <p>
                Добро пожаловать в игровой клуб Panda Casino — современную игровую платформу, завоевавшую признание тысяч пользователей. Panda Casino официальный сайт предоставляет надежный круглосуточный доступ ко всем популярным азартным развлечениям, сертифицированным слотам и столам с живыми дилерами. Если основной адрес временно недоступен из-за блокировок провайдеров, вам всегда поможет надежное Panda Casino зеркало. Наше актуальное зеркало полностью дублирует весь функционал платформы, обеспечивая моментальный вход в личный кабинет, сохранность средств на балансе и стабильный доступ к игровым автоматам в любое время суток.
              </p>
            </section>

            {/* Section 2 */}
            <section id="mirror" className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="text-amber-400">#</span> Панда Казино зеркало рабочее для безопасного входа
              </h2>
              <p>
                Для постоянных и новых посетителей Панда Казино зеркало рабочее является быстрым и безопасным решением для обхода любых сетевых ограничений. Переходя через официальное панда казино зеркало, вы не заметите никакой разницы в скорости работы или графике: здесь действуют те же бонусы, доступны мгновенные депозиты через СБП, карты МИР и криптовалюты, а также моментальные выплаты выигрышей. Чтобы найти актуальное панда казино зеркало рабочее, достаточно воспользоваться ссылками на этой странице — переход всегда направляет на сертифицированный защищенный шлюз.
              </p>
            </section>

            {/* Section 3 */}
            <section id="play" className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="text-amber-400">#</span> В Panda Casino играть на реальные деньги и бесплатно
              </h2>
              <p>
                Каждый совершеннолетний пользователь может в Panda Casino играть на реальные деньги либо протестировать любые видеослоты в бесплатном демонстрационном режиме. Популярное панда казино играть приглашает как новичков с минимальным депозитом от 100 рублей, так и опытных хайроллеров. В каталоге собраны тысячи лицензионных автоматов от ведущих мировых провайдеров: Pragmatic Play, 3 Oaks, Novomatic, Amusnet и Play’n GO. Запуская в панда казино играть свои любимые аппараты, вы получаете честный процент отдачи RTP до 97% и регулярные шансы сорвать внушительный джекпот.
              </p>
            </section>

            {/* Section 4 */}
            <section id="online" className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="text-amber-400">#</span> Панда Казино онлайн: бонусы и регистрация за минуту
              </h2>
              <p>
                Современное панда казино онлайн дарит каждому новому игроку щедрый приветственный пакет: бонус до 225% на первый депозит и до 1500 фриспинов на хитовые слоты. Авторизоваться в panda казино можно всего за одну минуту по номеру телефона или через популярные социальные сети. Программа лояльности панда казино включает еженедельный кэшбэк до 15%, турниры с призовыми фондами в миллионы рублей, систему увлекательных миссий и эксклюзивный магазин бонусов с фриспинами.
              </p>
            </section>

            {/* Section 5 */}
            <section id="about" className="flex flex-col gap-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="text-amber-400">#</span> Панда Казино официальный сайт с поддержкой 24/7
              </h2>
              <p>
                Выбирая панда казино официальный сайт, вы доверяете лицензированному бренду с прозрачными правилами и оперативной службой поддержки. Независимо от того, используете ли вы Panda Casino официальный или заходите через панда казино официальный, сервис функционирует одинаково быстро на смартфонах и ПК. Переходите по кнопкам входа или регистрации прямо сейчас, активируйте приветственный бонус и выигрывайте вместе с Panda Casino!
              </p>
            </section>

            {/* Call to action inside text */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">Готовы начать игру в Panda Casino?</span>
                <span className="text-xs text-gray-400">Регистрация займет меньше минуты, бонус до 225% доступен сразу!</span>
              </div>
              <a
                href={refLink}
                className="p4nd4-btn-primary h-11 px-6 text-sm font-bold uppercase tracking-wider flex-shrink-0"
              >
                Начать играть
              </a>
            </div>
          </article>

          {/* FOOTER: SEO Hashtags built from target phrases + Copyright */}
          <footer className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4 text-xs text-gray-500">
            {/* Hashtags section linking to sections */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                Быстрая навигация по сайту:
              </span>
              <div className="flex flex-wrap gap-2">
                <a href="#official" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_casino
                </a>
                <a href="#mirror" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_casino_зеркало
                </a>
                <a href="#play" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_casino_играть
                </a>
                <a href="#official" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_casino_официальный
                </a>
                <a href="#official" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_casino_официальный_сайт
                </a>
                <a href="#official" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #panda_казино
                </a>
                <a href="#official" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино
                </a>
                <a href="#mirror" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_зеркало
                </a>
                <a href="#mirror" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_зеркало_рабочее
                </a>
                <a href="#play" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_играть
                </a>
                <a href="#online" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_онлайн
                </a>
                <a href="#about" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_официальный
                </a>
                <a href="#about" className="px-2.5 py-1 rounded bg-[#161a1f] border border-white/5 hover:border-amber-400/30 text-gray-400 hover:text-amber-400 transition-colors">
                  #панда_казино_официальный_сайт
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
              <p>© 2026 Panda Casino. Все права защищены. 18+</p>
              <p className="text-[11px] text-gray-500">
                Лицензированные слоты и онлайн игры. Играйте ответственно.
              </p>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Chat Button (Bottom Right, matching screenshot 2) */}
      <a
        href={refLink}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform"
        aria-label="Онлайн чат поддержки Panda Casino"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      </a>

      {/* Pure-CSS Mobile Drawer Menu via :target */}
      <div id="mobile-menu" className="fixed inset-0 z-50 pointer-events-none opacity-0 target:opacity-100 target:pointer-events-auto transition-opacity duration-200">
        {/* Scrim backdrop */}
        <a href="#!" className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-label="Закрыть меню" />

        {/* Drawer container */}
        <div className="absolute top-0 bottom-0 left-0 w-72 bg-[#111418] border-r border-white/10 p-5 flex flex-col gap-5 overflow-y-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center p-1 font-black text-black">
                🐼
              </div>
              <span className="font-black text-white text-base">PANDA CASINO</span>
            </div>
            <a href="#!" className="w-8 h-8 rounded-lg bg-[#1a1f26] text-gray-400 hover:text-white flex items-center justify-center">
              ✕
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <a href={refLink} className="p4nd4-btn-primary h-10 w-full text-sm">
              Регистрация
            </a>
            <a href={refLink} className="p4nd4-btn-secondary h-10 w-full text-sm">
              Вход в аккаунт
            </a>
          </div>

          <nav className="flex flex-col gap-1 border-t border-white/5 pt-4 text-sm font-semibold text-gray-300">
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>🎰</span> Слоты и автоматы
            </a>
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>🎯</span> Миссии и задания
            </a>
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>🎁</span> Магазин бонусов
            </a>
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>⚡</span> Турниры и джекпоты
            </a>
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>📱</span> Скачать приложение
            </a>
            <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 flex items-center gap-3">
              <span>💬</span> Поддержка 24/7
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
