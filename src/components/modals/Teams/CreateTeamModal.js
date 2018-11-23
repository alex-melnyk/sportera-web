import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as TeamActions from '../../../store/actions/teamsActions'

import {
    AddPhoto,
    Button,
    DropdownSelect,
    InputRadio,
    InputText,
    Label,
    Modal,
    TextLink,
    TimeSchedule
} from '../../common';

import i18n from '../../../i18n';

import '../../common/close.scss';

class CreateTeamModal extends Component {

    state = {
        teamName: null,
        gender: 'female',
        file: null,
        ageFrom: null,
        ageTo: null,
        employees: null,
        seasonStart: null,
        seasonEnd: null,
    };

    inputChanged = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    addNewTeamHandler = () => {
        if (this.state.teamName !== null) {
            this.props.saga_createNewTeamRequest({
                photo: this.state.file,
                name: this.state.teamName,
                genders: this.state.gender === 'female' ? 0 : 1,
                age: {
                    from: 12,
                    to: 18
                },
                employees: 1,
                season: {
                    start: new Date(2018, 11, 2),
                    end: new Date(2018, 11, 3)
                },
                workingTimes: [{day: 12}]
            })
        }
    };

    renderActionButtons = () => (
        <Button
            text={i18n.t('common_cta_save')}
            onClick={this.addNewTeamHandler}
        />
    );


    render() {
        const {
            visible,
            onClose
        } = this.props;

        return (
            <Modal
                visible={visible}
                title={i18n.t('teams__list__modal_title')}
                actions={this.renderActionButtons()}
                onClose={onClose}
            >
                <div className="bordered-box">
                    <div className="row">

                        <div className="col-md-6">
                            <AddPhoto onChange={(event) => this.inputChanged('file', event.target.files[0])}/>
                        </div>
                        {/*col-md-6*/}

                        <div className="col-md-6">
                            <div className="form-group mb20">
                                <div className="d-block">
                                    <Label/>
                                </div>
                                <div className="d-block">
                                    <InputText
                                        onChange={event => this.inputChanged('teamName', event.target.value)}/>
                                </div>
                            </div>
                            {/*form-group*/}

                            <div className="form-group mb15">
                                <div className="d-block">
                                    <label className="">
                                        Пол игроков
                                    </label>
                                </div>
                                <div className="d-block">
                                    <InputRadio genderSelectedOption={this.state.gender}
                                                genderOptionsHandler={(event) => this.inputChanged('gender', event.target.value)}/>
                                </div>
                            </div>
                            {/*form-group*/}

                            <div className="form-group mb20">
                                <div className="d-block">
                                    <label className="">
                                        Возраст игроков:
                                    </label>
                                </div>
                                <div className="d-block">
                                    <div className="row-sm">
                                        <div className="col-sm">
                                            <DropdownSelect/>
                                        </div>
                                        {/*col-sm*/}
                                        <div className="col-sm">
                                            <DropdownSelect/>
                                        </div>
                                        {/*col-sm*/}
                                    </div>
                                    {/*row-sm*/}
                                </div>
                                {/*d-block*/}
                            </div>
                            {/*form-group*/}

                            <div className="form-group mb0">
                                <div className="d-block">
                                    <label className="">
                                        Тренер
                                    </label>
                                </div>
                                {/*d-block*/}
                                <div className="d-block">
                                    <div className="row-sm align-items-stretch">
                                        <div className="col-sm">
                                            <div className="dropdown-select">
                                                <span className="dropdown-toggle">Выберите тренера</span>
                                                <div className="dropdown-menu d-none">
                                                    <span className="dropdown-item">Select option1</span>
                                                    <span className="dropdown-item">Select option2</span>
                                                    <span className="dropdown-item">Select option3</span>
                                                    <span className="dropdown-item">Select option4</span>
                                                </div>
                                            </div>
                                            {/*dropdown-select*/}
                                        </div>
                                        {/*col-sm*/}

                                        <div className="close-wrap">
                                            <div className="close">
                                                <i className="ft-close"/>
                                            </div>
                                        </div>
                                        {/*close-wrap*/}

                                    </div>
                                    {/*row-sm*/}
                                    <TextLink/>
                                </div>
                                {/*d-block*/}
                            </div>
                            {/*form-group*/}
                        </div>
                        {/*col-md-6*/}
                    </div>
                    {/*row*/}
                </div>
                {/*bordered-box*/}

                <div className="bordered-box">
                    <div className="row">
                        <div className="col">
                            <label className="">
                                Расписание тренировок
                            </label>
                        </div>
                        {/*col*/}
                    </div>
                    {/*row*/}

                    <div className="row">

                        <div className="col-md-6">
                            <div className="row">

                                <div className="col">
                                    <div className="dropdown-select">
                                        <span className="dropdown-toggle">День недели</span>
                                        <div className="dropdown-menu d-none">
                                            <span className="dropdown-item">Select option1</span>
                                            <span className="dropdown-item">Select option2</span>
                                            <span className="dropdown-item">Select option3</span>
                                            <span className="dropdown-item">Select option4</span>
                                        </div>
                                    </div>
                                </div>
                                {/*col*/}

                                <div className="col">
                                    <TimeSchedule/>
                                </div>
                                {/*col*/}
                            </div>
                            {/*row-sm*/}
                        </div>
                        {/*col-md-6*/}

                        <div className="col-md-6">
                            <div className="row-sm">
                                <div className="col-sm">
                                    <div className="dropdown-select">
                                        <span className="dropdown-toggle">День недели</span>
                                        <div className="dropdown-menu d-none">
                                            <span className="dropdown-item">Select option1</span>
                                            <span className="dropdown-item">Select option2</span>
                                            <span className="dropdown-item">Select option3</span>
                                            <span className="dropdown-item">Select option4</span>
                                        </div>
                                    </div>
                                    {/*dropdown-select*/}
                                </div>
                                {/*col-sm*/}
                                <div className="close-wrap">
                                    <div className="close">
                                        <i className="ft-close"/>
                                    </div>
                                </div>
                                {/*close-wrap*/}
                            </div>
                            {/*row-sm*/}
                        </div>
                        {/*col-md-6*/}

                    </div>
                    {/*row*/}
                    <TextLink/>
                </div>
                {/*bordered-box*/}
            </Modal>
        );
    }
}

CreateTeamModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
};

const CreateTeamModalContainer = connect((state) => ({}),
    {saga_createNewTeamRequest: TeamActions.createNewTeam}
)(CreateTeamModal);

export {CreateTeamModalContainer as CreateTeamModal};