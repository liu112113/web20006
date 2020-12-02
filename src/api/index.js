import axios from "../utils/request"
import base from "./base"

const api = {
    /**
     * 登陆接口
     */
    getLogin(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    /**
     * 注册接口
     */
    getRegister(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    /**
     * 商品查询接口
     */
    getSelectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{
            params
        })
    },
    /**
     * 商品总条数
     */
    getTotal(){
        return axios.get(base.baseUrl + base.total)
    },
    /**
     * 商品模糊查询
     */
    getSearch(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    /**
     * 类目选择
     */
    selectItemCategoryByParentId(params){
        return axios.get(base.baseUrl + base.selectItemCategoryByParentId,{
            params
        })
    },
    /**
     * 添加产品
     */
    insertTbItem(params){
        return axios.get(base.baseUrl + base.insertTbItem,{
            params
        })
    },
    /**
     * 删除产品
     */
    deleteItemById(params){
        return axios.get(base.baseUrl + base.deleteItemById,{
            params
        })
    },
    /**
     * 预更新
     */
    preUpdateItem(params){
        return axios.get(base.baseUrl + base.preUpdateItem,{
            params
        })
    },
    /**
     * 修改商品
     */
    updateTbItem(params){
        return axios.get(base.baseUrl + base.updateTbItem,{
            params
        })
    },
    /**
     * 类目预更新
     */
    preCategory(params){
        return axios.get(base.baseUrl + base.preCategory,{
            params
        })
    }
}

export default api;