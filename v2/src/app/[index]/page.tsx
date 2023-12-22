import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Divider as SkillsDivider } from "@/components/Skills/Divider";
import { Divider as ProjectsDivider } from "@/components/Projects/Divider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page(): React.JSX.Element {
  return (
    <>
    {/* lembrar de arrumar o overflow x bugado */}
      {/* <Header /> */}
      <Home />
      <SkillsDivider />
      <Skills />
      <ProjectsDivider />
      <Projects />
      <Footer />
    </>
  );
}
