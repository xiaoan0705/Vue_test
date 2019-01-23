<template>
   <div id="footer">
        <h4>底部footer</h4>
        <slot>只有在父组件没有要分发的内容时才会显示</slot>
   </div>
</template>

<!--<script>
 export default({
  name:'footer'
 })
</script>-->

<style scoped>
	 #footer{
	  background-color:gray;
	  padding: 0 10px;
 	  color: #ffffff;
 	  display: flex;
 	  flex-direction: column;
 	  justify-content: center;
 	  align-items: center;
	 }
</style>
