<template>
  <div class="YourBodyBorderBox">
                    <div class="YourBodyProfImage">
                    <img style="width:100%" src="http://www.myseumoftoronto.com/wp-content/uploads/2018/12/face-placeholder.gif" />
                    </div>

                    <div class="YourBodyProfName">{{DateData.Name}}</div>
                    <div class="YourBodyDateAddress">{{DateData.Address}}</div>
                    <div class="YourBodyProfAge">{{DateData.Age}} år</div>
                    <div class="YourBodyDateTime">{{DateData.Time}}</div>

                    </div>
</template>

<script>
export default {
props:['DateData'],
}
</script>

<style>
.YourBodyBorderBox {
    grid-area: YourBodyBorderBox;
    max-width: 80%;
    width:80%;
    border-radius: 20px;
    background: rgba(236, 68, 251, 0.75);
    border: 1px solid #AD00FF;
    padding: 5px;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 75px auto auto;
    grid-template-areas:
        'YourBodyProfImage YourBodyProfName YourBodyDateAddress'
        'YourBodyProfImage YourBodyProfAge YourBodyDateTime';
}

.YourBodyProfImage {
    grid-area: YourBodyProfImage;
}
    .YourBodyProfImage > img {
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid #AD00FF;
    }

.YourBodyProfName {
    grid-area: YourBodyProfName;
    text-align: center;
    align-self: center;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.YourBodyDateAddress {
    grid-area: YourBodyDateAddress;
    text-align: center;
    align-self: center;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.YourBodyProfAge {
    grid-area: YourBodyProfAge;
    text-align: center;
    align-self: flex-start;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}

.YourBodyDateTime {
    grid-area: YourBodyDateTime;
    text-align: center;
    align-self: flex-start;
    margin: 5px;
    text-shadow: 1px 0 0 #AD00FF, -1px 0 0 #AD00FF, 0 1px 0 #AD00FF, 0 -1px 0 #AD00FF, 1px 1px #AD00FF, -1px -1px 0 #AD00FF, 1px -1px 0 #AD00FF, -1px 1px 0 #AD00FF;
}
</style>
