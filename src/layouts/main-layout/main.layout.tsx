import { Background } from "@/components/background/background.component";
import { Header } from "./components/header/header.component";
import { TransitionMask } from "./components/transition-mask/transition-mask.component";
import { Footer } from "./components/footer/footer.component";
import { Lang } from "@/i18n/getDictionary";
import { getMainLayout } from "./main-layout.actions";

interface MainLayoutProps extends React.PropsWithChildren {
  lang: Lang;
}

export default function MainLayout({ children, lang }: MainLayoutProps) {
  const vm = getMainLayout(lang);
  return (
    <>
      <TransitionMask />
      <Background />
      <Header vm={vm.header} />
      {children}
      <Footer vm={vm.footer} />
    </>
  );
}
