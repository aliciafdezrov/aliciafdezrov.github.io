import styles from "./tab.module.scss";

export const Tab = (props: React.PropsWithChildren) => {
  const { children } = props;
  
  return <span className={styles.tab}>{children}</span>;
};
