import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Factory, Wrench, Hammer, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Construção de Edifícios',
      description: 'Construção completa de edifícios residenciais e comerciais com os mais altos padrões de qualidade.',
      features: ['Projeto arquitetônico', 'Estrutura completa', 'Acabamentos premium', 'Entrega no prazo'],
      highlight: 'Especialidade Principal'
    },
    {
      icon: Home,
      title: 'Construção Residencial',
      description: 'Casas e residências personalizadas que atendem às necessidades específicas de cada família.',
      features: ['Projetos personalizados', 'Materiais de qualidade', 'Acompanhamento total', 'Garantia estendida'],
      highlight: 'Mais Procurado'
    },
    {
      icon: Factory,
      title: 'Construção Industrial',
      description: 'Galpões industriais e complexos fabris projetados para máxima eficiência e durabilidade.',
      features: ['Estruturas robustas', 'Tecnologia avançada', 'Normas de segurança', 'Prazo otimizado'],
      highlight: 'Alta Complexidade'
    },
    {
      icon: Wrench,
      title: 'Reformas e Ampliações',
      description: 'Modernização e expansão de construções existentes com mínimo impacto na rotina.',
      features: ['Planejamento detalhado', 'Execução eficiente', 'Mínimo transtorno', 'Resultado garantido'],
      highlight: 'Solução Rápida'
    }
  ]

  const benefits = [
    'Equipe altamente qualificada',
    'Materiais de primeira qualidade',
    'Tecnologia de ponta',
    'Sustentabilidade',
    'Prazos rigorosamente cumpridos',
    'Atendimento personalizado'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Qualidade e inovação na construção de edifícios para um futuro sólido. 
            Oferecemos soluções completas em construção predial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-primary-100 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </span>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-primary-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Star className="w-8 h-8 text-accent-500" />
                <h3 className="text-3xl font-bold text-primary-800">
                  Por que somos diferentes?
                </h3>
              </div>
              
              <p className="text-lg text-primary-600 mb-8">
                Nossa abordagem única combina experiência, tecnologia e dedicação 
                para entregar resultados excepcionais em cada projeto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-primary-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 text-center">
                <Hammer className="w-20 h-20 text-accent-600 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-primary-800 mb-4">
                  Pronto para começar?
                </h4>
                <p className="text-primary-600 mb-6">
                  Entre em contato conosco e transforme seu projeto em realidade 
                  com a qualidade e confiança da Teste Construção.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-lg"
                >
                  Fale Conosco Agora
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}