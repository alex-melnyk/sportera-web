class AuthService {
    constructor({authGateway}) {
        this.authGateway = authGateway;
    }

    signIn({email, password}) {
        return this.authGateway.signIn({email, password});
    }
}

export {AuthService};