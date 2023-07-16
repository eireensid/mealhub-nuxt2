<template>
	<ul class="pagination" v-if="isShow">
		<li aria-label="Назад">
			<button @click="pageChanged(1)" :disabled="currentPage === 1">&laquo;</button>
		</li>
		<li v-for="num in paginationRange" :key="num">
			<button @click="pageChanged(num)" :class="activePage(num)">
				{{ num }}
			</button>
		</li>
		<li aria-label="Дальше">
			<button @click="pageChanged(lastPage)" :disabled="currentPage === lastPage">&raquo;</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Pagination',

	props: {
		currentPage: {
			type: Number,
			required: true
		},
		itemsPerPage: Number,
		totalItems: Number,
		visiblePages: {
			type: Number,
			default: 5,
			coerce: val => parseInt(val)
		}
	},

	computed: {
		lastPage() {
			return this.totalItems % this.itemsPerPage === 0
				? this.totalItems / this.itemsPerPage
				: Math.floor(this.totalItems / this.itemsPerPage) + 1
		},

		paginationRange() {
			let start =
				this.currentPage - this.visiblePages / 2 <= 0
					? 1
					: this.currentPage + this.visiblePages / 2 > this.lastPage
					? this.lowerBound(this.lastPage - this.visiblePages + 1, 1)
					: Math.ceil(this.currentPage - this.visiblePages / 2)
			let range = []
			for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
				range.push(start + i)
			}
			return range
		},

		isShow() {
			return this.totalItems > this.itemsPerPage
		}
	},

	methods: {
		pageChanged(pageNum) {
			if (this.currentPage !== pageNum) {
				this.$nuxt.$emit('page-changed', pageNum)
			}
		},

		activePage(pageNum) {
			return this.currentPage === pageNum ? 'active' : ''
		},

		lowerBound(num, limit) {
			return num >= limit ? num : limit
		}
	}
}
</script>

<style scoped>
.pagination {
	display: flex;
	align-items: center;
}
</style>
