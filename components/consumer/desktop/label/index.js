import React from 'react';

import Label from '../../shared/label';
export * from '../../shared/label';

import './style.css';

export default props => <Label {...props} className={`${props.className} pbg-consumer-desktop`} />;