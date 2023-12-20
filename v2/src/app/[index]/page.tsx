import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Divider as SkillsDivider } from "@/components/Skills/Divider";
import { Divider as ProjectsDivider } from "@/components/Projects/Divider";

export default function Page(): React.JSX.Element {
  return (
    <>
      <Home />
      <SkillsDivider />
      <Skills />
      <ProjectsDivider />
      <Projects />
    </>
  );
}
