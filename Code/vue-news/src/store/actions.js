import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    // destructuring
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}