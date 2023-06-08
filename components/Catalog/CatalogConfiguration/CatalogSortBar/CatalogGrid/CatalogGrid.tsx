import CatalogGridDot from './CatalogGridDot/CatalogGridDot';

const CatalogGrid = () => {
  return (
    <div className="flex gap-5">
      <div className="relative w-6 h-6 cursor-pointer group">
        <CatalogGridDot positionConfig={'top-0'} />
        <CatalogGridDot positionConfig={'left-0 bottom-0'} />
        <CatalogGridDot positionConfig={'bottom-0 right-0'} />
      </div>
      <div className="relative w-6 h-6 cursor-pointer group">
        <CatalogGridDot positionConfig={'top-0'} />
        <CatalogGridDot positionConfig={'left-0 bottom-0'} />
        <CatalogGridDot positionConfig={'bottom-0 right-0'} />
        <CatalogGridDot positionConfig={'right-0 top-0'} />
      </div>
      <div className="relative w-6 h-6 cursor-pointer group">
        <CatalogGridDot positionConfig={'top-0'} />
        <CatalogGridDot positionConfig={'left-0 bottom-0'} />
        <CatalogGridDot positionConfig={'bottom-0 right-0'} />
        <CatalogGridDot positionConfig={'right-0 top-0'} />
        <CatalogGridDot
          positionConfig={
            'left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] group-hover:bg-gold'
          }
        />
      </div>
    </div>
  );
};

export default CatalogGrid;
