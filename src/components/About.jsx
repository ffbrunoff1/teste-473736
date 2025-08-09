import React from 'react'
import { motion } from 'framer-motion'
import { Target, Shield, Clock, Star, Hammer, Building } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada detalhe é planejado e executado com precisão milimétrica.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Seguimos os mais rigorosos padrões de segurança em todas as etapas.'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimos prazos estabelecidos sem comprometer a qualidade.'
    },
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos sempre superar expectativas em cada projeto.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projetos Concluídos' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Técnico' }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Sobre a Teste Construção
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Há mais de uma década construindo sonhos e transformando projetos em realidade. 
            Nossa expertise em construção predial nos permite entregar edifícios de alta qualidade 
            que resistem ao teste do tempo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                whileInView={{ scale: 1, rotate: 0 }}
                initial={{ scale: 0.8, rotate: -5 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Hammer className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                    <h3 className="font-bold text-primary-800 text-lg">Construção</h3>
                    <p className="text-primary-600 text-sm mt-2">Técnicas modernas</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                    <h3 className="font-bold text-primary-800 text-lg">Edifícios</h3>
                    <p className="text-primary-600 text-sm mt-2">Projetos únicos</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-2xl font-bold text-accent-600 mb-2">Nossa Missão</h4>
                    <p className="text-primary-700">
                      Construir edifícios excepcionais que superem expectativas e 
                      criem valor duradouro para nossos clientes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary-800 mb-6">
              Por que escolher a Teste Construção?
            </h3>
            <p className="text-lg text-primary-600 mb-8">
              Nossa abordagem combina tradição e inovação, garantindo que cada projeto 
              seja executado com os mais altos padrões de qualidade e sustentabilidade.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-accent-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-primary-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Nossos Números</h3>
            <p className="text-primary-200 text-lg">
              Resultados que comprovam nossa excelência
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold accent-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}