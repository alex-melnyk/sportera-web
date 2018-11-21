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

    async addNewTeam({
                         photo,
                         name,
                         genders,
                         age,
                         employees,
                         season,
                         workingTimes,
                     }) {


        let formData = new FormData();    //formdata object

        formData.append('program[photo]', photo);
        formData.append('program[name]', name);
        // formData.append('program[field_name]', name);
        // formData.append('program[field_id]', name);
        formData.append('program[genders][]', genders);
        formData.append('program[age_from]', age.from);
        formData.append('program[age_to]', age.to);
        formData.append('program[employee_programs_attributes][][employees_position_id]', employees);

        formData.append('program[season_start]', season.start);
        formData.append('program[season_end]', season.end);

        for (let key of workingTimes.keys()) {
            console.log(key); // expected output: 0 1 2
        }

        // formData.append('program[working_times_attributes][][day]', name);
        // formData.append('program[working_times_attributes][][from]', name);
        // formData.append('program[working_times_attributes][][to]', name);
        //
        // formData.append('program[working_times_attributes][][day]', name);
        // formData.append('program[working_times_attributes][][from]', name);
        // formData.append('program[working_times_attributes][][to]', name);


        const {data} = await this.restAdapter.post(APIPaths.TEAMS, formData);

        return data;
    }
}

export {TeamsGateway};