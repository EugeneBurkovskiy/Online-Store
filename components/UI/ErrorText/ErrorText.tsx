interface IProps {
  text?: string;
}

const ErrorText = ({ text = 'Something Wrong' }: IProps) => {
  return (
    <p className="fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-2xl">{text}</p>
  );
};

export { ErrorText };
