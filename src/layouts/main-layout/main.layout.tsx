import { Header } from "./components/header/header.component";

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
