import { Button } from "@/components/button/button";
import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
import Notfound from "@/components/ui/Notfound";
import Notfoundbg from "@/components/ui/Notfound-bg";

export default function NotFound() {
  return (
    <Section className="bg-secondary-950 h-screen flex items-center justify-center">
      <Notfoundbg />
      <Container className="w-full relative overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-xl text-white flex flex-col items-center justify-center">
          <Notfound />
          <h1>
            The page you are looking for was moved, removed, renamed or might have never existed!
            The page you are looking for was moved, removed, renamed or might have never existed!
          </h1>

          <Button variant="secondary" className="text-black">
            Back to home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
