interface IHeaderCard {
  title: string;
  subtitle: string;
  themeModeToggleButton: React.ReactNode;
}

export function HeaderCard({
  title,
  subtitle,
  themeModeToggleButton,
}: IHeaderCard) {
  return (
    <div className="flex flex-col w-full h-full justify-center px-8">
      <div className="flex justify-between">
        <p>props.title: {title}</p>
        <p>{themeModeToggleButton}</p>
      </div>
      <div className="flex w-full">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
