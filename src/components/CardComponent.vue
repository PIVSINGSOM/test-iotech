<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="clearfix">
          <div class="float-left">
            <div class="avatar inline"></div>
            <div class="box-name-user inline">
              <p>
                <a class="user-name">{{ info.name }}</a>
                <br />
                <a class="user-email">{{ info.email }}</a>
              </p>
            </div>
          </div>
          <div class="float-right">
            <p class="member">
              Member
              <i class="fa fa-chevron-right icon-member" @click="getInfoUser" v-if="!showInfo"></i>
              <i class="fa fa-chevron-down icon-member" @click="getInfoUser" v-else></i>
            </p>
          </div>
        </div>
      </div>
      <div class="address" v-if="showInfo">
          <strong>Address: </strong> {{newInfo.address.street}}, {{newInfo.address.suite}}, {{newInfo.address.city}}, {{newInfo.address.zipcode}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      showInfo: false,
      newInfo: {},
      loading:false,
    };
  },
  methods: {
    async getInfoUser() {
      if(this.showInfo == true){
          this.showInfo = false
          return
      }
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.info.id}`
      );
      let result = await response.json();
      this.newInfo = result
      this.showInfo = true
    },
  },
};
</script>

<style scoped>
.user-name {
  font-weight: 600;
}
.user-email {
  font-size: 13px;
  color: grey;
  font-weight: 600;
}
.member {
  margin-block-start: 5px;
  color: grey;
}
.icon-member {
  color: #05cd85;
  cursor: pointer;
}
.address {
  font-size: 13px;
  color: grey;
  /* height: 20px; */
  padding: 5px;
  background-color: #f8f8f8;
  text-align: right;
}
</style>
