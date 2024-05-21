<script setup>
import { usePageStore } from '~~/store/PageStore'

const pageStore = usePageStore()
</script>
<template>
	<div class="w-full mx-auto relative max-w-7xl header">
		<LayoutBackButton page="Work" :class="{ on: pageStore.page === 'page-work-detail' }" />
		<LayoutBackButton page="Press" :class="{ on: pageStore.page === 'page-press-detail' }" />
		<nuxt-link
			to="/"
			class="inline-block rkc-logo"
			:class="{ on: pageStore.page === 'page-work-detail' || pageStore.page === 'page-press-detail' }"
		>
			<Icon name="Rkc" class="rkc-icon" />
		</nuxt-link>
		<LayoutNavButton class="lg:pr-6" />
	</div>
</template>

<style>
.header {
	position: absolute;
	top: 0px;
	left: 0px;
	height: 65px;
	z-index: 10;
	padding-left: 15px;
	padding-right: 15px;

	@media (min-width: theme('screens.sm')) {
		padding-left: 35px;
		padding-right: 35px;
	}

	@media (min-width: 1280px) {
		left: calc(50% - 640px);
	}

	/* @media (min-width: 1536px) {
    left: calc(50% - 768px);
  } */
	.back-btn {
		left: calc(-50vw);
		transition: all 0.4s var(--curve);
		opacity: 0;
		@apply absolute z-20;
	}

	.back-btn.on {
		left: 0px !important;
		opacity: 1;
	}

	.rkc-icon {
		font-size: 64px;
		line-height: 65px;
		color: var(--white);
		margin-top: 3px;
		transition: all 0.4s var(--curve);
		mix-blend-mode: difference;
		@apply inline-block;

		path {
			transition: all 0.4s var(--curve);
			mix-blend-mode: difference;
		}
		path:nth-of-type(1) {
			transition-delay: 0.1s;
		}
		path:nth-of-type(2) {
			transition-delay: 0.2s;
		}
	}
	.rkc-icon:hover {
		path {
			fill: var(--grey);
		}
	}

	.rkc-logo {
		/* margin-left: 0px; */
		/* margin-left: 15px; */

		@media (min-width: theme('screens.sm')) {
		}
		@media (min-width: 1280px) {
			margin-left: 35px;
		}
	}

	.rkc-logo.on {
		margin-left: 60px;
		@media (min-width: theme('screens.sm')) {
			margin-left: 40px;
		}
	}
}

.page-work-detail,
.page-press-detail,
.page-error {
	.rkc-icon {
		color: var(--blue);
		path {
			fill: var(--blue);
		}
	}

	#nav-btn {
		#nav-icon {
			span {
				background: var(--blue);
			}
		}
	}
}
</style>
