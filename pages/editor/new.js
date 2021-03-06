import Router from "next/router";
import React from "react";
// import useSWR from "swr";

const PublishArticleEditor = () => {
    const initialState = {
      title: "",
      description: "",
      body: "",
      tagList: [],
    };
  
    const [isLoading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    console.log("useState", React.useState);

    console.log("dispatcher", React.useState([]));


    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
        console.log("submit")
    //   const { data, status } = await ArticleAPI.create(
    //     posting,
    //     currentUser?.token
    //   );
  
    //   setLoading(false);
  
    //   if (status !== 200) {
    //     setErrors(data.errors);
    //   }
  
    //   Router.push("/");
    };
  
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              {/* <ListErrors errors={errors} /> */}
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Article Title"
                    //   value={posting.title}
                    //   onChange={handleTitle}
                    />
                  </fieldset>
  
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What's this article about?"
                    //   value={posting.description}
                    //   onChange={handleDescription}
                    />
                  </fieldset>
  
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows={8}
                      placeholder="Write your article (in markdown)"
                    //   value={posting.body}
                    //   onChange={handleBody}
                    />
                  </fieldset>
  
                  {/* <TagInput
                    tagList={posting.tagList}
                    addTag={addTag}
                    removeTag={removeTag}
                  /> */}
  
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={isLoading}
                    onClick={handleSubmit}
                  >
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PublishArticleEditor;