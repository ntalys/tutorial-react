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
        <p className="capitalize text-3xl font-semibold">{title}</p>
        <span>{themeModeToggleButton}</span>
      </div>
      <div className="flex w-full">
        <p className="text-sm font-light text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
