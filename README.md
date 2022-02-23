# xzvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




为什么会有路由元信息这个东西？
我们在做网站登录验证的时候，可以使用到beforeEach 钩子函数进行验证操作，如下面代码 ，如果页面path为’/goodsList’，那么就让它跳转到登录页面，实现了验证登录。

router.beforeEach((to, from, next) => {
  if (to.path === '/goodsList') {
    next('/login')
  } else 
    next()
})

如果需要登录验证的网页多了怎么办？
1.这里是对比path。如果需要验证的网页很多，那么在if条件里得写下所有的路由地址，将会是非常麻烦的一件事情。
2.因为路由是可以嵌套的。有’/goodsList’，那么可能会有’/goodsList/online’，再或者还有’/goodsList/offline’、’/goodsList/audit’、’/goodsList/online/edit’等等。

如果像刚才例子中这样对比（to.path === ‘/goodsList’），就非常单一，其他的路径压根不会限制（验证）到，照样能正常登陆！因为每个to.path根本不一样。

我们所理想的就是把’/goodsList’限制了，其他所有的以’/goodsList’开头的那些页面都给限制到！

to Route: 即将要进入的目标 路由对象
我们打印一下to

它有很多属性，有
- fullPath
- hash
- matched
- meta
- name
- params
- path
- query

其中有个属性，matched，就是匹配了的路由，我们打印出来，这个是个数组。它的第一项就是{path: “/goodslist”}，一直到最为具体的当前path （例如：{path: “/goodslist/online/edit”}）

这里可以循环matched这个数组，看每一项的path 有没有等于’/goodsList’,只要其中一个有，那么就让它跳转到登录状态

router.beforeEach((to, from, next) => {
  if (to.matched.some(function (item) {
    return item.path == '/goodslist'
  })) {
    next('/login')
  } else 
    next()
})

那么这里只是对goodsList进行验证判断，且限制的还是path，如果页面中还有会员列表、资讯列表、广告列表都需要进行验证的时候，用path来做限制似乎有点不好用。轮到主角登场了
meta字段（元数据）

直接在路由配置的时候，给每个路由添加一个自定义的meta对象，在meta对象中可以设置一些状态，来进行一些操作。用它来做登录校验再合适不过了

{
  path: '/actile',
  name: 'Actile',
  component: Actile,
  meta: {
    login_require: false
  },
},
{
  path: '/goodslist',
  name: 'goodslist',
  component: Goodslist,
  meta: {
    login_require: true
  },
  children:[
    {
      path: 'online',
      component: GoodslistOnline
    }
  ]
}

这里我们只需要判断item下面的meta对象中的login_require是不是true，就可以做一些限制了

router.beforeEach((to, from, next) => {
  if (to.matched.some(function (item) {
    return item.meta.login_require
  })) {
    next('/login')
  } else 
    next()
})

