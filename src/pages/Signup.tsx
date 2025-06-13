import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import FormLink from "../components/FormLink";
import Input from "../components/Input";
import SocialButtons from "../components/SocialButton";
import AuthLayout from "../layout/AuthLayout";


export default function Signup() {
  return (
    <AuthLayout>
          
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">Créer un compte</h1>

        <form className="space-y-4">
          <Input type="text" placeholder="Nom complet" required />
          <Input type="email" placeholder="Adresse email" required />
          <Input type="password" placeholder="Mot de passe" required />
          <Input type="password" placeholder="Confirmer le mot de passe" required />
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 accent-blue-600"
            />
            <label htmlFor="terms" className="leading-snug">
                J’accepte les <a href="/terms" className="text-blue-600 hover:underline">conditions d’utilisation</a>.
            </label>
            </div>

          <Button type="submit">S’inscrire</Button>
        </form>

        <SocialButtons />

        <FormLink to="/login" text="Déjà un compte ? Connectez-vous" />
      </AuthCard>

    </AuthLayout>
  )
}
