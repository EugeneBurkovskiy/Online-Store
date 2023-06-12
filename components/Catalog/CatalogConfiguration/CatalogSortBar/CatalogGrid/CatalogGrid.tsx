'use client';

import { useEffect, useState } from 'react';

import { CatalogGridDot } from './CatalogGridDot/CatalogGridDot';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';

export enum ECatalogGrid {
  mode1 = '3',
  mode2 = '4',
  mode3 = '5',
}

const CatalogGrid = () => {
  const { setQueryObj, searchParamsObj } = useQueryURLManager();
  const [selectedGrid, setSelectedGrid] = useState(searchParamsObj.grid || ECatalogGrid.mode1);

  const handleClick = (gridValue: string) => {
    if (selectedGrid !== gridValue) {
      const queryObj = {
        name: 'grid',
        value: gridValue,
      };
      setQueryObj(queryObj);
      setSelectedGrid(gridValue);
    }
  };

  useEffect(() => {
    if (!searchParamsObj.grid) {
      setQueryObj({ name: 'grid', value: ECatalogGrid.mode1 });
    }
  }, [searchParamsObj.grid, setQueryObj]);

  return (
    <div className="gap-5 md:flex hidden">
      <div
        className={`relative w-6 h-6 cursor-pointer group`}
        onClick={() => handleClick(ECatalogGrid.mode1)}
      >
        <CatalogGridDot positionConfig={'top-0'} active={selectedGrid === ECatalogGrid.mode1} />
        <CatalogGridDot
          positionConfig={'left-0 bottom-0'}
          active={selectedGrid === ECatalogGrid.mode1}
        />
        <CatalogGridDot
          positionConfig={'bottom-0 right-0'}
          active={selectedGrid === ECatalogGrid.mode1}
        />
      </div>
      <div
        className="relative w-6 h-6 cursor-pointer group"
        onClick={() => handleClick(ECatalogGrid.mode2)}
      >
        <CatalogGridDot positionConfig={'top-0'} active={selectedGrid === ECatalogGrid.mode2} />
        <CatalogGridDot
          positionConfig={'left-0 bottom-0'}
          active={selectedGrid === ECatalogGrid.mode2}
        />
        <CatalogGridDot
          positionConfig={'bottom-0 right-0'}
          active={selectedGrid === ECatalogGrid.mode2}
        />
        <CatalogGridDot
          positionConfig={'right-0 top-0'}
          active={selectedGrid === ECatalogGrid.mode2}
        />
      </div>
      <div
        className="relative w-6 h-6 cursor-pointer group lg:block hidden"
        onClick={() => handleClick(ECatalogGrid.mode3)}
      >
        <CatalogGridDot positionConfig={'top-0'} active={selectedGrid === ECatalogGrid.mode3} />
        <CatalogGridDot
          positionConfig={'left-0 bottom-0'}
          active={selectedGrid === ECatalogGrid.mode3}
        />
        <CatalogGridDot
          positionConfig={'bottom-0 right-0'}
          active={selectedGrid === ECatalogGrid.mode3}
        />
        <CatalogGridDot
          positionConfig={'right-0 top-0'}
          active={selectedGrid === ECatalogGrid.mode3}
        />
        <CatalogGridDot
          positionConfig={
            'left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] group-hover:bg-gold'
          }
          active={selectedGrid === ECatalogGrid.mode3}
        />
      </div>
    </div>
  );
};

export { CatalogGrid };
