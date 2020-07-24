<template>
  <div>
      <div class="header-box">
        Team Members
      </div>
      <div class="container">
        <div class="box-filter">
            <div class="clearfix">
                <div class="box-input" >
                  <input type="text" placeholder="Find By name" v-model="search">
                </div>
                <div class="box-count-item" >
                  {{filteredDataObj.length}} People
                </div>
            </div>
        </div>
        <card-component v-for="(item,index) in filteredDataObj" :key="index" :info="item"></card-component>
      </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'App',
  components: {
    'card-component':CardComponent
  },
  data() {
    return {
      listUser:[],
      search:"",
    }
  },
  computed:{
    filteredDataObj() {
        return this.listUser.filter((option) => {
            return option.name
              .toString()
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) >= 0
        })
    }
  },
  mounted(){
    this.getListUser();
  },
  methods:{
    async getListUser(){
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let result =  await response.json()
      this.listUser = result
    }
  }
}
</script>

<style>

</style>
