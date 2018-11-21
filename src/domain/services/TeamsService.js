class TeamsService {
    constructor({teamsGateway}) {
        this.teamsGateway = teamsGateway;
    }

    getTeamsList() {
        return this.teamsGateway.getTeamsList();
    }

    addNewTeam({
                   photo,
                   name,
                   genders,
                   age,
                   employees,
                   season,
                   workingTimes,
               }) {
        return this.teamsGateway.addNewTeam({
            photo,
            name,
            genders,
            age,
            employees,
            season,
            workingTimes,
        });
    }
}

export {TeamsService};