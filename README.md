# vue_router_apps

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

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Vue_routes_employee_details


Route Parameters 

 

 We we make props  : true  then parmas will be accepted as Props  need not to access by 
In child compoenet 
  <!-- <h2>id is {{ $route.params.id }}</h2> 
But by 
 <h2>id is {{ id }}</h2>

Need to register all props 
export default {
    props:['id','title','address'],

  data() {
    return {
    //   id: this.$route.params.id,
    }
  }
}

In parent compoent 
<tbody>
        <tr v-for="items in Employee" :key="items.id" class="tableRow">
          <td>{{ items.id }}</td>
          <nav>
            <router-link 
            :to="{name:'JobsDetails', params:{id:items.id ,title:items.title,
            address:items.Address}}">
              <td>{{ items.title }}</td>
            </router-link>
          </nav>
 
          <td>{{ items.Address }}</td>
          <td>{{ items.Salary }}</td>
        </tr>
      </tbody>


Redirect to 
If user giving invalid path then redirect to  correct one 
http://localhost:8082/any -jobs --> jobs screen will open 
  //redirect to 
  {
    path: '/any-jobs',
    redirect: '/jobs'
  }

Not Found 404 page 
  //catch all 404 routes 
  {
    path: '/:cathAll(.*)',
    component: NotFound

  },

===To duplicate the row === Shift +Alt + Down key 

===Programtically Navigation 


<button @click="back" class="redirectTo">
Go Back</button>

  <button @click="redirect" class="redirectTo">
redirect to Home</button>

  <button @click="Next" class="redirectTo">Go next</button>
  <router-view />	<script>  // in APP.vue where router-view define
export default {
  methods: {
    back() {  this.$router.go(-1) },

    redirect() { this.$router.push({ name: "home" }) 
    },
    Next() { this.$router.go(+1)  },
  },
};
</script>

===Fetching the data  : via json-server
===It will convert  db.json  file into  postman request 
# npm install json-server  -- save   
#npx json-server –watch data/db.json  /// if installed locallay 
#npm  json-server –watch db.json  /// if installed globally 

You need to put the  db.json file  in folder as package.json
 
so that json-server will watch json file and crate path for those 
