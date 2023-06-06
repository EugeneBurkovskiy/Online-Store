interface IProps {
  positionConfig: string;
}

const CatalogGridDot: React.FC<IProps> = ({ positionConfig }) => {
  return (
    <div
      className={`absolute ${positionConfig} w-[7px] h-[7px] bg-black rounded-full group-hover:bg-gold duration-simple`}
    />
  );
};

export default CatalogGridDot;
