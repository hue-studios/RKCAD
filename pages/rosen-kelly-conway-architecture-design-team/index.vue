<template>
  <div
    class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center team"
  >
    <div
      class="page__header"
      :style="
        'background-image: url(https://admin.rkcad.com/assets/' +
        team.header_image +
        ')'
      "
    >
      <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
      <h1
        class="w-full uppercase white tracking-wider"
        v-html="formattedTitle"
      ></h1>
    </div>
    <div
      class="z-10 max-w-7xl w-full px-4 xl:px-0 mt-20 flex items-center justify-between flex-col lg:flex-row flex-wrap page__body-header"
    >
      <div class="w-full uppercase mb-20 page__body-header">
        <h2 class="page__body-header-subtitle">Culture</h2>
        <h3 class="page__body-header-title">Meet <br />the Team</h3>
      </div>
      <CardsTeamCard
        v-for="(person, index) in team.people"
        :key="index"
        :person="person"
      />
      <div class="w-full flex items-startjustify-center flex-col lg:flex-row flex-wrap mt-20 employment">
        <div class="w-full uppercase page__body-header">
        <h2 class="page__body-header-subtitle">Opportunity</h2>
        <h3 class="page__body-header-title">Join <br />the Team</h3>
        </div>
        <div v-if="team.architects" class="w-full flex flex-col items-end lg:w-1/3 lg:pr-6 py-6 lg:py-12">
          <h4 class="uppercase w-full" >Architects</h4>
          <p v-html="team.architects" class="w-full"></p>
          <LayoutLinkBtn link="#" @click.prevent class="cursor-pointer">Apply</LayoutLinkBtn>
        </div>
        <div v-if="team.interior_designers" class="w-full flex flex-col items-end  lg:w-1/3 lg:px-6 lg:border-r lg:border-l border-stone-300 py-6 lg:py-12">
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
const formattedTitle = computed(() => {
  return team.title.replace(/\n/g, '<br>')
})
</script>
<style scoped>
.employment {
  h4 {
    font-size: 16px;
    @apply  tracking-wider mb-8;
  }
  p {
    @apply mb-8;
  }
}
</style>