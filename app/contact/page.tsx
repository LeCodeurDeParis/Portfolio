'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (res.ok) {
        alert('Message envoyé avec succès !')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Erreur : ' + data.message)
      }
    } catch (err) {
      alert('Une erreur est survenue:' + err.message)
      console.error(err)
    }
  }

  return (
    <main 
      className="flex flex-col gap-8 justify-center items-center px-4 md:px-8 py-8 md:py-12 min-h-screen"
      role="main"
    >
      <motion.div
        className="w-full max-w-2xl"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-[#021334] text-center mb-8">
          Contactez-moi
        </h1>
        <form
          className="flex flex-col gap-4 md:gap-6 items-center w-full"
          onSubmit={handleSubmit}
          aria-label="Formulaire de contact"
        >
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#021334] font-medium ml-4">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border-2 border-[#021334] rounded-full focus:outline-none focus:ring-2 focus:ring-[#021334]/50 transition-all"
                aria-required="true"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#021334] font-medium ml-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border-2 border-[#021334] rounded-full focus:outline-none focus:ring-2 focus:ring-[#021334]/50 transition-all"
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#021334] font-medium ml-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-3 border-2 border-[#021334] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#021334]/50 transition-all resize-none"
                aria-required="true"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-32 h-12 bg-[#021334] text-white rounded-full hover:bg-[#021334]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#021334]/50"
            aria-label="Envoyer le message"
          >
            Envoyer
          </button>
        </form>
      </motion.div>
    </main>
  )
}