import { Response, AuthPayload } from '../types/types';

class AuthService {
    private baseUrl: string = process.env.REACT_APP_REQRES_BASE_URL || '';

    async login(email: string, password: string): Promise<Response<AuthPayload>> {
        let token = '';
        let errorMessage = '';
        try{
            const resp = await fetch(`${this.baseUrl}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });
            const data = await resp.json();
            if(resp.ok) {
                token = data.token;
            } else {
                errorMessage = data.error;
            }
            console.log('Reponse login', data);
        } catch(e) {
            errorMessage = 'Could not login';
            console.log(errorMessage, e);
        }
        
        return {errorMessage, data: {token, email}};
    }
}

export default AuthService;