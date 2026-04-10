import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos de Servicio de Best European Spos - Condiciones de uso del sitio web.",
};

export default function TermsOfServicePage() {
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
          
          <h1 className="text-4xl font-bold text-primary mb-4">Términos de Servicio</h1>
          <p className="text-sm text-muted">Última actualización: marzo 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Al acceder y utilizar besteuropeanspots.com, aceptas quedar vinculado por estos Términos de Servicio.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Uso del Contenido</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Todo el contenido de este sitio se proporciona únicamente con fines informativos. Somos un sitio independiente de información turística de terceros y no estamos afiliados a la gestión de ninguna atracción turística, a ninguna entidad gubernamental ni a ningún operador comercial.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Exactitud de la Información</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nos esforzamos por mantener la información precisa y actualizada, pero no podemos garantizar su integridad ni exactitud. Los horarios, condiciones y servicios pueden cambiar sin previo aviso. Verifica siempre los datos importantes con fuentes oficiales antes de tu visita.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Propiedad Intelectual</h2>
            <p className="text-foreground leading-relaxed mb-4">
              El diseño del sitio web y el contenido original están protegidos por derechos de autor. Las fotografías proceden de Unsplash según sus términos de licencia. Los datos de Google Maps se utilizan conforme a las Condiciones de Servicio de Google.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Limitación de Responsabilidad</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Este sitio web se proporciona «en el estado en que se encuentra» sin garantías. No somos responsables de ningún daño derivado del uso de la información de este sitio, incluyendo, entre otros, decisiones de viaje basadas en nuestro contenido.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contacto</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Para preguntas sobre estos términos, contacta con:
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