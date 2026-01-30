<script setup>
const props = defineProps({
	images: {
		type: Array,
		default: () => [],
	},
	startIndex: {
		type: Number,
		default: 0,
	},
	title: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.startIndex)
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const lastTranslate = ref({ x: 0, y: 0 })
const imageContainer = ref(null)

const MIN_SCALE = 1
const MAX_SCALE = 4
const ZOOM_STEP = 0.5

const imageUrl = 'https://admin.rkcad.com/assets/'

const currentImage = computed(() => {
	if (props.images.length === 0) return null
	return props.images[currentIndex.value]
})

const isZoomed = computed(() => scale.value > 1)

const imageStyle = computed(() => ({
	transform: `scale(${scale.value}) translate(${translateX.value}px, ${translateY.value}px)`,
	cursor: isZoomed.value ? 'grab' : 'zoom-in',
	transition: isDragging.value ? 'none' : 'transform 0.3s ease',
}))

function resetZoom() {
	scale.value = 1
	translateX.value = 0
	translateY.value = 0
}

function zoomIn() {
	const newScale = Math.min(scale.value + ZOOM_STEP, MAX_SCALE)
	scale.value = newScale
	if (newScale === 1) {
		translateX.value = 0
		translateY.value = 0
	}
}

function zoomOut() {
	const newScale = Math.max(scale.value - ZOOM_STEP, MIN_SCALE)
	scale.value = newScale
	if (newScale === 1) {
		translateX.value = 0
		translateY.value = 0
	}
}

function toggleZoom() {
	if (isZoomed.value) {
		resetZoom()
	} else {
		scale.value = 2
	}
}

function goTo(index) {
	resetZoom()
	currentIndex.value = index
}

function goPrev() {
	if (props.images.length === 0) return
	resetZoom()
	currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

function goNext() {
	if (props.images.length === 0) return
	resetZoom()
	currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1
}

function close() {
	emit('close')
}

// Mouse drag for panning when zoomed
function onPointerDown(e) {
	if (!isZoomed.value) return
	isDragging.value = true
	dragStart.value = { x: e.clientX, y: e.clientY }
	lastTranslate.value = { x: translateX.value, y: translateY.value }
	e.preventDefault()
}

function onPointerMove(e) {
	if (!isDragging.value) return
	const dx = (e.clientX - dragStart.value.x) / scale.value
	const dy = (e.clientY - dragStart.value.y) / scale.value
	translateX.value = lastTranslate.value.x + dx
	translateY.value = lastTranslate.value.y + dy
}

function onPointerUp() {
	isDragging.value = false
}

// Mouse wheel zoom
function onWheel(e) {
	e.preventDefault()
	if (e.deltaY < 0) {
		zoomIn()
	} else {
		zoomOut()
	}
}

// Touch pinch-to-zoom
let lastPinchDist = 0
let pinchStartScale = 1

function getPinchDistance(touches) {
	const dx = touches[0].clientX - touches[1].clientX
	const dy = touches[0].clientY - touches[1].clientY
	return Math.sqrt(dx * dx + dy * dy)
}

function onTouchStart(e) {
	if (e.touches.length === 2) {
		lastPinchDist = getPinchDistance(e.touches)
		pinchStartScale = scale.value
		e.preventDefault()
	} else if (e.touches.length === 1 && isZoomed.value) {
		isDragging.value = true
		dragStart.value = { x: e.touches[0].clientX, y: e.touches[0].clientY }
		lastTranslate.value = { x: translateX.value, y: translateY.value }
	}
}

function onTouchMove(e) {
	if (e.touches.length === 2) {
		e.preventDefault()
		const dist = getPinchDistance(e.touches)
		const ratio = dist / lastPinchDist
		scale.value = Math.min(Math.max(pinchStartScale * ratio, MIN_SCALE), MAX_SCALE)
		if (scale.value === 1) {
			translateX.value = 0
			translateY.value = 0
		}
	} else if (e.touches.length === 1 && isDragging.value) {
		const dx = (e.touches[0].clientX - dragStart.value.x) / scale.value
		const dy = (e.touches[0].clientY - dragStart.value.y) / scale.value
		translateX.value = lastTranslate.value.x + dx
		translateY.value = lastTranslate.value.y + dy
	}
}

function onTouchEnd() {
	isDragging.value = false
	lastPinchDist = 0
}

// Keyboard navigation
function onKeydown(e) {
	switch (e.key) {
		case 'Escape':
			close()
			break
		case 'ArrowLeft':
			goPrev()
			break
		case 'ArrowRight':
			goNext()
			break
		case '+':
		case '=':
			zoomIn()
			break
		case '-':
			zoomOut()
			break
		case '0':
			resetZoom()
			break
	}
}

onMounted(() => {
	document.addEventListener('keydown', onKeydown)
	document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
	document.removeEventListener('keydown', onKeydown)
	document.body.style.overflow = ''
})
</script>

<template>
	<Teleport to="body">
		<div class="lightbox-overlay" @wheel.prevent="onWheel">
			<!-- Backdrop -->
			<div class="lightbox-backdrop" @click="close" />

			<!-- Top bar -->
			<div class="lightbox-topbar">
				<span class="lightbox-counter">
					{{ currentIndex + 1 }} / {{ images.length }}
				</span>
				<div class="lightbox-controls">
					<button
						class="lightbox-btn"
						title="Zoom out (−)"
						:disabled="scale <= MIN_SCALE"
						@click="zoomOut"
					>
						<Icon name="heroicons:minus" class="lightbox-icon" />
					</button>
					<button
						class="lightbox-btn"
						title="Zoom in (+)"
						:disabled="scale >= MAX_SCALE"
						@click="zoomIn"
					>
						<Icon name="heroicons:plus" class="lightbox-icon" />
					</button>
					<button class="lightbox-btn" title="Reset zoom (0)" @click="resetZoom">
						<Icon name="heroicons:arrows-pointing-out" class="lightbox-icon" />
					</button>
					<button class="lightbox-btn lightbox-btn--close" title="Close (Esc)" @click="close">
						<Icon name="heroicons:x-mark" class="lightbox-icon" />
					</button>
				</div>
			</div>

			<!-- Main image area -->
			<div
				ref="imageContainer"
				class="lightbox-image-area"
				@pointerdown="onPointerDown"
				@pointermove="onPointerMove"
				@pointerup="onPointerUp"
				@pointerleave="onPointerUp"
				@touchstart="onTouchStart"
				@touchmove="onTouchMove"
				@touchend="onTouchEnd"
				@dblclick="toggleZoom"
			>
				<img
					v-if="currentImage"
					:src="imageUrl + currentImage.directus_files_id.id + '?key=large'"
					:alt="title + ' Image ' + (currentIndex + 1)"
					:style="imageStyle"
					class="lightbox-image"
					draggable="false"
				/>
			</div>

			<!-- Navigation arrows -->
			<button
				v-if="images.length > 1 && !isZoomed"
				class="lightbox-nav lightbox-nav--prev"
				title="Previous image"
				@click="goPrev"
			>
				<Icon name="heroicons:chevron-left" class="lightbox-nav-icon" />
			</button>
			<button
				v-if="images.length > 1 && !isZoomed"
				class="lightbox-nav lightbox-nav--next"
				title="Next image"
				@click="goNext"
			>
				<Icon name="heroicons:chevron-right" class="lightbox-nav-icon" />
			</button>

			<!-- Thumbnail strip -->
			<div v-if="images.length > 1" class="lightbox-thumbstrip">
				<button
					v-for="(img, idx) in images"
					:key="idx"
					class="lightbox-thumb"
					:class="{ 'lightbox-thumb--active': idx === currentIndex }"
					@click="goTo(idx)"
				>
					<img
						:src="imageUrl + img.directus_files_id.id + '?key=small'"
						:alt="title + ' Thumbnail ' + (idx + 1)"
						draggable="false"
					/>
				</button>
			</div>
		</div>
	</Teleport>
</template>

<style scoped>
.lightbox-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	user-select: none;
}

.lightbox-backdrop {
	position: absolute;
	inset: 0;
	background: rgba(0, 0, 0, 0.92);
}

.lightbox-topbar {
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	color: white;
}

.lightbox-counter {
	font-size: 14px;
	opacity: 0.8;
	font-variant-numeric: tabular-nums;
}

.lightbox-controls {
	display: flex;
	gap: 4px;
}

.lightbox-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	cursor: pointer;
	transition: background 0.2s ease;
}

