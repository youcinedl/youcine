import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import DownloadCard from "@/components/ui/DownloadCard";
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Tv, 
  Apple, 
  Check, 
  X, 
  Star, 
  Info, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  Sliders, 
  Sparkles, 
  Play, 
  Settings, 
  HardDrive, 
  Layers, 
  Wifi,
  ChevronDown
} from "lucide-react";
import TroubleshootingAccordion from "../../components/ui/TroubleshootingAccordion";

export const metadata: Metadata = {
  title: "YouCine APK v1.17.6 para Android e TV Box – Grátis, Sem Anúncios, HD (2026)",
  description: "Baixe o YouCine APK v1.17.6 gratuitamente para Android, Smart TV, TV Box e PC. Assista filmes, séries, anime, esportes ao vivo e canais de TV em HD, sem anúncios e sem assinatura. Seguro e fácil de instalar!",
  alternates: {
    canonical: "https://youcine-dl.com/youcine-apk",
  },
  openGraph: {
    title: "YouCine APK v1.17.6 para Android e TV Box – Grátis, Sem Anúncios, HD (2026)",
    description: "Baixe o YouCine APK v1.17.6 gratuitamente para Android, Smart TV, TV Box e PC. Assista filmes, séries, anime, esportes ao vivo e canais de TV em HD, sem anúncios e sem assinatura. Seguro e fácil de instalar!",
    url: "https://youcine-dl.com/youcine-apk",
    type: "website",
  }
};

