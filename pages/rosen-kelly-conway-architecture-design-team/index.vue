<template>
  <div v-if="isImageLoaded" class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center team">
    <div class="bg-center bg-cover page__header" :style="'background-image: url(https://admin.rkcad.com/assets/' +
      team.header_image +
      '?key=xlarge)'
      ">
      <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
      <h1 class="w-full uppercase white tracking-wider" v-html="formattedTitle"></h1>
    </div>
    <div class="z-10 flex flex-wrap flex-row lg:flex-wrap items-center justify-evenly w-full page__body relative">

      <div class="w-full mt-20 uppercase page__body-header">
        <h2 class="page__body-header-subtitle">Culture</h2>
        <h3 class="page__body-header-title">Meet <br />the Team</h3>
      </div>
      <div class="w-full flex items-center justify-between flex-row flex-wrap">
        <CardsTeamCard v-for="(person, index) in team.people" :key="index" :person="person"
          class="" />
      </div>
      <div class="w-full flex items-start justify-center flex-col lg:flex-row flex-wrap mt-20 employment">
        <div class="w-full uppercase page__body-header">
          <h2 class="page__body-header-subtitle">Opportunity</h2>
          <h3 class="page__body-header-title">Join <br />the Team</h3>
        </div>
        <div v-if="team.architects" class="w-full flex flex-col items-end lg:w-1/3 lg:pr-6 py-6 lg:py-12">
          <h4 class="uppercase w-full">Architects</h4>
          <p v-html="team.architects" class="w-full"></p>
          <LayoutLinkBtn link="#" @click.prevent class="cursor-pointer">Apply</LayoutLinkBtn>
        </div>
        <div v-if="team.interior_designers"
          class="w-full flex flex-col items-end  lg:w-1/3 lg:px-6 lg:border-r lg:border-l border-stone-300 py-6 lg:py-12">
          <h4 class="uppercase w-full">Interior Designers</h4>
          <p v-html="team.interior_designers" class="w-full"></p>
          <LayoutLinkBtn link="#" @click.prevent class="cursor-pointer">Apply</LayoutLinkBtn>
        </div>
        <div v-if="team.drafters" class="w-full flex flex-col items-end lg:w-1/3 lg:pl-6 py-6 lg:py-12 ">
          <h4 class="uppercase w-full">Drafters</h4>
          <p v-html="team.drafters" class="w-full"></p>
          <LayoutLinkBtn link="#" @click.prevent class="cursor-pointer">Apply</LayoutLinkBtn>
        </div>

      </div>
    </div>

  </div>
  <LayoutLoader v-else />
</template>

<script setup>
const { getItems } = useDirectusItems()
const team = await getItems({
  collection: 'team',
  params: {
    fields: [
      'header_image,title,people.sort,people.name,people.title,people.bio,people.image,people.education,people.status,people.email,people.quote,architects,interior_designers,drafters',
    ],
  },
})
const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
  image.src = 'https://admin.rkcad.com/assets/' +
    team.header_image + '?key=xlarge';

  image.onload = () => {
    isImageLoaded.value = true;
  };
});
const formattedTitle = computed(() => {
  return team.title.replace(/\n/g, '<br>')
})
</script>
<style scoped>
.team {

  &-detail {
    position: fixed;
    right: 0px;
    height: 100vh;
  }

}

.employment {
  h4 {
    font-size: 16px;
    @apply tracking-wider mb-8;
  }

  p {
    @apply mb-8;
  }
}
</style>