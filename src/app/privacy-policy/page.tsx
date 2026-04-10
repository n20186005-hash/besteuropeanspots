import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de Best European Spots - Cómo recopilamos, utilizamos y protegemos tu información personal.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Inicio
          </Link>
          
          <h1 className="text-4xl font-bold text-primary mb-4">Política de Privacidad</h1>
          <p className="text-sm text-muted">Última actualización: marzo 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Esta Política de Privacidad explica cómo besteuropeanspots.com recopila, utiliza y protege tu información personal cuando visitas nuestro sitio web.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Información que Recopilamos</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Recopilamos los datos mínimos necesarios para ofrecer nuestros servicios. Esto puede incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Datos de navegación (dirección IP, tipo de navegador, páginas visitadas)</li>
              <li>Cookies y tecnologías similares</li>
              <li>Cualquier información que proporciones voluntariamente a través de formularios de contacto o correo electrónico</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Cómo Utilizamos tu Información</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Mejorar el contenido y la experiencia de usuario del sitio</li>
              <li>Analizar el tráfico y los patrones de uso</li>
              <li>Responder a las solicitudes</li>
              <li>Cumplir con nuestras obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Servicios de Terceros</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nuestro sitio web puede utilizar servicios de terceros como Google Maps (para mapas integrados y datos de ubicación), Google Analytics (para análisis de tráfico) y Unsplash (para fotografías). Estos servicios disponen de sus propias políticas de privacidad.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Tus Derechos</h2>
            <p className="text-foreground leading-relaxed mb-4">
              En virtud del RGPD y de las regulaciones aplicables, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar su rectificación o eliminación</li>
              <li>Oponerse al tratamiento</li>
              <li>Presentar una queja ante una autoridad de control</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contacto</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Para cualquier pregunta relacionada con la privacidad, contáctanos en:
            </p>
            <p className="text-foreground font-medium">
              n20186005@gmail.com
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Soporte Técnico</h2>
            <p className="text-foreground leading-relaxed">
              Para soporte técnico de este sitio web, contacta con: <strong>n20186005@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}