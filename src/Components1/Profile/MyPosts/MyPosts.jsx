import { kMaxLength } from "buffer";
import React, {PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControls";
import s from './MyPosts.module.css';
import Post from './Post/Post'
const maxLength10 = maxLengthCreator(10)

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Add Post Form'
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength10]} />
      </div>
      <div className={s.buttonclick}>
        <button>Добавить Form</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'profile-add-post' })(addNewPostForm);

 const MyPosts = React.memo(props => {
 console.log("render")
  let postsElements = [...props.posts]
  .reverse()
  .map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts ana my message</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>);

})

export default MyPosts;

