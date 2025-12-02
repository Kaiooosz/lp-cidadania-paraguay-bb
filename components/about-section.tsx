"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Award, Users, Briefcase } from "lucide-react"

const stats = [
  { icon: Users, value: "200+", label: "Clientes Atendidos" },
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: MapPin, value: "2", label: "Escritórios" },
  { icon: Briefcase, value: "100%", label: "Taxa de Sucesso" },
]

const team = [
  {
    name: "Dr. Vinicius Borges",
    role: "Sócio Fundador",
    image: "/vinicius 1.jpg",
  },
  {
    name: "Dr. Lucas",
    role: "Advogada Sênior",
    image: "/lucas.jpg",
  },
  {
    name: "Dra. Mariana",
    role: "Especialista em Imigração",
    image: "/mariana.jpg",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre Nós</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground tracking-tight">
            Conheça a BBLaw
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Somos um escritório especializado em cidadania, negócios internacionais e estruturação jurídica para
            brasileiros que desejam expandir seus horizontes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-secondary/50 rounded-2xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-6">
              Trabalhamos com eficiência, sigilo, segurança e conformidade total
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A BBLaw nasceu da necessidade de oferecer um serviço jurídico de excelência para brasileiros que buscam
                expandir suas possibilidades no cenário internacional.
              </p>
              <p>
                Nossa equipe é formada por advogados especializados em direito internacional, imigração e estruturação
                de negócios, com experiência comprovada no Paraguai e no Brasil.
              </p>
              <p>
                Entendemos que cada cliente é único, por isso oferecemos atendimento personalizado e acompanhamento
                dedicado em todas as etapas do processo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img src="/modern-law-office-interior-professional.jpg" alt="Escritório BBLaw" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-10">Nossa Equipe</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-graphite/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
