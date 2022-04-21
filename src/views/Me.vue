<template>
  <div class="me">
    <MeHeader></MeHeader>
    <me-content></me-content>
  </div>
</template>

<script>
import MeHeader from "@/components/Me/MeHeader";
import MeContent from "@/components/Me/MeContent";
export default {
  name: "Me",
  components:{
    MeHeader,MeContent
  }
}
</script>

<style scoped>

</style>
