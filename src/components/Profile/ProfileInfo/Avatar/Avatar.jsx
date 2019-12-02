import React, {Component} from 'react';
import s from "./Avatar.module.css";

class Avatar extends Component {

    handleChange = (e) => {
        this.props.addPhoto(e.target.files[0])
    };

    render() {
        return (
            <div>
                <img className={s.photo} src={this.props.photo.large}></img>
                <div>
                <input type='file'
                       onChange={this.handleChange}/>
                </div>

            </div>


        )
    }
}

export default Avatar;
