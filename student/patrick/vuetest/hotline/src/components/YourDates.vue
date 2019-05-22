<template>
<div id="YourBodyBorderBox${Index}" class="YourBodyBorderBox">
                    <div class="YourBodyProfImage">
                    <img style="width:100%" src="http://www.myseumoftoronto.com/wp-content/uploads/2018/12/face-placeholder.gif" id="YourBodyProfImage${Index}" />
                    </div>

                    <div id="YourBodyProfName${Index}" class="YourBodyProfName">${Name}</div>
                    <div id="YourBodyDateAddress${Index}" class="YourBodyDateAddress">${Address}</div>
                    <div id="YourBodyProfAge${Index}" class="YourBodyProfAge">${Age} år</div>
                    <div id="YourBodyDateTime${Index}" class="YourBodyDateTime">${Time}</div>



                    <span>Test {{SavedDates}} Test</span>

                    </div>
</template>

<script>
export default
{
  props:['SavedDates'],
}
</script>

<style>

</style>
