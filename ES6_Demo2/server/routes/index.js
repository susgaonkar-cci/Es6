import {user_Login,user_Display,user_Create,task_create,task_display} from '../controllers/index';
// import {authJwt} from '../service/passport.js'
// import {authLocal} from '../service/passport.js'


//Getting Entire Module as assigning it to auth objects
import * as auth from '../service/passport.js'
export default (app) => {
app.post('/api/login',auth.authLocal,user_Login);
app
.route('/api/user')
.post(user_Create)
.get(auth.authJwt,user_Display)

app
.route('/api/task')
.post(auth.authJwt,task_create)
.get(auth.authJwt,task_display)
};