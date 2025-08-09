import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Award, Users, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const features = [
    { icon: Building2, text: 'Construção Predial' },
    { icon: Award, text: 'Qualidade Garantida' },
    { icon: Users, text: 'Equipe Especializada' },
    { icon: CheckCircle, text: 'Projetos Entregues' }
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-primary-900/60"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-600/30 rounded-full blur-lg animate-float animation-delay-200"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent-400/15 rounded-full blur-2xl animate-float animation-delay-400"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent-700/25 rounded-full blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Construímos seus{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent"
              >
                sonhos
              </motion.span>{' '}
              com precisão e excelência
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl"
            >
              Especialistas em construção predial com anos de experiência. 
              Qualidade e inovação na construção de edifícios para um futuro sólido. 
              Transformamos projetos em realidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-xl"
              >
                Solicitar Orçamento
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-3">
                    <feature.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <span className="text-sm text-primary-100 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-accent-500/20 rounded-xl p-6 text-center">
                    <Building2 className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Edifícios</h3>
                    <p className="text-primary-200 text-sm">Construção completa</p>
                  </div>
                  
                  <div className="bg-accent-600/20 rounded-xl p-6 text-center">
                    <Award className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Qualidade</h3>
                    <p className="text-primary-200 text-sm">Padrão premium</p>
                  </div>
                  
                  <div className="bg-accent-700/20 rounded-xl p-6 text-center">
                    <Users className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Equipe</h3>
                    <p className="text-primary-200 text-sm">Profissionais experientes</p>
                  </div>
                  
                  <div className="bg-accent-400/20 rounded-xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Garantia</h3>
                    <p className="text-primary-200 text-sm">100% segura</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-3xl blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}