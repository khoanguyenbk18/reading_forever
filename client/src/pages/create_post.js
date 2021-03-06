import React, { Component } from "react";
import firebase from "firebase/app";
import FileUploader from "react-firebase-file-uploader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createPost } from "../urls/post_apis";
import { isEmpty } from "validator";
import { Path } from "../libs/path";
import ProgressBar from 'react-bootstrap/ProgressBar'
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //post body
      title: "",
      image: "",
      author: "",
      publish_date: new Date(),
      category_id: 0,
      content: "",

      listCategories: [],
      isUploading: false,
      progress: 0,
      avatarURL: "",
      picture: null
    };
    this.postComment = this.createPost.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.renderLocalImage = this.renderLocalImage.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.postIsFullFill = this.postIsFullFill.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const listCategories = JSON.parse(localStorage.getItem("categories"));
    this.setState({ listCategories: listCategories });
  }

  handleUploadStart = () => {this.setState({ isUploading: true, progress: 0 })};
  handleProgress = progress => this.setState({ uploadProgress: progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    console.log("TCL: CreatePost -> filename", filename);
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        // this.setState({avatarURL: url});
        this.createPostToServer(url);
      });
  };

  createPostToServer(url) {
    const postBody = {
      title: this.state.title,
      image: url,
      author: this.state.author,
      publish_date: this.state.publish_date,
      category_id: this.state.category_id,
      content: this.state.content
    };
    createPost(postBody)
      .then(res => {
        console.log("TCL: CreatePost -> createPostToServer -> res", res);
        this.showToast();
        setTimeout(() => {
          this.props.history.push(Path.LandingPage);
        }, 3000);
      })
      .catch(err => {
        console.log("TCL: CreatePost -> createPostToServer -> err", err);
      });
  }

  showToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 5000);
  }

  createPost() {
    //Upload image to firebase
    if (this.postIsFullFill()) {
      const { picture } = this.state;
      if (picture) {
        this.fileUploader.startUpload(picture);
      }
    } else {
      window.alert("Somethine wrong, check all fill");
    }
  }

  postIsFullFill() {
    console.log(
      "TCL: CreatePost -> postIsFullFill -> this.state.title",
      this.state.title
    );
    console.log(
      "TCL: CreatePost -> postIsFullFill -> this.state.author",
      this.state.author
    );
    console.log(
      "TCL: CreatePost -> postIsFullFill -> this.state.picture",
      this.state.picture
    );
    console.log(
      "TCL: CreatePost -> postIsFullFill -> this.state.content",
      this.state.content
    );
    console.log(
      "TCL: CreatePost -> postIsFullFill -> this.state.category_id",
      this.state.category_id
    );
    if (isEmpty(this.state.title)) return false;
    if (isEmpty(this.state.author)) return false;
    if (this.state.picture === null || this.state.picture === undefined|| !this.state.picture.type.includes("image"))
      return false;
    if (isEmpty(this.state.content)) return false;
    if (this.state.category_id === 0) return false;
    return true;
  }

  onChangeHandler = event => {
    const {
      target: { files }
    } = event;

    this.setState({ picture: files[0] }, () => {
      // var a = this.state.picture.type;
      console.log(this.state.picture.type.includes("image"));
    });
  };

  renderLocalImage() {
    return URL.createObjectURL(this.state.picture);
  }

  renderCategory() {
    return this.state.listCategories.map((cate, index) => {
      return (
        <option value={cate.name} key={index}>
          {cate.name}
        </option>
      );
    });
  }

  handleChange = date => {
    this.setState({
      publish_date: date
    });
  };
  render() {
    return (
      <div>
        <section
          className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
          style={{backgroundImage: 'url(images/bg-registration-form-1.jpg)'}}>
          <h2 className='tit6 t-center'>READING FOREVER</h2>
        </section>
        <section>
          <div className="container">
            {/* Block4 */}
            <div className="blo4 p-b-63">
              {/* - */}
              <div className="text-blo4 p-t-33">
                <h4 className="p-b-16">
                  <input
                    className="tit9 bo-rad-10"
                    type="text"
                    placeholder="Title"
                    onChange={e => {
                      this.setState({ title: e.target.value });
                    }}
                  />
                </h4>
                <h5 className="p-b-16">
                  <input
                    className="tit10 bo-rad-10"
                    type="text"
                    placeholder="Author"
                    onChange={e => {
                      this.setState({ author: e.target.value });
                    }}
                  />
                </h5>
                <h5 className="p-b-16">
                  <div className="tit10">
                    Publish Date:
                    <DatePicker
                      className="tit10"
                      selected={this.state.publish_date}
                      onChange={this.handleChange}
                    />
                  </div>
                </h5>

                {this.state.picture ? (
                  <img alt="" src={this.renderLocalImage()} />
                ) : null}
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                  onChange={this.onChangeHandler}
                  ref={instance => {
                    this.fileUploader = instance;
                  }}
                />
                <div className="progress">
                  <ProgressBar variant="success" now={this.state.uploadProgress} style={{width: '25%', height: '2px'}} animated />
                </div>
                <select
                  name="true"
                  id="true"
                  defaultValue="Category"
                  className="form-control"
                  onChange={evt => {
                    const selectedCategory = this.state.listCategories.find(
                      cate => cate.name === evt.target.value
                    );
                    console.log(
                      "TCL: render -> selectedCategory",
                      selectedCategory
                    );
                    this.setState({ category_id: selectedCategory.id });
                  }}
                >
                  <option value="Category" disabled>
                    Category
                  </option>
                  {this.renderCategory()}
                </select>
                <textarea
                  rows="20"
                  cols="50"
                  placeholder="Content"
                  className="container-fluid"
                  onChange={e => {
                    this.setState({ content: e.target.value });
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={this.createPost}
              className="btn3 flex-c-m size31 txt11 trans-0-4"
            >
              Post
            </button>
          </div>
        </section>
        <div id="toast">
          <div id="img">DONE!</div>
          <div id="desc">...Your post is pending for admin to review....</div>
        </div>
      </div>
    );
  }
}
export default CreatePost;
