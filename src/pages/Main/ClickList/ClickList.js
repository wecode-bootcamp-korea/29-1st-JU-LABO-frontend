import React from 'react';
import ClickListItem from './ClickListItem';
import ClickImages from './ClickImages';
import './ClickList.scss';

const ClickList = ({
  ClickListClassName,
  ListClassName,
  data,
  selectedState,
  onClick,
}) => {
  return (
    <article className={'ClickList ' + ClickListClassName}>
      <ul className={'list ' + ListClassName}>
        {data.map((brewery, index) => {
          return (
            <ClickListItem
              key={index}
              selectedState={selectedState}
              index={index}
              onClick={onClick}
              data={brewery}
            />
          );
        })}
      </ul>
      <div className="clickListImageWrap">
        {data.map((brewery, index) => (
          <ClickImages
            key={index}
            index={index}
            selectedState={selectedState}
            data={brewery}
          />
        ))}
      </div>
    </article>
  );
};

export default ClickList;
