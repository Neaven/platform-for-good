import { Injectable } from '@angular/core';
import { CrudService } from '../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
// import { Auth } from 'aws-amplify';
import { StorageService } from '../core/services/storage/storage.service';
import { StorageKey } from '../core/services/storage/storage.model';
const { AUTH_TOKEN } = StorageKey;

@Injectable({
    providedIn: 'root',
})
@Injectable({
    providedIn: 'root',
})
export class AuthService extends CrudService {
    endpoint = 'auth';
    redirectUrl: string;
    signstatus = 'signin'
    token: string;
    userName: string;
    toVerifyEmail: boolean;

    constructor(http: HttpClient, private storage: StorageService) {
        super(http);
        this.token = this.storage.read(AUTH_TOKEN) || '';
        this.toVerifyEmail = false;
    }

    public async login(email: string, password: string) {
        try {
            this.token = await this.post({ email, password });
            this.storage.save(AUTH_TOKEN, this.token);
            return this.redirectUrl;

        } catch (error) {
            console.error('Error during login request', error);
            return Promise.reject(error);
        }
    }

    public async mockLogin(email: string, password: string) {
        try {
            if (!(email === 'user' && password === 'user')) {
                throw new Error(
                    'When using mockLogin, login with credentials: \nemail: user\npassword:user',
                );
            }
            this.token = 'user';
            this.storage.save(StorageKey.AUTH_TOKEN, this.token);
            return this.redirectUrl;

        } catch (e) {
            return Promise.reject(e.message);
        }
    }

    public getToken(): string {
        return this.token;
    }

    public logout() {
        this.token = '';
        this.storage.remove(AUTH_TOKEN);
    }

    public isLogged(): boolean {
        return this.token.length > 0;
    }

    public async signUpToAWS(email: string, contactNo: number, username: string, password: string) {

        this.userName = username;

        const user = {
            username,
            password,
            attributes: {
                email,               // optional
                phone_number: contactNo,    // optional - E.164 number convention
                // other custom attributes 
            }
        }

        // await Auth.signUp(user);
        this.toVerifyEmail = true;
        this.signstatus = '';
        // Auth.signUp(user)
        //     .then(data => {
        //         console.log(data);
        //         this.toVerifyEmail = true;
        //         this.signstatus = "";
        //     }).catch(err => console.log(err));

    }

    public onVerify(verifycode: string) {
        // After retrieving the confirmation code from the user
        // Auth.confirmSignUp(this.userName, verifycode, {
        //     // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        //     forceAliasCreation: true

        // }).then(data => {
        //     console.log(data)
        //     this.toVerifyEmail = false;
        //     this.signstatus = 'signin'

        // }).catch(err => console.log(err));
    }

    public async signInToAWS(email: string, password: string) {

        const authInfo = {
            username: email,
            password
        }

        // await Auth.signIn(authInfo);

        return this.redirectUrl;
        
        // Auth.signIn(authInfo).then(user => {
        //     console.log(user);
        //     // this.route.navigate(['/dashboard'])
        //     //TODO
        //     return this.redirectUrl;
        // }).catch(err => console.log(err));

    }
}
