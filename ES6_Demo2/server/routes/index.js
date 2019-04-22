import {LoginController,createController,displayController} from '../controllers/index';


// import {authJwt} from '../service/passport.js'
// import {authLocal} from '../service/passport.js'


//Getting Entire Module as assigning it to auth objects
import * as auth from '../service/passport.js'
export default app => {

app.post('/api/login',auth.authLocal,LoginController);
 app.post('/api/usercreate',createController);
 app.post('/api/display',auth.authJwt,displayController);
};