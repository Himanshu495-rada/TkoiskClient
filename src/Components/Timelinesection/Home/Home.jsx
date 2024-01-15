import React, { useEffect, useState } from "react";
import "./Home.css";
import CreatePost from "../../CreatePost/CreatePost";
import Post from "../../Post/Post";
import PostSkeleton from "../../Post/PostSkeleton";
import { homeTimeline } from "../../../Services/TweetService";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import client from "../../../apolloClient";
import { useRecoilState } from "recoil";
import { PostList } from '../../../State/atoms/PostListState'
import InfiniteScroll from 'react-infinite-scroll-component'

function Home() {

  const HOMETIMELINE = gql`
    query Query($first: Int, $after: ID) {
      homeTimeline(first: $first, after: $after) {
        endCursor
        tweets {
          _id
            user {
              name
              username
              isVertified
            }
            tweet_text
            liked_by {
              _id
            }
            comments {
              _id
            }
          createdAt
        }
      }
    }
  `;


  const [postList, setPostList] = useRecoilState(PostList);
  const [cursor, setCursor] = useState(null);
  let ITEMS_PER_PAGE = 10;

  const updateHomeTimeline = () =>{
    if (data) {
      console.log(data)
      setPostList(prevData => [...prevData, ...data.homeTimeline.tweets]);
      setCursor(data.homeTimeline.endCursor);
      console.log(postList)
    }
    if (error) {
      console.log(error);
    }

  }

  const { loading, error, data, fetchMore } = useQuery(
    HOMETIMELINE, {
    variables: {
      first: ITEMS_PER_PAGE,
      after: cursor
    },

  });

  const addActiveClass = (e) => {
    let elements = document.getElementsByClassName("tab");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    e.target.classList.add("active");
  };

  const fetchMoreData = () => {
    console.log("inside fetch more data")
    if (!loading && cursor) {
      fetchMore({
        variables: {
          first: ITEMS_PER_PAGE,
          after: cursor
        },
        skip: cursor === null,
      });
      
    }
  }
  const hasMoreDataToLoad = !!cursor && data?.homeTimeline?.endCursor

  useEffect(() => {
      

  },[]);

  return (

    <div className="home" id="home">
      <div className="navbara">
        <div
          id="for-you"
          className="for-you tab active"
          onClick={addActiveClass}
        >
          For you
        </div>
        <div id="following" className="following tab" onClick={addActiveClass}>
          Following
        </div>
      </div>

      <CreatePost />

      <InfiniteScroll
        dataLength={postList.length}
        next={fetchMoreData}
        hasMore={hasMoreDataToLoad}
        loader={<p>Loading...</p>}
        scrollableTarget="home"
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >

        {postList.length > 0 ? (
          postList.map((post) => {
            return <Post data={post} key={post._id} />;
          })
        )

          : (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}
      </InfiniteScroll>
    </div>

  );
}

export default Home;
