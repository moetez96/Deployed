import React from "react";
import {useDispatch} from "react-redux";
import {createVote} from "../../actions/questions";


const Question = (props) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;

    console.log(props.quest.upVotes)
    var UpVotes = [];
    for (var i in props.quest.upVotes)
        UpVotes.push(props.quest.upVotes[i].user);

    const handleUp = () => {
        dispatch(createVote(props.quest._id, user));
    }

    return (
        <div>
            {UpVotes.length}
            <button onClick={handleUp}> up</button>
        </div>
    );
}

export default Question;
