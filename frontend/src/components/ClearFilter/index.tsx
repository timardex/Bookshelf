import React from  'react';

import './style.scss';

interface Props {
  setSelectedFilter: Function,
  setSearch: Function,
}

const LoadingScreen: React.FC<Props> = (props: Props) => {
  const {setSelectedFilter, setSearch} = props;
  return (
    <div className="clear-filter">
      <button className="btn" onClick={() => {setSelectedFilter(''); setSearch('')}}>Clear Filters</button>
    </div>
  )
}

export default LoadingScreen