import React from  'react';

import './style.scss';

interface Props {
  btnText?: string,
  setSelectedFilter: Function,
  setSearch: Function,
}

const ClearFilter: React.FC<Props> = (props: Props) => {
  const {btnText, setSelectedFilter, setSearch} = props;
  return (
    <div className="clear-filter">
      <button className="btn" onClick={() => {setSelectedFilter(''); setSearch('')}}>
        {btnText !== '' ? btnText : 'Clear all'}
      </button>
    </div>
  )
}

export default ClearFilter;