import React from  'react';
import {Loading} from 'assets/icons/Loading';

import './style.scss';

interface Props {
  loadingText?: string
}

const LoadingScreen: React.FC<Props> = (props: Props) => {
  const {loadingText} = props;
  return (
    <div className="loading">
      <div>
        {loadingText !== '' && <p>{loadingText}</p>}
        <Loading />
      </div>
    </div>
  )
}

export default LoadingScreen;