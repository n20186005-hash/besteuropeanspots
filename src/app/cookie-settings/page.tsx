import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Configuración de Cookies",
  description: "Configuración de Cookies de Best European Spots - Gestiona tus preferencias de cookies.",
};

export default function CookieSettingsPage() {
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
          
          <h1 className="text-4xl font-bold text-primary mb-4">Configuración de Cookies</h1>
          <p className="text-sm text-muted">Última actualización: marzo 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Utilizamos cookies para mejorar tu experiencia de navegación. Puedes gestionar tus preferencias a continuación.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Cookies Esenciales</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Necesarias para el correcto funcionamiento del sitio web. No se pueden desactivar.
            </p>
            <div className="bg-surface p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Cookies esenciales</span>
                <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">Siempre activas</span>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Cookies de Análisis</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web mediante la recopilación de datos de uso anónimos.
            </p>
            <div className="bg-surface p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">Google Analytics</span>
                <button className="bg-accent text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors">
                  Activar
                </button>
              </div>
              <p className="text-sm text-muted">
                Recopila información anónima sobre cómo los visitantes usan nuestro sitio web.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Cookies de Preferencias</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Recuerdan tus ajustes como el idioma y las preferencias de tema.
            </p>
            <div className="bg-surface p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">Preferencias de usuario</span>
                <button className="bg-accent text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors">
                  Activar
                </button>
              </div>
              <p className="text-sm text-muted">
                Guarda tus preferencias de idioma y configuración del sitio.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Cookies de Marketing</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Se utilizan para mostrar publicidad relevante y medir la eficacia de las campañas.
            </p>
            <div className="bg-surface p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">Publicidad personalizada</span>
                <button className="border border-border text-muted px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-light transition-colors">
                  Desactivar
                </button>
              </div>
              <p className="text-sm text-muted">
                Permite mostrar anuncios relevantes basados en tus intereses.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-primary-light p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-4">Gestión de Consentimiento</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Puedes cambiar tus preferencias de cookies en cualquier momento. Ten en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio web.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors">
                  Guardar preferencias
                </button>
                <button className="border border-border text-muted px-6 py-3 rounded-lg font-medium hover:bg-surface-light transition-colors">
                  Rechazar todo
                </button>
              </div>
            </div>
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