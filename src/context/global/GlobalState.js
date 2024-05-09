import React, {useReducer} from "react";

import globalReducer from "./globalReducer";
import globalContext from "./globalContext";

import { ADD_POSTS } from "../types";
import axios from "axios";


const GlobalState = props => {
    const initialState = {
        posts: [],
        page: 1
    }

    const [state, dispatch] = useReducer (globalReducer, initialState)
    
    //Function to get next 5 posts
    const addPosts = async (page) => {
        try {
            const res = await axios(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
            const data = await res.data;
            dispatch({type: ADD_POSTS, payload: {data, page }})
            //const data = await res.data
        } catch (error) {
            console.error(error);
        }
    }

    // const posts = state ? state.posts : [];
    // const page = state ? state.page : 1;

    return <globalContext.Provider 
            value={{
                posts: state.posts,
                page: state.page,
                addPosts: addPosts
            }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;