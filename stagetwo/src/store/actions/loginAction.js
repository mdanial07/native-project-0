export default class LoginAction{
    static GET_LOGIN = 'GET_LOGIN';
  
    static getDoctors(login){
        console.log(login)
        return {
            type: LoginAction.GET_LOGIN,
            login
        }
    }
}