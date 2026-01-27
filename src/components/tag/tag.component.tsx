import { iconLibrary } from "@/content/icons";
import styles from "./tag.module.scss";

interface TagProps {
  label: string;
  icon?: string;
}
export const Tag = async (props: TagProps) => {
  const { label, icon } = props;
  const IconComponent = icon ? iconLibrary[icon] : null;

  return (
    <div className={styles.tag}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <span className={styles.tagLabel}>{label}</span>
    </div>
  );
};
