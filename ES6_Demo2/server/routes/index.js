

import {usercreate} from '../controllers/index';

module.exports = (app) => {
 app.post('/api/usercreate', usercreate);
};