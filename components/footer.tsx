"use client"
import { Instagram, Linkedin, Youtube, Globe, ArrowUpRight, Link } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Globe, href: "https://calendly.com/bb-law?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxFKXtJ5429fXdGj7bImyJUMnWf-OwmAy3pPDvssJWfmaz7K_nRuiGd_TO3k_aem_71qmIzKpJBeMBRi2tu2KIg", label: "calendly" },
]

const quickLinks = [
  { label: "Início", href: "#hero" },
  { label: "Por que Paraguai", href: "#problema" },
  { label: "Nossa Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

const articles = [
  {
    title: "5 Vantagens da Cidadania Paraguaia",
    href: "#",
  },
  {
    title: "Como Abrir uma Empresa no Paraguai",
    href: "#",
  },
  {
    title: "Guia Completo: Residência x Cidadania",
    href: "#",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
          <Link href="/" className="flex items-center">
            <img 
              src="/Logofundopreto.png" 
              alt="Offshore Logo" 
             className="h-22 w-auto object-contain"
             />
            </Link>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Especialistas em cidadania, negócios internacionais e estruturação jurídica.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h4 className="text-white font-semibold mb-6">Artigos</h4>
            <ul className="space-y-4">
              {articles.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.href}
                    className="group flex items-start gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-6">Comece Agora</h4>
            <p className="text-zinc-400 mb-6">
              Agende uma consulta gratuita e inicie sua jornada rumo à cidadania paraguaia.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-graphite font-medium px-6 py-3 rounded-full hover:bg-zinc-100 transition-colors"
            >
              Agendar Consulta
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© 2025 BBLaw. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
