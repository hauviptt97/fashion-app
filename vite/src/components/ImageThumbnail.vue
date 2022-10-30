<template>
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getImgUrl(props.i)" />
      </a>
    </template>
    <div v-for="(item, index) in imgList.length" :key="item">
      <a-image :src="getImgUrl(index)" />
    </div>
  </a-carousel>
</template>
<script setup>
const props = defineProps({
  imgList: {
    type: Object,
    require: true,
  },
});

const baseUrl = "/src/assets/images/";
const getImgUrl = (i) => {
  return new URL(baseUrl + props.imgList[i], import.meta.url);
};
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 100%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
  width: 100%;
  margin-left: 0px !important;
}
.ant-carousel :deep(.slick-thumb ul) {
}
.ant-carousel :deep(.slick-thumb li) {
  width: 5vw;
  height: 10vh;
  display: block;
  transition: none;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active {
  width: 5vw;
  border: 2px solid #e61c1c;
}
</style>
