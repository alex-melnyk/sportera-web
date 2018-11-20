import React from 'react';

import {Button} from "./Button";
import {AddPhoto} from "./AddPhoto";
import {Label} from "./Label";
import {InputText} from "./InputText";
import {InputRadio} from "./InputRadio";
import {DropdownSelect} from "./DropdownSelect";

import './Modal.scss';

const Modal = ({children, visible}) => {
    if (!visible) {
        return null;
    }

    return (

        <div className="modal-wrap">
            <div className="modal-dialog">

                <div className="modal-content modal-wide">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h4 className="fw400">Создать команду</h4>
                        </div>
                        <div className="modal-close close">
                            <i className="ft-close"/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="bordered-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <AddPhoto/>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb20">
                                        <div className="d-block">
                                            <Label/>
                                        </div>
                                        <div className="d-block">
                                            <InputText/>
                                        </div>
                                    </div>
                                    <div className="form-group mb15">
                                        <div className="d-block">
                                            <label className="">
                                                Пол игроков
                                            </label>
                                        </div>
                                        <div className="d-block">
                                            <InputRadio/>
                                        </div>
                                    </div>
                                    <div className="form-group mb20">
                                        <div className="d-block">
                                            <label className="">
                                                Возраст игроков:
                                            </label>
                                        </div>
                                        <div className="d-block">
                                            <DropdownSelect/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bordered-box">

                            {children}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button
                            text="Сохранить"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};

Modal.propTypes = {};

export {Modal};