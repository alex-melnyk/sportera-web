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
        console.log('data2', {data});
        return data;
    }
}

export {TeamsGateway};