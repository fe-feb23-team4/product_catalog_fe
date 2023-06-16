import React, { PropsWithChildren } from 'react';
import cl from './ErrorMessage.module.scss';

export const ErrorMessage: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={cl.error}>
      <span className={cl.loader} />
      <h2 className={cl.title}>{props.children}</h2>
    </div>
  );
};
