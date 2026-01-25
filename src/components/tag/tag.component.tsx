import styles from "./tag.module.css";

interface TagProps {
  label: string;
}
export const Tag = async (props: TagProps) => {
  const { label } = props;
  return (
    <div className={styles.tag}>
      <span className={styles.tagLabel}>{label}</span>
    </div>
  );
};
