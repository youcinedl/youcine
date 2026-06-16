import Image from "next/image";
import Link from "next/link";
import { generateMeta } from "@/lib/metadata";
import DownloadCard from "@/components/ui/DownloadCard";

export const metadata = generateMeta(
  "YouCine para Smart TV (Android TV/TV Box)",
  "Baixe e instale o YouCine diretamente na sua Smart TV. Compatível com Android TV, Roku, e TV Box. Guia completo passo a passo.",
  "youcine-para-smart-tv"
);

export default function YouCineSmartTVPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">YouCine para Smart TV</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          A melhor experiência de cinema no conforto do seu sofá. Instale na sua TV Box ou Smart TV Android.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white">Guia de Instalação para Smart TV</h2>
          <p className="text-slate-300">
            Ter o YouCine na sua TV é a melhor forma de aproveitar filmes e séries em família. O processo é simples para TVs com sistema Android TV ou TV Box. Sempre baixe a versão oficial através do site <Link href="/" className="text-primary hover:underline font-semibold font-bold">youcine-dl.com</Link> para garantir a segurança dos seus dados. Se você deseja usar o aplicativo em outras plataformas ou ver guias alternativos, leia nossos guias sobre <Link href="/youcine-apk" className="text-primary hover:underline font-semibold">YouCine APK para celular</Link>, <Link href="/youcine-para-pc" className="text-primary hover:underline font-semibold">YouCine para computador (PC)</Link>, <Link href="/youcine-smart-tv" className="text-primary hover:underline font-semibold">YouCine para Smart TV (Guia Completo)</Link> ou <Link href="/youcine-ios" className="text-primary hover:underline font-semibold">YouCine para dispositivos iOS</Link>.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/hero_banner_1778386917716.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="TV Interface" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Smart TV Setup" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Como instalar usando Pendrive</h3>
          <ol className="text-slate-300 space-y-4">
            <li><strong>Baixe o APK no PC:</strong> Clique no botão de download para baixar o APK próprio para TV.</li>
            <li><strong>Transfira para o Pendrive:</strong> Copie o arquivo APK para um pendrive formatado em FAT32.</li>
            <li><strong>Conecte na TV:</strong> Insira o pendrive na entrada USB da sua Smart TV ou TV Box.</li>
            <li><strong>Use um Gerenciador de Arquivos:</strong> Na sua TV, abra um app gerenciador de arquivos (como o File Commander), navegue até o pendrive e clique no APK do YouCine para instalar.</li>
          </ol>

          <div className="grid grid-cols-2 gap-4 my-8">
             <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="/images/feature_devices_1778386931912.png" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Devices Connected" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              <Image src="https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=2070&auto=format&fit=crop" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"  alt="Living Room TV" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Instalação via Downloader App</h3>
          <p className="text-slate-300">
            Se você não tem um pendrive, pode usar o app <strong>Downloader</strong> (disponível na Play Store da TV).
            Abra o Downloader, digite o link direto de download fornecido nesta página, e ele fará o download e a instalação automaticamente.
          </p>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <DownloadCard 
              version="v1.17.6 (TV Version)"
              size="28 MB"
              downloads="2M+"
              requirements="Android TV 5.0+"
              lastUpdate="Today"
              downloadLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
