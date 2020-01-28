import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
// import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const Posts = React.memo((props) => {
        const MyPosts = props.profilePage.postsData.map((obj) => <Post key={obj.id} message={obj.message}
                                                                       likesCount={obj.likesCount}/>)
        let onAddPost = (values) => {
            props.addPost(values.newPostText);
            // ADD-POST
        };
        return (
            <div className={s.item}>
                {!!props.isOwner &&
                <>
                    <PostsFormRedux onSubmit={onAddPost}/>

                    <div className={s.posts}>
                        {MyPosts}
                    </div>
                </>
                }
            </div>
        )
    }
)

const maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <Field component={Textarea}
                       name='newPostText'
                       placeholder="What's up?"
                       validate={[required, maxLength10]}/>
                <button>Запостить</button>
            </div>
        </form>
    )
};

const PostsFormRedux = reduxForm({form: "profileAddPostForm"})(PostsForm);

// Post.propTypes = {
//     postsData: PropTypes.objectOf(PropTypes.shape({
//             message: PropTypes.string.isRequired,
//             likesCount: PropTypes.number.isRequired
//         }.isRequired
//         ).isRequired
//     )
// };

export default Posts;
