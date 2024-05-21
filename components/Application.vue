<script setup lang="ts">
import { openScreen, loader, closeScreen } from '~/composables/useScreen'

const { createItems } = useDirectusItems()
const name = ref()
const email = ref()
const education = ref()
const experience = ref()
const position = ref()
const inspiration = ref()
const panel = ref('one')
interface Application {
	id?: string | number
	name: string
	email: string
	education: string
	experience: string
	position: string
	inspiration: string
	status: string
}

const submit: Application[] = async () => {
	try {
		const items: Application[] = [
			{
				status: 'published',
				name: name.value,
				email: email.value,
				education: education.value,
				experience: experience.value,
				position: position.value,
				inspiration: inspiration.value,
			},
		]

		await createItems({ collection: 'applications', items }).then((res) => {
			console.log(res)
		})

		panel.value = 'two'
	} catch (e) {}
}

function closeApplication() {
	name.value = ''
	email.value = ''
	education.value = ''
	experience.value = ''
	position.value = ''
	inspiration.value = ''
	panel.value = 'one'
	const element = document.getElementById('application-toggle')
	element.checked = false
}
</script>
<template>
	<div class="flex items-center justify-center md:justify-center flex-col application">
		<div class="flex items-start justify-center flex-col md:flex-row md:items-center application__content">
			<div class="absolute close-btn" @click="closeApplication()"><Icon name="Close" /></div>
			<transition-group name="fade" tag="div" class="w-full form-panels">
				<div v-if="panel === 'one'" key="1" class="flex items-center justify-center flex-col application-panel">
					<h1 class="w-full uppercase tracking-wide">
						Interested in
						<br />
						Joining our Team?
					</h1>
					<p class="w-full mb-6 md:mb-10 tracking-wide">We are excited to learn a little bit about you.</p>
					<VeeForm class="w-full" @submit="submit()">
						<div class="flex items-center justify-between flex-col md:flex-row">
							<FormVInput
								v-model="name"
								name="name"
								type="text"
								:required="true"
								label="Name"
								class="mb-6 mt-2 md:mr-2"
							/>

							<FormVEmail v-model="email" name="email" type="email" label="Email" class="mb-6 mt-2 md:ml-2" />
						</div>
						<div class="flex items-center justify-between flex-col md:flex-row">
							<FormVInput v-model="position" name="position" type="text" label="Position" class="mb-6 mt-2 md:mr-2" />

							<FormVInput
								v-model="education"
								name="education"
								type="text"
								label="Education"
								class="mb-6 mt-2 md:ml-2"
							/>
						</div>
						<div class="flex items-center justify-between flex-col md:flex-row">
							<FormVInput v-model="experience" name="experience" type="text" label="Experience" class="mb-6 mt-2" />
						</div>
						<div class="flex items-center justify-between flex-col md:flex-row">
							<FormVTextArea name="inspiration" label="Inspiration" class="bg-transparent mb-6 mt-2" />
						</div>
						<FormVButton class="w-full mb-6" type="submit">Submit</FormVButton>
					</VeeForm>
				</div>
				<div v-if="panel === 'two'" key="2" class="flex items-center justify-center flex-col application-panel">
					<h1 class="w-full uppercase tracking-wide">Thank you {{ name }}.</h1>
					<p class="w-full mb-6 md:mb-10 tracking-wide">Your interest has been submitted successfully.</p>
				</div>
			</transition-group>
		</div>
	</div>
</template>

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
	transform: translateY(150%);
	transition: 0.65s var(--curve);

	@media (min-width: theme('screens.lg')) {
		top: 0px;
		bottom: auto;
		transform: translateX(100%) translateY(0%);
	}

	.form-panels,
	.application-panel {
		width: 100%;
		max-width: 780px;
		height: 600px;
		@apply relative;

		@media (min-width: theme('screens.lg')) {
			height: 660px;
		}

		h1 {
			font-size: 20px;
			line-height: 1.2em;

			@media (min-width: theme('screens.md')) {
				font-size: 32px;
			}

			@media (min-width: theme('screens.lg')) {
				font-size: 42px;
			}
		}

		p {
		}
	}

	&__content {
		width: 100%;
		max-width: 780px;
		@apply relative px-6;

		.close-btn {
			top: 0px;
			right: 0px;
			width: 40px;
			height: 40px;
			z-index: 10;

			.icon {
				width: 40px;
				height: 40px;
				transition: 0.4s var(--curve);
				transform: translateX(0px);
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

#application-toggle:checked ~ .page__content {
	transform: translateY(-80px);
	filter: blur(2px) grayscale(1);

	@media (min-width: theme('screens.lg')) {
		transform: translateX(-80px);
	}
}

#application-toggle:checked ~ .application {
	transform: translateY(0%);

	@media (min-width: theme('screens.lg')) {
		transform: translateX(0%) translateY(0%);
	}
}
</style>
