import * as APIPaths from "../APIPaths";

class AuthGateway {
    constructor({restAdapter}) {
        this.restAdapter = restAdapter;
    }

    /**
     * Sign in with specified email and password parameters.
     *
     * @param {String} email - Email for sign in.
     * @param {String} password - Password for sign in.
     */
    async signIn({email, password}) {
        const {data} = await this.restAdapter.post(APIPaths.SESSION, {
            email,
            password
        });

        return data;
    }
}

export {AuthGateway};