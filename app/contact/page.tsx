'use client'

import { useState } from 'react'

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
      alert('Une erreur est survenue')
      console.error(err)
    }
  }

  return (
    <main className="flex flex-col gap-8 justify-center items-center px-4 py-8">
      <h1 className="text-2xl font-bold text-[#021334]">Contact me</h1>
      <form
        className="flex flex-col gap-4 items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-1/3 h-12 px-4 border-2 border-[#021334] rounded-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-1/3 h-12 px-4 border-2 border-[#021334] rounded-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-1/3 h-32 px-4 border-2 border-[#021334] rounded-xl"
        />
        <button
          type="submit"
          className="w-32 h-12 bg-[#021334] text-white rounded-full"
        >
          Send
        </button>
      </form>
    </main>
  )
}
