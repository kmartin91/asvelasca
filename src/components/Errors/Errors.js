/* @flow */

import React from 'react';
import type { Node } from 'react';
import _get from 'lodash/get';
import classnames from 'classnames';

import { getServerUrl } from '../../shared/utils';

type EditoProps = {
  message?: string,
  code?: number,
  className?: string,
};

import './Errors.scss';

const Errors = ({ message, code, className }: EditoProps): Node => (
  <div className={classnames('Errors', className)}>
    <div className="Errors__title">OFFSIDE</div>
    {message && <div className="Errors__message"> {message} </div>}
    {code && <div className="Errors__code"> {code} </div>}
  </div>
);

export default Errors;
