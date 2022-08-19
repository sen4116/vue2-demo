const countOptions = {
    namespaced: true, //开启命名空间
    actions: {
        jia(context, value) {
            // context: 上下文对象
            // console.log(context,value)
            context.commit('Jia', value)
        },
        jian(context, value) {
            context.commit('Jian', value)
        },
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('Jia', value)
            } else {
                alert('当前和不是奇数')
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('Jia', value)
            }, 5000)
        }
    },
    mutations: {
        Jia(state, value) {
            state.sum += value
        },
        Jian(state, value) {
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            console.log(state)
            return state.sum * 10
        }
    },
    state: {
        sum: 1,
        name: '陈平安',
        fiction: '剑来',
    }
}

export default countOptions