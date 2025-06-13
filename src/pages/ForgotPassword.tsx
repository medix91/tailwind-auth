import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import AuthLayout from '../layout/AuthLayout'
import AuthCard from '../components/AuthCard'
import Input from '../components/Input'
import Button from '../components/Button'
import FormLink from '../components/FormLink'


export default function ForgotPassword() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-4">Mot de passe oublié</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.
        </p>

        {sent ? (
          <div className="bg-green-100 border border-green-300 text-green-700 text-sm rounded-lg px-4 py-3 mb-6 text-center">
            ✅ Le lien de réinitialisation a été envoyé avec succès !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="email" placeholder="Adresse email" required />
            <Button type="submit" className="w-full relative py-3 px-4 text-white font-medium">
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          
        </span>
        <span className="block text-center">Envoyer le lien</span>
        </Button>

          </form>
        )}

        <FormLink to="/login" text="Retour à la connexion" />
      </AuthCard>
    </AuthLayout>
  )
}
