import axios from 'axios';

import {AuthGateway, TeamsGateway} from "./gateways";
import {AuthService, TeamsService} from "./services";

const restAdapter = axios.create({
    baseURL: 'http://beanstalk-staging.seqpubr7vy.eu-central-1.elasticbeanstalk.com/api'
});

const fileAdapter = axios.create({
    baseURL: 'http://beanstalk-staging.seqpubr7vy.eu-central-1.elasticbeanstalk.com/api'
});

const adapters = {
    restAdapter,
    fileAdapter
};

const authGateway = new AuthGateway(adapters);
const teamsGateway = new TeamsGateway(adapters);

const gateways = {
    authGateway,
    teamsGateway
};

const authService = new AuthService(gateways);
const teamsService = new TeamsService(gateways);

export {
    authService,
    teamsService
};

export function applyAccessToken(accessToken) {
    restAdapter.defaults.headers['X-Session-Id'] = fileAdapter.defaults.headers['X-Session-Id'] = accessToken;

    fileAdapter.defaults.headers.post['Content-Type'] = 'multipart/form-data';
}