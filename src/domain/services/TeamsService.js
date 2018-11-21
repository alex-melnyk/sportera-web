class TeamsService {
    constructor({teamsGateway}) {
        this.teamsGateway = teamsGateway;
    }

    getTeamsList() {
        return this.teamsGateway.getTeamsList();
    }

    addNewTeam() {
        return this.teamsGateway.addNewTeam();
    }
}

export {TeamsService};