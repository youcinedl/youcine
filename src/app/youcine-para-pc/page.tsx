import Image from "next/image";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";

export const metadata = generateMeta(
  "YouCine para PC - Download Windows 10/11",
  "Aprenda como baixar e instalar o YouCine no seu PC Windows usando emuladores. Assista a filmes e séries em tela grande com qualidade 4K.",
  "youcine-para-pc"
);

export default function YouCinePCPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">YouCine para PC (Windows)</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Transforme seu computador em um cinema. Saiba como instalar o YouCine no seu PC com Windows de forma rápida e segura.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white">Como Instalar o YouCine no PC?</h2>
          <p className="text-slate-300">
            O YouCine é um aplicativo nativo para Android. No entanto, é muito simples utilizá-lo no seu computador (Windows 7, 8, 10 ou 11) utilizando um emulador de Android.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="YouCine na Tela" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="PC Setup" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Passo a Passo com BlueStacks</h3>
          <ol className="text-slate-300 space-y-4">
            <li><strong>Baixe o Emulador:</strong> Recomendamos o BlueStacks. Acesse o site oficial e instale no seu PC.</li>
            <li><strong>Baixe o APK do YouCine:</strong> Clique no botão de download nesta página para obter o arquivo APK seguro.</li>
            <li><strong>Instale no Emulador:</strong> Abra o BlueStacks, clique na opção "Instalar APK" na barra lateral e selecione o arquivo baixado.</li>
            <li><strong>Pronto:</strong> Após a instalação, o ícone do YouCine aparecerá na tela inicial do emulador. Clique para abrir e aproveite!</li>
          </ol>

          <div className="grid grid-cols-2 gap-4 my-8">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Supported Devices" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Monitor" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Vantagens de usar no PC</h3>
          <ul className="text-slate-300">
            <li><strong>Tela Maior:</strong> Assista a detalhes em filmes 4K que você perderia no celular.</li>
            <li><strong>Estabilidade:</strong> Conexão via cabo de rede garante menos travamentos.</li>
            <li><strong>Som Superior:</strong> Conecte seu Home Theater ou fones de ouvido de alta qualidade.</li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <DownloadCard 
              version="v1.17.6"
              size="36 MB"
              downloads="1M+"
              requirements="Windows 10/11 via Emulator"
              lastUpdate="Today"
              downloadLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
