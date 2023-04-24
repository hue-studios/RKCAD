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
      class="max-w-7xl flex flex-wrap flex-row items-center justify-between w-full page__body"
    >
      <div class="w-full uppercase page__body-header">
        <h2>Culture</h2>
        <h3>Meet <br />the Team</h3>
      </div>
      <CardsTeamCard
        v-for="(person, index) in team.people"
        :key="index"
        :person="person"
      />
    </div>
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems()
const team = await getItems({
  collection: 'team',
  params: {
    fields: [
      'header_image,title,people.sort,people.name,people.title,people.bio,people.image,people.education,people.status,people.email,people.quote',
    ],
  },
})
const formattedTitle = computed(() => {
  return team.title.replace(/\n/g, '<br>')
})
</script>
<style scoped>
</style>