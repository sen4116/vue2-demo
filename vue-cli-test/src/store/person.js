import axios from 'axios'
import { nanoid } from 'nanoid'
const personOptions = {
    namespaced: true,//开启命名空间
    actions: {
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=socidl').then(
                res =>{

                    context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
                },
                error => {} 
            )
        },
        addPersonWang(context,personObj){
            console.log(personObj.name)
            if(personObj.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',personObj)
            }else{
                alert('请输入姓王的名字')
            }
        }
    },
    mutations: {
        ADD_PERSON(steta, personObj) {
            steta.personList.unshift(personObj)
        }
    },
    state: {
        personList: [{
            id: '001',
            name: '小明'
        }]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0]
        }
    }
}
export default personOptions