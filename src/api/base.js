const base = {
    baseUrl:"/api",
    login:"/api/login",  // 登陆
    register:"/api/register", // 注册
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage", // 商品查询接口
    total:"/api/total", // 商品总条数
    search:"/api/search", // 商品的模糊查询
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId",// 类目选择
    insertTbItem:"/api/backend/item/insertTbItem", // 添加产品
    deleteItemById:"/api/backend/item/deleteItemById",
    preUpdateItem:"/api/backend/item/preUpdateItem", // 预更新
    updateTbItem:"/api/backend/item/updateTbItem", // 修改商品
    preCategory:"/api/preCategory", // 类目预更新

}

export default base;