import clsx from "clsx";

interface TextGradientProps {
  text: string;
  withVia?: boolean;
}

export default function TextGradient(props: TextGradientProps) {
  const { text, withVia } = props;

  return (
    <span
      className={clsx(
        "bg-gradient-to-r from-[#59a0ff] bg-clip-text text-transparent",
        {
          "via-[#c17bff] to-[#59a0ff]": withVia,
          "to-[#c17bff]": !withVia,
        }
      )}
    >
      {text}
    </span>
  );
}