.lightbox-btn:hover {
	background: rgba(255, 255, 255, 0.2);
}

.lightbox-btn:disabled {
	opacity: 0.3;
	cursor: not-allowed;
}

.lightbox-btn--close {
	background: rgba(255, 255, 255, 0.15);
	margin-left: 8px;
}

.lightbox-btn--close:hover {
	background: rgba(220, 38, 38, 0.7);
}

.lightbox-icon {
	width: 20px;
	height: 20px;
}

.lightbox-image-area {
	position: relative;
	z-index: 1;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	touch-action: none;
}

.lightbox-image {
	max-width: 90vw;
	max-height: calc(100vh - 180px);
	object-fit: contain;
	transform-origin: center center;
}

.lightbox-nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border: none;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	cursor: pointer;
	transition: background 0.2s ease;
}

.lightbox-nav:hover {
	background: rgba(255, 255, 255, 0.25);
}

.lightbox-nav--prev {
	left: 16px;
}

.lightbox-nav--next {
	right: 16px;
}

.lightbox-nav-icon {
	width: 28px;
	height: 28px;
}

.lightbox-thumbstrip {
	position: relative;
	z-index: 2;
	display: flex;
	gap: 8px;
	justify-content: center;
	padding: 12px 16px;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}

.lightbox-thumb {
	flex-shrink: 0;
	width: 60px;
	height: 60px;
	border: 2px solid transparent;
	border-radius: 6px;
	overflow: hidden;
	cursor: pointer;
	opacity: 0.5;
	transition: all 0.2s ease;
	padding: 0;
	background: none;
}

.lightbox-thumb:hover {
	opacity: 0.8;
}

.lightbox-thumb--active {
	opacity: 1;
	border-color: white;
}

.lightbox-thumb img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media (max-width: 640px) {
	.lightbox-nav {
		width: 36px;
		height: 36px;
	}

	.lightbox-nav--prev {
		left: 8px;
	}

	.lightbox-nav--next {
		right: 8px;
	}

	.lightbox-nav-icon {
		width: 22px;
		height: 22px;
	}

	.lightbox-thumb {
		width: 48px;
		height: 48px;
	}

	.lightbox-image {
		max-width: 100vw;
		max-height: calc(100vh - 160px);
	}
}
</style>
