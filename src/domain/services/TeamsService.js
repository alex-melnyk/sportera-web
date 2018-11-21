class TeamsService {
    constructor({teamsGateway}) {
        this.teamsGateway = teamsGateway;
    }

    getTeamsList() {
        return this.teamsGateway.getTeamsList();
    }

    addNewTeam({name, image, sex, age, coach, schedule}) {
        return this.teamsGateway.addNewTeam({name, image, sex, age, coach, schedule});
    }
}

export {TeamsService};