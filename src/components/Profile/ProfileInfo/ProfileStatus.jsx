import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    activateEditMode = () => this.setState({editMode: true});

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => this.setState({status: e.currentTarget.value});

    render({status}) {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div>
                           <span onDoubleClick={this.activateEditMode}>
                               {status || "no-status"}
                           </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

