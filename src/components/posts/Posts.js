import React, {Component, useEffect, useState} from 'react';


import { postsService} from "../../services/posts.service";
import {Post} from "../post/Post"

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }

    }

    componentDidMount() {
        postsService.getAll().then(value=>value.data).then(value=>this.state({posts:value}))
    }

    render() {



        return (
            <div>
                {
                    <Post value={this.state()}/>
                }

            </div>
        );
    };
}
export {Posts}