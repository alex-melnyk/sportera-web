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
}

export {TeamsGateway};