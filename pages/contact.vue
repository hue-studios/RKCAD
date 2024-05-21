<script setup>
definePageMeta({
	middleware: ['page'],
})

const isImageLoaded = ref(false)

onMounted(() => {
	const image = new Image()
	image.src = 'https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=xlarge'

	image.onload = () => {
		isImageLoaded.value = true
	}
})

useSeoMeta({
	title: 'Contact | Rosen Kelly Conway Architecture & Design Firm | Summit NJ',
	ogTitle: 'Contact | Rosen Kelly Conway Architecture & Design Firm | Summit NJ',
	ogImage: 'https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=xlarge',
})
</script>
<template>
	<div
		v-if="isImageLoaded"
		class="bg-cover bg-center bg-no-repeat relative w-full h-screen flex flex-row items-end justify-center overflow-hidden contact"
	>
		<LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
		<div class="w-full max-w-7xl flex flex-row justify-between items-center px-4">
			<div class="text-left contact__info">
				<h1 class="w-full uppercase white tracking-wider">Studio</h1>
				<p>16 Maple St. Summit, NJ 07901</p>
				<p><a href="tel:(908) 273-6565" target="_blank">908.273.6565</a></p>
				<p>
					<a href="mailto:info@rkcad.com" target="_blank">info@rkcad.com</a>
				</p>
				<div class="flex items-start justify-start flex-row mt-6">
					<a href="https://www.instagram.com/rkcad/" target="_blank" class="mr-6">
						<Icon name="Instagram" class="" />
					</a>
					<a
						href="https://www.houzz.com/professionals/architects-and-building-designers/rosen-kelly-conway-architecture-and-design-pfvwus-pf~1350653163?"
						target="_blank"
						class=""
					>
						<Icon name="Houzz" class="blue" />
					</a>
				</div>
			</div>
			<div class="flex items-end flex-col rkc-name">
				<LayoutRosen id="rosen" />
				<LayoutKelly id="kelly" />
				<LayoutConway id="conway" />
			</div>
		</div>
	</div>
	<LayoutLoader v-else />
</template>

<style>
.contact {
	background-color: rgba(0, 0, 0, 0.5);
	background-blend-mode: darken;
	background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=medium');

	@media (min-width: theme('screens.md')) {
		background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=large');
	}

	@media (min-width: theme('screens.lg')) {
		background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=xlarge');
	}

	#rkc-bg-icon-2 {
		top: 0px;
	}

	&__info {
		color: var(--white);
		transition: all 0.4s var(--curve) 0.1s;
		margin-left: 15px;
		@apply mb-4;
		@media (min-width: theme('screens.sm')) {
			margin-left: 35px;
		}
		@media (min-width: theme('screens.lg')) {
		}

		h1 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		p {
			font-size: 13px;
			margin-bottom: 5px;
			@media (min-width: theme('screens.sm')) {
				font-size: 15px;
			}
		}

		a {
			color: var(--white);
		}
		.icon {
			path {
				fill: white;
			}
		}
	}

	.rkc-name {
		color: var(--white);
		margin-right: 15px;
		@apply mb-4;
		@media (min-width: theme('screens.sm')) {
			margin-right: 35px;
		}
		svg {
			height: 20px;
			fill: var(--white) !important;
			filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
			@media (min-width: theme('screens.sm')) {
				height: 20px;
			}

			@media (min-width: theme('screens.md')) {
				height: 40px;
			}

			@media (min-width: theme('screens.lg')) {
			}
			path {
				animation: rkc-name-animation 6.2s var(--curve) infinite;
			}
		}

		svg:nth-of-type(2) {
			@apply my-4;
		}
	}
	#rosen {
		path:nth-of-type(4) {
			animation-delay: 0s;
		}
		path:nth-of-type(1) {
			animation-delay: 0.2s;
		}
		path:nth-of-type(5) {
			animation-delay: 0.4s;
		}
		path:nth-of-type(2) {
			animation-delay: 0.6s;
		}
		path:nth-of-type(3) {
			animation-delay: 0.8s;
		}
	}
	#kelly {
		path:nth-of-type(5) {
			animation-delay: 1s;
		}
		path:nth-of-type(4) {
			animation-delay: 1.2s;
		}
		path:nth-of-type(3) {
			animation-delay: 1.4s;
		}
		path:nth-of-type(2) {
			animation-delay: 1.6s;
		}
		path:nth-of-type(1) {
			animation-delay: 1.8s;
		}
	}
	#conway {
		path:nth-of-type(6) {
			animation-delay: 2s;
		}
		path:nth-of-type(3) {
			animation-delay: 2.2s;
		}
		path:nth-of-type(1) {
			animation-delay: 2.4s;
		}
		path:nth-of-type(4) {
			animation-delay: 2.6s;
		}
		path:nth-of-type(5) {
			animation-delay: 2.8s;
		}
		path:nth-of-type(2) {
			animation-delay: 3s;
		}
	}
}

@keyframes rkc-name-animation {
	0% {
		opacity: 1;
		fill: var(--white);
	}

	30% {
		opacity: 1;
	}

	50% {
		opacity: 0.85;
		fill: var(--blue);
	}
	80% {
		opacity: 1;
	}

	100% {
		opacity: 1;
		fill: var(--white);
	}
}
</style>
