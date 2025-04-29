// src/hooks/usePosts.ts
import { useEffect, useReducer } from "react";
import axios from "axios";
import { Post } from "../types/Post";

type State = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: Post[] }
  | { type: "FAILURE"; payload: string };

const initialState: State = {
  posts: [],
  loading: false,
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { posts: action.payload, loading: false, error: null };
    case "FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const usePosts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({ type: "SUCCESS", payload: response.data });
      } catch (error: any) {
        console.error("Fetch error:", error);
        dispatch({ type: "FAILURE", payload: "Failed to load posts." });
      }
    };

    fetchPosts();
  }, []);

  return state;
};
