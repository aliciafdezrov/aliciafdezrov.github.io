import { Background } from "@/components/background/background.component";
import { Header } from "./components/header/header.component";
import { TransitionMask } from "./components/header/components/transition-mask/transition-mask.component";

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <div>
      <TransitionMask />
      <Background />
      <Header />
      {children}
    </div>
  );
}
