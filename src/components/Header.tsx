interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  if (!title) return null;

  return (
    <div
      style={{
        display: "none",
      }}
    >
      {title}
    </div>
  );
}