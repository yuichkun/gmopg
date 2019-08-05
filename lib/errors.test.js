"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const errors_1 = require("./errors");
ava_1.default('new returns BadRequest instance', (t) => {
    t.true(new errors_1.BadRequest() instanceof errors_1.BadRequest);
});
ava_1.default('variables is message as instance', (t) => {
    const err = new errors_1.BadRequest('yo');
    t.is(err.message, 'yo');
});
ava_1.default('.parseError returns ErrInfo as array', (t) => {
    const err = new errors_1.BadRequest().parseError({ ErrInfo: 'NC1000009|N0C030G96' });
    t.is(err.errors[0], 'Input parameter error / billing information presence judgment flag incorrect format');
    t.is(err.errors[1], '[Settlement request] Cancel processing has failed at the subsequent settlement center.');
    t.is(err.errInfo[0], 'NC1000009');
    t.is(err.errInfo[1], 'N0C030G96');
});
