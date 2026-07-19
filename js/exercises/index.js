// Single registration point for every exercise type.
//
// Importing this module defines all the custom elements. Adding a sixth type
// means adding one import here and nothing else anywhere — the progress store,
// sidebar, and migrations are all decoupled by design.

import './mcq.js';
import './predict.js';
import './free-response.js';
import './order.js';
import './matrix.js';

export const EXERCISE_TAGS = [
  'x-mcq',
  'x-predict',
  'x-free-response',
  'x-order',
  'x-matrix',
];
