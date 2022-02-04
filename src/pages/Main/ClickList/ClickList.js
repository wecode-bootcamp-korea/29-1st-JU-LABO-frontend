import React from 'react';
import ClickListItem from './ClickListItem/ClickListItem';
import ClickImages from './ClickImages/ClickImages';
import './ClickList.scss';

const ClickList = ({
  clickListClassName,
  listClassName,
  data,
  selectedState,
  onClick,
}) => {
  return (
    <article className={'clickList ' + clickListClassName}>
      <ul className={'list ' + listClassName}>
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
