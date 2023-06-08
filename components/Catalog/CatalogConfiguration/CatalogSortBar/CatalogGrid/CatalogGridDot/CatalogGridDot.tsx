interface IProps {
  positionConfig: string;
  active?: boolean;
}

const CatalogGridDot = ({ positionConfig, active = false }: IProps) => {
  return (
    <div
      className={`absolute ${positionConfig} w-[7px] h-[7px] ${
        active ? 'bg-gold' : 'bg-black'
      } rounded-full group-hover:bg-gold duration-simple`}
    />
  );
};

export { CatalogGridDot };
