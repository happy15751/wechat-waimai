//配置axios
import axios from 'axios';
// 引入qs
import qs from 'qs';
//设置后台接口基路径
// axios.defaults.baseURL='http://47.93.206.13:5588';
axios.defaults.baseURL='http://127.0.0.1:1234';


// axios.get('/category/findAll');
// http://47.93.206.13:5588/category/findAll
//请求拦截器 设置请求携带的参数格式  设置表单格式数据给后台
axios.interceptors.request.use(config => {
    //拦住请求，处理请求
    //config.method  请求方式  config.url请求的接口路径
    //config.data是携带给后台的数据
    if(config.method=='post'){
        config.data =qs.stringify(config.data);
    }
    // console.log(config,'axios请求内的配置对象')
    return config;
  }, error => {
    return Promise.reject(error);
  });

//默认该js文件的导出文件
  export default axios;