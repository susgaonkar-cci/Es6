import passport from 'passport';
import {Strategy as localStrategy} from 'passport-local'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import {JWT_SECRET} from '../constants/constants';

const user=require('../models').User;


const localopts={
    usernameField:'username',
};
const localLogin=new localStrategy(localopts,async(username,password,done)=>{


try{
    const userObject=await user.findOne({where:{username:username}});
    if(!userObject){
        return done(null,false);

    }
    else if(!userObject.validPassword(password)){
       
        return done(null,false)
    }
    return done(null,userObject);
}
catch(error){   return done(error,false)}

});

const jwtOpts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey:JWT_SECRET,
};

const jwtLogin =new JWTStrategy(jwtOpts,async(payloads,done)=>{
    try{
       
        const userObject2=await user.findByPk(payloads.id)
        if(!userObject2)
        {
            return done(null,userObject2)
        }
        return done(null, userObject2) 
    }
    catch(error){
        return done(error,false)
    }
})

passport.use(localLogin);
passport.use(jwtLogin);

export const authLocal=passport.authenticate('local',{session:false});
export const authJwt = passport.authenticate('jwt', {session: false});
