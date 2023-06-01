interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <section className="max-w-7xl w-full px-5 mx-auto">{children}</section>;
};

export default Container;
