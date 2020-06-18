import React from 'react';
import { render } from '@testing-library/react';

const optionalChaining = (object) => {
    return object?.bar?.buzz;
};
const Import = () => { };
export { optionalChaining, Import };