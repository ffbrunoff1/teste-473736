import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Construção de Edifícios',
    'Construção Residencial',
    'Construção Industrial',
    'Reformas e Ampliações'
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: 'Entre em contato conosco'
    },
    {
      icon: Mail,
      text: 'Envie sua mensagem'
    },
    {
      icon: MapPin,
      text: 'Atendemos em todo Brasil'
    },
    {
      icon: Clock,
      text: 'Seg - Sex: 8h às 18h'
    }
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-400/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754769396826_0.png"
                  alt="Teste Academy"
                  className="h-12 w-12"
                />
              </div>
              
              <p className="text-primary-300 leading-relaxed">
                Especialistas em construção predial com anos de experiência. 
                Qualidade e inovação na construção de edifícios para um futuro sólido.
              </p>
              
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-accent-400" />
                <span className="text-primary-200 font-medium">Construção de Excelência</span>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-300 hover:text-accent-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection('services')}
                      className="text-primary-300 hover:text-accent-400 transition-colors duration-300 block text-left"
                    >
                      {service}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-accent-400" />
                    </div>
                    <span className="text-primary-300 text-sm">{info.text}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="mt-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-lg w-full"
              >
                Fale Conosco
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-primary-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-primary-400 text-sm">
                  © 2023 Teste Construção. Todos os direitos reservados.
                </p>
                <p className="text-primary-500 text-xs mt-1">
                  Criado com{' '}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://papum.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 font-medium"
                  >
                    Papum
                  </motion.a>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="bg-accent-500/20 backdrop-blur-sm p-3 rounded-full border border-accent-500/30 transition-all duration-300 hover:bg-accent-500/30 hover:border-accent-500/50"
              >
                <ArrowUp className="w-5 h-5 text-accent-400" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}