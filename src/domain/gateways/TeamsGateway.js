import * as APIPaths from "../APIPaths";

class TeamsGateway {
    constructor({restAdapter}) {
        this.restAdapter = restAdapter;
    }

    /**
     * Get teams list.
     */
    async getTeamsList() {
        const {data} = await this.restAdapter.get(APIPaths.TEAMS);

        return data;
    }

    async addNewTeam({name, image, sex, age, coach, schedule}) {
        const {data} = await this.restAdapter.post(APIPaths.ADD_NEW_TEAM,{name, image, sex, age, coach, schedule});
        
        return data;
    }
}

export {TeamsGateway};