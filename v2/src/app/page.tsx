import { Home } from "@/sections/Home";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { SkillsDivider } from "@/sections/Skills/components/Divider";
import { ProjectsDivider } from "@/sections/Projects/components/Divider";
import { Footer } from "@/sections/Footer";
import { Header } from "@/components/Header";

export default function Page(): React.JSX.Element {
  return (
    <>
    {/* lembrar de arrumar o overflow x bugado */}
      <Header />
      <Home />
      <SkillsDivider />
      <Skills />
      <ProjectsDivider />
      <Projects />
      <Footer />
    </>
  );
}
