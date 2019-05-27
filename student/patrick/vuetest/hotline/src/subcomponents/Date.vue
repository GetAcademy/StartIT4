<template>
  <div v-if="!Added" class="BodyBorderBox">
  <div class="BodyProfImage">
  <img style="width:100%" src="http://www.myseumoftoronto.com/wp-content/uploads/2018/12/face-placeholder.gif" />
  </div>

  <div class="BodyProfName">{{Instance.Name}}</div>
  <div class="BodyDateAddress">{{Instance.Address}}</div>
  <div class="BodyProfAge">{{Instance.Age}} år</div>
  <div class="BodyDateTime">{{Instance.Time}}</div>
  <div class="BodyAddDateButton"> <button @click="AddDate" >+</button> </div>
  </div>
</template>

<script>
export default {
  props: ['Instance'],
  data(){
    return{
       YourDates: [],
       Added: false,
    }
  },
  methods: {
    AddDate()
    {
    this.$emit('ydate', this.Instance);
    // this.YourDates.push(this.Instance);
    this.Added = true;
    alert( "Date Added" );
    },
  },
}
</script>

<style>
.BodyBorderBox {
    grid-area: BodyBorderBox;
    max-width:80%;
    border-radius: 20px;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
    padding: 5px;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 75px auto auto 75px;
    grid-template-areas:
        'BodyProfImage BodyProfName BodyDateAddress BodyAddDateButton'
        'BodyProfImage BodyProfAge BodyDateTime BodyAddDateButton';
}

.BodyProfImage
{
    grid-area: BodyProfImage;
}

    .BodyProfImage > img {
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid #AD00FF;
    }

.BodyProfName {
    grid-area: BodyProfName;
    border-radius: 20px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
    margin:5px;
    text-align:center;
    align-self:center;
}

.BodyDateAddress {
    grid-area: BodyDateAddress;
    border-radius: 20px;
    text-align: center;
    align-self: center;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.BodyProfAge {
    grid-area: BodyProfAge;
    border-radius: 20px;
    text-align: center;
    align-self: flex-start;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.BodyDateTime {
    grid-area: BodyDateTime;
    border-radius: 20px;
    text-align: center;
    align-self: flex-start;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.BodyAddDateButton {
    grid-area: BodyAddDateButton;
}

    .BodyAddDateButton > button {
        border-radius: 50%;
        width: 100%;
        height: 75px;
        border: 1px solid #AD00FF;
        font-size: x-large;
        background: rgba(236, 68, 251, 0.75);
        outline:0;
    }
</style>
