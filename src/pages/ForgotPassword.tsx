import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import FormLink from "../components/FormLink";
import Input from "../components/Input";
import AuthLayout from "../layout/AuthLayout";


export default function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">Mot de passe oublié</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>
        <form className="space-y-4">
          <Input type="email" placeholder="Adresse email" required />
          <Button type="submit">Envoyer le lien</Button>
        </form>
        <FormLink to="/login" text="Retour à la connexion" />
      </AuthCard>
    </AuthLayout>
  )
}
