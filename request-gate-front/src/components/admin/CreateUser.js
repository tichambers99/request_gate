import React from "react";
import { Col } from "reactstrap";

import "../common.css";
import "../request/request.css";

export default function CreateUser() {
    return (
        <Col className="box createForm">
            <div className="createForm--flex">
                <div className="createForm__heading">Create user</div>
                <button className="button button--green">Create</button>
            </div>
            <div className="createForm__input">Account</div>
            <div className="box">
                <div className="createForm__listSelect">
                    <div className="select hip__create -email">
                        <div >Email</div>
                        <input  placeholder="" type="text" />
                    </div>

                    <div className="select hip__create -password">
                        <div className="">Password</div>
                        <input placeholder="" type="text" />
                    </div>

                </div>
            </div>
            <div className="createForm__input">information</div>
            <div className="box">
                <div className="createForm__listSelect">
                    <div className="select hip__create -name">
                        <div className ="">Name</div>
                        <input placeholder="" type="text" />
                    </div>

                    <div className="select hip__create -Date">
                        <div className="">Date of birth</div>
                        <input placeholder="" type="text" />
                    </div>

                    <div className="select">
                        <label for="assign">Role</label>
                        <select id="assign">
                            <option>Manager</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                        </select>
                    </div>
                </div>
            </div>
        </Col>
    );
}
