/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

const {resolve} = require('path');
const webpack = require('webpack');

module.exports = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        resolve(__dirname, '../src'),
        resolve(__dirname, '../content'),
        resolve(__dirname, '../node_modules'),
      ],
    },
    // See https://github.com/FormidableLabs/react-live/issues/5
    plugins: [new webpack.IgnorePlugin(/^(xor|props)$/)],
  });
};