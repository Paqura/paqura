import {compact} from '../';

const example = [
  {name: 'delete', handler: function() {}},
  false && {name: 'change', handler: function() {}},
  null,
];

const res = compact(example); // [{name: 'delete', handler: function() {}}]