import { iconLibrary } from "@/content/icons";

interface IconProps {
  iconName: string;
}

export const Icon = async (props: IconProps) => {
  const { iconName } = props;
  const Icon = iconLibrary[iconName];

  return <Icon />;
};
