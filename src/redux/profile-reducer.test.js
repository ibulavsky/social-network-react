import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer"
import React from "react"

const state = {
    postsData: [
        {id: 1, message: 'My Post', likesCount: 1},
        {id: 2, message: 'My Post 2', likesCount: 3},
        {id: 3, message: "Hello World! What's up?", likesCount: 25},
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-incubator')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(4)
});

it('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-incubator')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData[3].message).toBe('it-incubator')
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(2)
});

it(`1after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(100)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(3)
});

