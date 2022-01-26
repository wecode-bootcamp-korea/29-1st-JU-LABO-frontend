import React from 'react';
import ClickListItem from './ClickListItem';
import ClickImages from './ClickImages';

const ClickList = ({
  ClickListClassName,
  ListClassName,
  data,
  selectedState,
  onClick,
}) => {
  return (
    <article className={ClickListClassName}>
      <ul className={ListClassName}>
        {data.map((brewery, index) => {
          return (
            <ClickListItem
              key={index}
              selectedState={selectedState}
              index={index}
              liClassName="clickListItem"
              onClick={onClick}
              data={brewery}
            />
          );
        })}
      </ul>
      <div className="breweryImageWrap">
        {data.map((brewery, index) => (
          <ClickImages
            key={index}
            index={index}
            selectedState={selectedState}
            wrapClassName="clickListImageBlock"
            imgClassName="clickListImage"
            data={brewery}
          />
        ))}
      </div>
    </article>
  );
};

export default ClickList;
