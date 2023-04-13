import Posts from "./components/posts/Posts";
import {useState} from "react";
import FullPost from "./components/fullPost/FullPost";
import './index.css';


function App() {

    let [onePost, setOnePost] = useState(null)
    let lift = (value) => {
        setOnePost({...value});
    }

    return (
        <div className={'main'}>

            <div className={'posts'}>
                <Posts lift={lift}/>
            </div>


            <div className={'full-post'}>
                {
                onePost
                &&
                (
                    <div className={'full-post'}>
                        <FullPost value={onePost}/>
                    </div>
                )


            }
            </div>
        </div>
    );
}

export default App;
