<template>
    <div class="flex items-center justify-center md:justify-center flex-col application">
        <div class="flex items-start justify-center flex-col md:flex-row md:items-center application__content">
            <div class="absolute close-btn" @click="closeApplication()"><nuxt-icon name="close" /></div>
            <transition-group name="list" tag="div" class="w-full form-panels">
                <div class="flex items-center justify-center flex-col login-panel" v-if="panel === 'one'" key="1">
                    <h1 class="uppercase">Interested in <br />Joining our Team?</h1>
                    <h4 class="mb-10">We are excited to learn a little bit about you.</h4>
                    <VeeForm class="w-full" @submit="submit()">
                        <div class="flex items-center justify-between flex-col md:flex-row">
                            <FormVInput name="name" type="text" :required="true" label="Name" v-model="name"
                                class="mb-6 mt-2 md:mr-2" />

                            <FormVEmail name="email" type="email" label="Email" v-model="email" class="mb-6 mt-2 md:ml-2" />
                        </div>
                        <div class="flex items-center justify-between flex-col md:flex-row">
                            <FormVInput name="position" type="text" label="Position" v-model="position"
                                class="mb-6 mt-2 md:mr-2" />


                            <FormVInput name="education" type="text" label="Education" v-model="education"
                                class="mb-6 mt-2 md:ml-2" />
                        </div>
                        <div class="flex items-center justify-between flex-col md:flex-row">
                            <FormVInput name="experience" type="text" label="Experience" v-model="experience"
                                class="mb-6 mt-2" />
                        </div>
                        <FormVButton class="w-full mb-6" type="submit">Submit</FormVButton>
                    </VeeForm>
                </div>
                <div class="flex items-center justify-center flex-col login-panel" v-if="panel === 'two'" key="2">
                    <h2>Thank you {{ name }}. Your interest has been submitted successfully.</h2>
                </div>

            </transition-group>
        </div>
    </div>
</template>

<script setup>
import { openScreen, loader, closeScreen } from '~/composables/useScreen'
const { createItems } = useDirectusItems();
const name = ref()
const email = ref()
const education = ref()
const experience = ref()
const position = ref()
// const inspiration = ref()
const panel = ref('one')
const submit = async () => {

    const createApplication = async () => {
        try {
            const application = [
                {
                    status: "published",
                    name: name.value,
                    email: email.value,
                    education: education.value,
                    experience: experience.value,
                    position: position.value,
                }
            ];
            await createItems({ collection: "applications", application });
            panel.value = 'two'

        } catch (e) { }
    };
}


function closeApplication() {
    const element = document.getElementById('application-toggle')
    element.checked = false
}

</script>

<style>
.application {
    height: 100vh;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: var(--blue);
    color: var(--white);
    width: 100%;
    z-index: 50;
    transform: translateY(100%);
    transition: 0.65s var(--curve);

    @media (min-width: theme('screens.lg')) {
        top: 0px;
        bottom: auto;
        transform: translateX(100%) translateY(0%);
    }

    &__content {
        width: 100%;
        max-width: 780px;
        @apply relative px-6;

        .close-btn {
            top: 10px;
            right: 10px;
            width: 40px;
            height: 40px;

            .nuxt-icon {
                width: 40px;
                height: 40px;
                transition: 0.4s var(--curve);
                transform: translateX(0px);
                @apply block;

                svg {
                    width: 25px;
                    height: 25px;
                    @apply block;

                    path {
                        stroke-width: 1px;
                        stroke: var(--white) !important;
                    }
                }
            }
        }
    }
}

#application-toggle:checked~.page__content {
    transform: translateY(-80px);
    filter: blur(2px) grayscale(1);

    @media (min-width: theme('screens.lg')) {
        transform: translateX(-80px);
    }
}

#application-toggle:checked~.application {
    transform: translateY(0%);

    @media (min-width: theme('screens.lg')) {
        transform: translateX(0%) translateY(0%);
    }
}
</style>
