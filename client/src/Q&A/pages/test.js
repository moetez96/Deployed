import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../actions/questions";

const test = (props) => {

    return (
        <div >
            {props.upVotes}
        </div>
    );
}

export default test;
