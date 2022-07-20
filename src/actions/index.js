import { createAction } from "@reduxjs/toolkit";

// lab
export const snackMessage = createAction("SNACK_MESSAGE");

// post
export const tags = createAction("TAGS");

// emoji
export const whichPage = createAction("WHICH_PAGE");
export const selectCategory = createAction("SELECT_CATEGORY");
export const selectTag = createAction("SELECT_TAG");
export const expandTag = createAction("EXPAND_TAG");
export const expandCategory = createAction("EXPAND_CATEGORY");
export const toggleDrawer = createAction("TOGGLE_DRAWER");
export const search = createAction("SEARCH");
export const loading = createAction("LOADING");

// chat
export const message = createAction("MESSAGE");
export const chatBoard = createAction("CHAT_BOARD");
