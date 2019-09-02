import React from 'react';
import cx from 'classnames';
import './style.scss';

export const H1 = ({ children, className }) => <h1 className={cx('pbg-heading pbg-h1', className)}>{children}</h1>;
export const H2 = ({ children, className }) => <h2 className={cx('pbg-heading pbg-h2', className)}>{children}</h2>;
export const H3 = ({ children, className }) => <h3 className={cx('pbg-heading pbg-h3', className)}>{children}</h3>;
