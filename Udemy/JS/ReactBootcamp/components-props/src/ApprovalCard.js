import React from 'react';

const ApprovalCard = (props) => {

    return (
        <div className="ui card">
            {/* when we pass another component in as a prop, it gets stored as a object
                we can access all the data in the child component using props.children.
                this will display the data passed in the child components props.
                check commentDetail props to see what is being passed through. */}
            <div className="content">{ props.children }</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;