import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
