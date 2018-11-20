import React from 'react';
import PropTypes from 'prop-types';

import {Button} from "./Button";
import {AddPhoto} from "./AddPhoto";
import {Label} from "./Label";
import {InputText} from "./InputText";
import {InputRadio} from "./InputRadio";
import {DropdownSelect} from "./DropdownSelect";
import {TextLink} from "./TextLink";
import {TimeSchedule} from "./TimeSchedule";

import './Modal.scss';
import './Close.scss';

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
              <i className="ft-close" />
            </div>
          </div>
          {/*modal-header*/}

          <div className="modal-body">

            <div className="bordered-box">
              <div className="row">

                <div className="col-md-6">
                  <AddPhoto />
                </div>
                {/*col-md-6*/}

                <div className="col-md-6">
                  <div className="form-group mb20">
                    <div className="d-block">
                      <Label />
                    </div>
                    <div className="d-block">
                      <InputText />
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
                      <InputRadio />
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
                          <DropdownSelect />
                        </div>
                        {/*col-sm*/}
                        <div className="col-sm">
                          <DropdownSelect />
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
                            <i className="ft-close" />
                          </div>
                        </div>
                        {/*close-wrap*/}

                      </div>
                      {/*row-sm*/}
                      <TextLink />
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
                      <TimeSchedule />
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
                        <i className="ft-close" />
                      </div>
                    </div>
                    {/*close-wrap*/}
                  </div>
                  {/*row-sm*/}
                </div>
                {/*col-md-6*/}

              </div>
              {/*row*/}
              <TextLink />
            </div>
            {/*bordered-box*/}
          </div>
          {/*modal-body*/}

          <div className="modal-footer">
            <Button
              text="Сохранить"
            />
          </div>
          {/*modal-footer*/}

        </div>
        {/*modal-content modal-wide*/}

      </div>
      {/*modal-dialog*/}
    </div>

  );

};

Modal.propTypes = {
};

export {Modal};