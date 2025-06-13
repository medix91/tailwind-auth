import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import FormLink from "../components/FormLink";
import Input from "../components/Input";
import Separator from "../components/Separator";
import SocialButtons from "../components/SocialButton";
import AuthLayout from "../layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">Connexion</h1>
        <form className="space-y-4">
          <Input type="email" placeholder="Adresse email" required />
          <Input type="password" placeholder="Mot de passe" required />
             <div className="text-right mt-2">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline transition"
          >
            Mot de passe oublié ?
          </Link>
        </div>
          <Button type="submit">Se connecter</Button>
        </form>
      
        <Separator />
        <SocialButtons />
        <FormLink to="/signup" text="Pas encore inscrit ? Créez un compte" />
      </AuthCard>
    </AuthLayout>
  )
}