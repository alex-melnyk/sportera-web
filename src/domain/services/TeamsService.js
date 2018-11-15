class TeamsService {
    constructor({teamsGateway}) {
        this.teamsGateway = teamsGateway;
    }

    getTeamsList() {
        return this.teamsGateway.getTeamsList();
    }
}

export {TeamsService};