export default function YouCineApkPage() {
  const troubleshootingData = [
    {
      question: "Problema 1 — O App Não Instala",
      answer: "Ative a opção 'Fontes Desconhecidas' em Configurações > Segurança do seu dispositivo Android e tente instalar novamente."
    },
    {
      question: "Problema 2 — O App Fica Travando",
      answer: "Vá em Configurações > Apps > Youcine > Limpar Cache, ou desinstale o aplicativo e reinstale-o."
    },
    {
      question: "Problema 3 — Vídeos Travando ou Buffering",
      answer: "Fique mais perto do seu roteador WiFi, reduza a qualidade do vídeo nas configurações do player ou tente trocar o link do servidor."
    },
    {
      question: "Problema 4 — Legendas Fora de Sincronia",
      answer: "Ajuste o tempo das legendas diretamente nas configurações do player de vídeo durante a reprodução."
    },
    {
      question: "Problema 5 — App Não Aparece na Tela Inicial",
      answer: "Vá para a lista completa de aplicativos instalados, encontre o Youcine e arraste o ícone manualmente para a tela inicial."
    },
    {
      question: "Problema 6 — Conteúdo Bloqueado no Meu País",
      answer: "Baixe e ative um aplicativo de VPN gratuito da Google Play Store e conecte-se a um servidor em outro país (como o Brasil ou os EUA)."
    }
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      
      {/* 1. HERO HEADER SECTION */}
      <header className="relative w-full mb-16 sm:mb-20 text-center lg:text-left">
        <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-12 right-12 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-light">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span>YouCine APK v1.17.6 Atualizado 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              YouCine APK v1.17.6 <br/>
              <span className="text-gradient">para Android e TV Box</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              O Youcine APK TV é um aplicativo mundialmente famoso onde você encontra uma enorme coleção de filmes, séries de TV e outros conteúdos incríveis. Acesse a mídia mais recente em alta qualidade em um ambiente seguro.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-slate-400 font-semibold">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white">5M+ Usuários Ativos</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white">4K Resolução</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white">100% Gratuito</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5 text-base sm:text-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>Baixar APK Grátis</span>
              </a>
              <a href="#instalar-guia" className="btn-secondary flex items-center space-x-2 px-7 py-3.5 text-base">
                <span>Como Instalar</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <Image 
              src="/images/app_interface_1778387008367.png" 
              alt="YouCine APK Interface" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/20 border border-secondary/30 px-3 py-1 rounded-full">
                Versão Móvel e TV
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">Milhares de Títulos em HD e 4K</h3>
            </div>
          </div>
        </div>
      </header>

      {/* 2. QUICK NAVIGATION SECTION */}
      <section className="py-12 mb-16 bg-dark-800/30 border-y border-white/5 rounded-3xl">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Youcine APK v1.17.6 – Download para Android, TV, TV Box, PC e iOS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/youcine-apk" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-sm">
              <span className="text-xl mb-1">📱</span>
              <span>APK Android</span>
            </Link>
            <Link href="/youcine-para-pc" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-sm">
              <span className="text-xl mb-1">💻</span>
              <span>APK para PC</span>
            </Link>
            <Link href="/youcine-smart-tv" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-sm">
              <span className="text-xl mb-1">📺</span>
              <span>APK para TV</span>
            </Link>
            <Link href="/youcine-ios" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-2 rounded-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-lg shadow-[#fbbf24]/20 text-sm">
              <span className="text-xl mb-1">🍎</span>
              <span>APK para iOS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PAGE CONTENT LAYOUT: TWO COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12" id="download-section">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12 sm:space-y-16">
          
          {/* A. O QUE É O YOUCINE? */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">O Que é o Youcine?</h2>
            </div>
            <div className="glass-panel p-6 sm:p-8 space-y-4 border border-white/10">
              <p className="text-slate-350 text-base sm:text-lg leading-relaxed font-semibold text-primary-light">
                Cansado de pagar por aplicativos de streaming todo mês? Ou de ficar assistindo anúncios a cada 5 minutos?
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Sim, isso é muito chato. O Youcine resolve tudo isso. É completamente gratuito. Sem anúncios. Sem assinaturas. Basta escolher o que você quer assistir — filmes, séries, esportes, desenhos — e apertar play.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                E funciona onde você estiver. Sem programas bloqueados, sem restrições. Todo mundo tem acesso a tudo. É um aplicativo muito simples.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                O Youcine é um app gratuito onde você pode assistir quase tudo — filmes, séries de TV, desenhos, anime, esportes ao vivo e até canais de TV ao vivo. Tudo em um só lugar, sem cartão de crédito ou mensalidade.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Muitas pessoas usam o Youcine em vez da Netflix ou do Disney+ porque não querem pagar nada, mesmo tendo acesso a tudo na mesma plataforma fácil de usar e de graça.
              </p>
            </div>
          </section>

          {/* B. COMO O YOUCINE FUNCIONA? */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Como o Youcine Funciona?</h2>
            </div>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
              <p>
                Honestamente, é muito simples. Depois de instalar o aplicativo, você está pronto para usar. Sem cadastros, sem configurações complicadas — só abrir e começar a assistir.
              </p>
              <p>
                Quando você abre o Youcine, verá tudo organizado de forma clara — filmes, séries, desenhos, anime, esportes — todos separados por categorias. Então encontrar algo para assistir leva literalmente segundos.
              </p>
              <p>
                Não encontrou o que procura? Basta digitar na barra de pesquisa e pronto — aparece na hora.
              </p>
              <p>
                E se quiser ser ainda mais específico, o Youcine tem filtros também. Você pode ordenar por gênero, idioma, legendas ou até pelo ano de lançamento. Super útil quando você está com vontade de assistir algo específico mas não sabe exatamente o quê.
              </p>
            </div>
          </section>

          {/* C. O QUE É O YOUCINE APK? */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">O Que é o Youcine APK?</h2>
            </div>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
              <p>
                O Youcine APK é simplesmente um arquivo que permite instalar aplicativos que não estão na Google Play Store.
              </p>
              <p>
                Como o Youcine não está disponível na Play Store, você apenas baixa o arquivo APK de um site confiável como o <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link> e pronto.
              </p>
              <p>
                Depois de instalado, você tem acesso a tudo. Filmes, séries, desenhos, anime, esportes ao vivo, canais de TV ao vivo — tudo em qualidade HD. E completamente gratuito, sem anúncios pop-ups irritantes.
              </p>
              <p>
                Vai viajar sem WiFi? Sem problema. Você pode baixar qualquer filme ou episódio e assistir offline depois — no ônibus, no avião, na praia, em qualquer lugar. Tudo também está disponível em vários idiomas com legendas.
              </p>
            </div>
          </section>

          {/* D. RECURSOS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Recursos — Tudo Que Você Ganha de Graça</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {[
                { title: "🎬 Muito Conteúdo para Assistir", text: "Filmes, séries, desenhos, anime, esportes, TV ao vivo — o que você quiser. E novidades são adicionadas todos os dias." },
                { title: "📱 Funciona em Qualquer Dispositivo", text: "Celular, tablet, TV, TV Box ou PC — o Youcine funciona em todos eles." },
                { title: "🔥 Sempre em Qualidade HD", text: "Todo vídeo é reproduzido em HD. Se sua internet estiver lenta, o app se ajusta automaticamente para nunca travar." },
                { title: "🚫 Zero Anúncios", text: "Sem pop-ups. Sem anúncios antes do programa. Nada. Só relaxar e assistir." },
                { title: "😊 Muito Fácil de Usar", text: "Tudo organizado em categorias. Encontrar algo para assistir leva apenas alguns segundos." },
                { title: "🔍 Pesquisa e Filtros", text: "Digite qualquer coisa na barra de pesquisa e encontre rapidamente. Filtre por idioma, gênero, ano ou legendas." },
                { title: "⬇️ Baixe e Assista Offline", text: "Vai sair sem WiFi? Baixe seu programa ou filme antes de sair e assista em qualquer lugar." },
                { title: "🌍 Vários Idiomas e Legendas", text: "Assista no seu idioma. Legendas disponíveis também — ótimo para filmes estrangeiros." },
                { title: "✅ Não Precisa de Root", text: "Não precisa fazer nada complicado. Só baixar, instalar e abrir." },
                { title: "▶️ Funciona com Outros Players", text: "Prefere assistir com VLC ou MX Player? Sem problema — o Youcine funciona com eles também." },
                { title: "🔄 Sempre Melhorando", text: "O app é atualizado regularmente com novos recursos e correções." },
                { title: "📦 Tamanho Pequeno", text: "O app não ocupa muito espaço. Funciona perfeitamente até em celulares mais antigos." },
                { title: "👶 Seguro para Crianças", text: "Você pode ativar um filtro que bloqueia conteúdo adulto para as crianças usarem com segurança." },
                { title: "💰 Completamente Gratuito", text: "Sem assinatura. Sem cartão de crédito. Sem taxas ocultas. Tudo é 100% gratuito." }
              ].map((feat, index) => (
                <div key={index} className="glass-panel p-5 border border-white/5 hover:border-primary/20 transition-all duration-350 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">{feat.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* E. O QUE HÁ DE NOVO */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">O Que Há de Novo no Youcine v1.16.8?</h2>
            </div>
            <div className="glass-panel p-6 sm:p-8 border border-white/10 bg-dark-800/10 space-y-4">
              <p className="text-slate-350">Boa notícia — esta atualização torna o Youcine ainda melhor! Veja o que mudou:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">⚡</span>
                  <p><strong>Vídeos Carregam Mais Rápido:</strong> Esperar o vídeo carregar é muito chato. Esta atualização resolve isso. Os vídeos iniciam mais rápido e reproduzem mais suavemente, mesmo se o WiFi não for tão bom.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">📶</span>
                  <p><strong>Melhor Conexão, Menos Travamentos:</strong> O app agora se conecta a servidores melhores. Então seu filme ou série não vai parar ou travar no meio de uma boa cena.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">💬</span>
                  <p><strong>Legendas Agora Sincronizadas:</strong> Sabe quando as legendas aparecem cedo ou tarde demais? Muito frustrante, né? Isso foi corrigido. As palavras na tela agora combinam perfeitamente com o que está sendo dito.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">📺</span>
                  <p><strong>Muito Melhor no Android TV:</strong> Se você assiste em um Android TV, esta atualização é ótima. O app costumava travar às vezes — não mais. Tudo roda de forma suave e limpa. Acesse nosso guia específico para <Link href="/youcine-smart-tv" className="text-primary hover:underline font-semibold">YouCine para Smart TV</Link>.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">🔥</span>
                  <p><strong>Grande Vitória para Usuários do Firestick!</strong> Tem um Amazon Firestick? O app agora carrega mais rápido e roda melhor nele. Menos espera, menos erros, mais assistir.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">🎨</span>
                  <p><strong>Visual Mais Limpo e Fácil de Usar:</strong> Os menus passaram por uma renovação. Tudo é mais fácil de encontrar, de clicar, e ficou com uma aparência mais bonita no geral.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* F. PROS & CONTRAS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Prós e Contras do Youcine</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-dark-800/50 border border-emerald-500/30 p-6 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                  <span>✓</span> Prós
                </h3>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li><strong>Totalmente Gratuito para Sempre</strong> — Sem assinaturas ou taxas ocultas.</li>
                  <li><strong>Muito Conteúdo para Assistir</strong> — Biblioteca massiva de filmes, séries, anime e canais.</li>
                  <li><strong>Funciona em Quase Tudo</strong> — Compatível com celular, TV, PC e emuladores.</li>
                  <li><strong>Qualidade HD Cristalina</strong> — Playback em HD com ajuste automático de fluxo.</li>
                  <li><strong>Sem Anúncios</strong> — Zero comerciais irritantes e pop-ups.</li>
                  <li><strong>Baixe e Assista em Qualquer Lugar</strong> — Downloads rápidos para visualização offline.</li>
                  <li><strong>Assista no Seu Idioma</strong> — Múltiplos idiomas de áudio e legendas disponíveis.</li>
                  <li><strong>Tamanho Pequeno, Grande Desempenho</strong> — Ocupa pouco espaço no armazenamento.</li>
                  <li><strong>Seguro para Toda a Família</strong> — Filtros de controle parental eficientes.</li>
                </ul>
              </div>

              {/* Contras */}
              <div className="bg-gradient-to-br from-rose-900/40 to-dark-800/50 border border-rose-500/30 p-6 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                  <span>⚠️</span> Contras
                </h3>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li><strong>Fora das Lojas Oficiais</strong> — Você deve baixar manualmente o arquivo APK do site <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link>.</li>
                  <li><strong>Regras Regionais</strong> — É legal no Brasil, mas verifique as leis do seu país.</li>
                  <li><strong>Exige Internet Estável</strong> — Streaming em HD/4K precisa de uma conexão rápida.</li>
                  <li><strong>Cuidado com Fontes Falsas</strong> — Sempre baixe apenas de sites seguros e de confiança como o <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link>.</li>
                  <li><strong>Sem Suporte Oficial</strong> — Não há atendimento ao cliente corporativo disponível.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* G. O QUE VOCÊ PODE ASSISTIR */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">O Que Você Pode Assistir no Youcine? Tudo</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "🎬 Filmes de Hollywood", text: "Milhares de produções de ação, romance, comédia e ficção científica." },
                { title: "🎭 Filmes de Bollywood", text: "Uma enorme coleção de clássicos e novos sucessos hindus gratuitamente." },
                { title: "🌟 Filmes do Cinema Sul-Indiano", text: "Filmes em tâmil, telugu e malaiala dublados e com legendas." },
                { title: "💕 Doramas Coreanos", text: "K-Dramas de sucesso com legendas rápidas e precisas em português." },
                { title: "🐉 Doramas Chineses", text: "Coleção completa das séries chinesas mais populares do momento." },
                { title: "⚔️ Anime", text: "Vasta biblioteca de animações japonesas com opções dubladas e legendadas." },
                { title: "🧸 Desenhos para Crianças", text: "Conteúdo infantil educativo e desenhos clássicos em um ambiente seguro." },
                { title: "⚽ Esportes ao Vivo", text: "Futebol, críquete, UFC, basquete e tênis transmitidos ao vivo de graça." },
                { title: "📺 Canais de TV ao Vivo", text: "Canais globais de notícias, filmes, documentários e entretenimento." }
              ].map((cat, idx) => (
                <div key={idx} className="glass-panel p-5 border border-white/5 hover:-translate-y-1 transition-transform">
                  <h4 className="text-white font-bold text-base mb-2">{cat.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm">{cat.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H. COMO USAR O YOUCINE */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Como Usar o Youcine — Guia Fácil</h2>
            </div>
            <div className="glass-panel p-6 sm:p-8 border border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div><strong>🏠 Aba Início:</strong> Filmes recomendados e novidades da plataforma.</div>
                <div><strong>🔥 Seção Em Alta:</strong> Assista ao que todos estão vendo no momento.</div>
                <div><strong>📺 Aba TV ao Vivo:</strong> Emissoras globais transmitidas em tempo real.</div>
                <div><strong>⚽ Aba Esportes:</strong> Competições mundiais e jogos ao vivo grátis.</div>
                <div><strong>⬇️ Gerenciador de Downloads:</strong> Acesso rápido ao seu conteúdo offline.</div>
                <div><strong>💬 Legendas & Idiomas:</strong> Ajuste áudio e texto nas configurações do player.</div>
              </div>
              <div className="border-t border-white/5 pt-4 bg-yellow-500/10 p-4 rounded-xl">
                <h4 className="font-bold text-white mb-2">🚀 Dicas Rápidas antes de começar:</h4>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>Sempre comece explorando a aba Início para recomendações rápidas.</li>
                  <li>Baixe seus filmes favoritos antes de sair de casa para economizar dados.</li>
                  <li>Use a aba Esportes para acompanhar transmissões exclusivas nos dias de jogos.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* I. REQUISITOS DO SISTEMA */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Requisitos do Sistema</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>📱</span> Android
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Android 5.0+, 2GB RAM, 100MB livres, internet estável de 5Mbps+.
                </p>
              </div>
              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>📺</span> Smart TV / TV Box
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Android TV 5.0+, 2GB RAM, conexão WiFi/Ethernet de 10Mbps+.
                </p>
              </div>
              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>💻</span> PC
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Windows 7/8/10/11 ou macOS, emulador de Android (BlueStacks/LDPlayer). Veja nosso guia de <Link href="/youcine-para-pc" className="text-primary hover:underline font-semibold">YouCine para PC</Link>.
                </p>
              </div>
              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>🍎</span> iOS (iPhone/iPad)
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Não recomendado oficialmente. Use emuladores de IPA ou visite o guia de <Link href="/youcine-ios" className="text-primary hover:underline font-semibold">YouCine para iOS</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* J. COMO BAIXAR E INSTALAR */}
          <section className="space-y-6" id="instalar-guia">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Como Baixar e Instalar o Youcine</h2>
            </div>
            
            <div className="space-y-6 text-slate-300">
              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span>📱</span> Como Instalar no Celular Android
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  <li>Abra as Configurações &gt; Segurança &gt; Ative "Instalar de Fontes Desconhecidas".</li>
                  <li>Acesse o site <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link> e toque no botão de download.</li>
                  <li>Após o download, toque na notificação do APK e inicie a instalação.</li>
                  <li>Toque em "Abrir" e comece a assistir instantaneamente!</li>
                </ol>
              </div>

              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span>📺</span> Como Instalar na Smart TV Android
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  <li>Ative a opção "Instalar Apps de Fontes Desconhecidas" nas Configurações da sua TV.</li>
                  <li>Baixe o APK no computador, transfira para um pendrive e insira-o na TV, ou use o navegador nativo da TV para acessar o site.</li>
                  <li>Abra o Gerenciador de Arquivos da TV, encontre o arquivo APK e instale.</li>
                  <li>Encontre o ícone do Youcine na sua tela inicial e divirta-se!</li>
                </ol>
              </div>

              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🎛️</span> Como Instalar em TV Box
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  <li>Vá em Configurações &gt; Segurança e ative as "Fontes Desconhecidas".</li>
                  <li>Baixe o instalador pelo navegador nativo acessando o site <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link>.</li>
                  <li>Abra o Gerenciador de Arquivos &gt; pasta Downloads &gt; clique no arquivo APK e instale.</li>
                  <li>Inicie o app na lista de aplicativos e comece a usar!</li>
                </ol>
              </div>

              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span>💻</span> Como Instalar no PC ou Notebook
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  <li>Baixe e instale um emulador de Android (BlueStacks ou Nox Player).</li>
                  <li>Baixe o arquivo APK do Youcine em <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link>.</li>
                  <li>Arraste e solte o arquivo APK dentro da tela do emulador para instalá-lo de forma automática.</li>
                  <li>Abra o Youcine no emulador e configure suas preferências de visualização.</li>
                </ol>
              </div>

              <div className="glass-panel p-6 border border-white/5">
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🍎</span> E o iPhone ou iPad (iOS)?
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Precisamos ser completamente honestos: o Youcine não está disponível oficialmente na App Store para iPhones ou iPads. Não recomendamos realizar processos de jailbreak no seu aparelho Apple, pois isso compromete a segurança, anula a garantia oficial e expõe seu dispositivo a ameaças e vírus. Acesse nosso guia <Link href="/youcine-ios" className="text-primary hover:underline font-semibold">YouCine para iOS</Link> para saber mais sobre as alternativas.
                </p>
              </div>
            </div>
          </section>

          {/* K. SEGURANÇA E LEGALIDADE */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Segurança e Legalidade</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-panel p-6 border border-white/10 space-y-3">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                  <ShieldCheck className="text-green-400" /> É Seguro?
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Sim. O Youcine pede apenas permissões necessárias: acesso ao armazenamento (para salvar downloads) e acesso à internet (para transmitir vídeos). Ele NÃO requer acesso à sua câmera, contatos, localização ou microfone. Sempre baixe de <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link> para garantir um instalador verificado.
                </p>
              </div>

              <div className="glass-panel p-6 border border-white/10 space-y-3">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                  <AlertTriangle className="text-yellow-400" /> É Legal?
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  O Youcine é completamente legal no Brasil para visualização de conteúdo público e gratuito. No entanto, o aplicativo funciona como um indexador de links de terceiros. Sempre verifique as regras de direitos autorais de seu país antes de assistir a mídias protegidas por leis locais.
                </p>
              </div>
            </div>
          </section>

          {/* L. TROUBLESHOOTING */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Youcine Não Está Funcionando? Vamos Resolver!</h2>
            </div>
            <p className="text-slate-350 text-base">
              Se você tiver algum problema de funcionamento, use o nosso guia rápido interativo de soluções abaixo:
            </p>
            
            <TroubleshootingAccordion faqs={troubleshootingData} />
            
            <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-5 mt-4 text-sm text-slate-300">
              <strong>🚀 Lista Rápida de Soluções — Tente Primeiro!</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Feche o app completamente e abra novamente.</li>
                <li>Verifique sua conexão com a internet.</li>
                <li>Delete o aplicativo e reinstale uma cópia nova baixada do site <Link href="/" className="text-primary hover:underline font-semibold">youcine-dl.com</Link>.</li>
              </ul>
            </div>
          </section>

          {/* M. TRANSPARÊNCIA LEGAL */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Transparência Legal e Isenção de Responsabilidade</h2>
            </div>
            <div className="glass-panel p-6 border border-white/5 text-slate-400 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>🗄️ O Youcine não armazena nenhum vídeo em seus servidores — funciona puramente como um agregador de links da web, semelhante ao funcionamento do Google Search.</p>
              <p>⚖️ É de total responsabilidade do usuário final conhecer e respeitar as regras e regulamentos de direitos autorais do seu país de residência.</p>
              <p>✅ O Youcine respeita os direitos autorais e se compromete a remover conteúdos quando solicitado legalmente (em total conformidade com a DMCA).</p>
            </div>
          </section>

          {/* N. VERDICT AND RATINGS */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-8 bg-gradient-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Veredicto Final</h2>
            </div>
            <div className="glass-panel overflow-hidden border border-white/10 shadow-2xl">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-bold">
                    <th className="p-4 sm:p-5">Recurso</th>
                    <th className="p-4 sm:p-5 text-right">Avaliação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {[
                    { name: "Biblioteca de Conteúdo", stars: 5 },
                    { name: "Facilidade de Uso", stars: 5 },
                    { name: "Qualidade de Vídeo", stars: 5 },
                    { name: "Compatibilidade de Dispositivos", stars: 5 },
                    { name: "Custo-Benefício", stars: 5 },
                    { name: "Experiência Geral", stars: 5 }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold">{row.name}</td>
                      <td className="p-4 sm:p-5 text-right">
                        <div className="inline-flex items-center space-x-1 text-yellow-400">
                          {Array.from({ length: row.stars }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* O. CONCLUSION */}
          <section className="glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-r from-primary/15 via-secondary/5 to-transparent shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Conclusão</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                O Youcine é um aplicativo de streaming completamente gratuito que oferece acesso a milhares de filmes, séries, desenhos, anime, esportes ao vivo e canais de TV ao vivo — tudo em qualidade HD, sem anúncios, sem assinaturas e sem restrições. Funciona em quase todos os dispositivos, suporta vários idiomas e é incrivelmente fácil de usar. Basta baixá-lo com segurança em <Link href="/" className="text-primary hover:underline font-semibold font-bold">youcine-dl.com</Link>, instalar em minutos e curtir entretenimento ilimitado gratuitamente para sempre.
              </p>
              <div className="pt-6 flex justify-center sm:justify-start">
                <a href="#download-section" className="btn-primary flex items-center space-x-2 px-8 py-3.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Baixar YouCine APK v1.17.6</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Sticky Sidebar Component */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            
            {/* Main Download Card */}
            <DownloadCard 
              version="v1.17.6"
              size="36 MB"
              downloads="5M+"
              requirements="Android 4.4+"
              lastUpdate="Hoje"
              downloadLink="https://youcine-dl.com/download/youcine.apk"
            />
            
            {/* Safe platform badge list */}
            <div className="glass-panel p-5 border border-white/5 space-y-4 text-center sm:text-left">
              <h4 className="text-white font-extrabold text-base flex items-center justify-center sm:justify-start">
                <span className="w-2 h-4 bg-secondary rounded mr-2"></span>
                Links Relacionados
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Explore outros guias detalhados de configuração do YouCine para diferentes tipos de dispositivos em nossa plataforma:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-primary-light">
                <li>
                  <Link href="/youcine-para-pc" className="hover:underline flex items-center gap-2">
                    <span>💻</span> YouCine para Computador (PC)
                  </Link>
                </li>
                <li>
                  <Link href="/youcine-smart-tv" className="hover:underline flex items-center gap-2">
                    <span>📺</span> YouCine para Smart TV (Principal)
                  </Link>
                </li>
                <li>
                  <Link href="/youcine-para-smart-tv" className="hover:underline flex items-center gap-2">
                    <span>📺</span> YouCine para Smart TV (Alternativo)
                  </Link>
                </li>
                <li>
                  <Link href="/youcine-ios" className="hover:underline flex items-center gap-2">
                    <span>🍎</span> YouCine para iPhone / iOS
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </aside>
      </div>
    </article>
  );
}
