import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
} from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    // destructuring
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //     .then(({ data }) => {
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_JOBS({ commit }) {
        // 강의 선생님은 여기서 예외처리를 하지 않는다고 함
        try{
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error){
            console.log(error);
        }
    },
    // FETCH_ASK(context) {
    //     return fetchAskList()
    //     .then(response => {
    //         context.commit('SET_ASK', response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_ASK({ commit }) {
        // 예외처리 api단에서
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    // FETCH_USER({ commit }, username) {
    //     return fetchUserInfo(username)
    //     .then(({ data }) => {
    //         commit('SET_USER', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_USER({ commit }, username) {
        const response = await fetchUserInfo(username);
        commit('SET_USER', response.data);
        return response;
    },
    // FETCH_ITEM({ commit }, id) {
    //     return fetchCommentItem(id)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then(({ data }) => commit('SET_LIST', data))
    //     .catch(error => console.log(error));
    // }
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
}