interface HeaderProps {
  leftIcon?: React.ReactNode;
  title: string;
  rightIcon?: React.ReactNode;
}

const Header = ({ leftIcon, title, rightIcon }: HeaderProps) => {
  return (
    <header className="w-full p-3">
      <section className="flex justify-between">
        {leftIcon ? leftIcon : <div />}

        <span className="">{title}</span>

        {rightIcon ? rightIcon : <div />}
      </section>
    </header>
  );
};

export default Header;
