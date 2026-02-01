import { Background } from "@/components/background/background.component";
import { Header } from "./components/header/header.component";
import { TransitionMask } from "./components/transition-mask/transition-mask.component";
import { Footer } from "./components/footer/footer.component";

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <div>
      <TransitionMask />
      <Background />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
