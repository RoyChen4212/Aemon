import React from 'react';
import './style.css';

export const Ol = props => <ol className="pbg-consumer-desktop pbg-ordered-list">{props.children}</ol>;

export const Ul = props => <ul className="pbg-consumer-desktop pbg-unordered-list">{props.children}</ul>;
