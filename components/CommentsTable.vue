<template>
	<div v-if="comments">
		<h1>Список комментариев</h1>
		<div class="table">
			<div class="row">
				<div class="sort col" @click="sortComments('change')">
					<span class="head">id</span>
					<!-- <nuxt-icon class="sort-ico" name="sort-icon" /> -->
				</div>
				<span class="head col">name</span>
				<span class="head col">email</span>
			</div>
			<NuxtLink
				v-for="comment in comments"
				:key="comment.id"
				class="row"
				:to="`comments/${comment.id}`">
				<span class="center col">{{ comment.id }}</span>
				<span class="col">{{ comment.name }}</span>
				<span class="col">{{ comment.email }}</span>
			</NuxtLink>
		</div>
		<div class="pagination">// pagination</div>
	</div>
</template>

<script>
import { API_URL } from '~/mixins/api'

export default {
	name: 'CommentsTable',
	mixins: [
    API_URL
  ],
	data() {
		return {
			comments: null,
			isIdsAsc: true,
			totalComments: 0,
			limit: 15,
			page: 1
		}
	},
	created() {
		this.fetchComments()
	},
	methods: {
		async fetchComments() {
			const url = `${API_URL}/comments?_page=${this.page}&_limit=${this.limit}`
			this.comments = await fetch(url)
				.then(resp => {
					this.totalComments = Math.ceil(+resp.headers.get('x-total-count'))
					return resp.json()
				})
				.catch(error => error.data)
		}
	}
}
</script>

<style scoped>
.table {
	border: 1px solid #213547;
	border-radius: 8px;
}
.row {
	display: grid;
	grid-template-columns: 60px 2fr 1fr;
}
.row:not(:last-child) {
	border-bottom: 1px solid #213547;
}
.col {
	padding: 8px;
}
.col:not(:last-child) {
	border-right: 1px solid #213547;
}
.head {
	font-weight: 700;
	transition: color 0.25s;
	text-transform: uppercase;
	text-align: center;
}
.center {
	text-align: center;
}
.sort {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
}
.sort:hover .head {
	color: #535bf2;
}
.sort-ico {
	width: 16px;
	color: #535bf2;
}
.pagination {
	display: flex;
	justify-content: center;
	margin-top: 40px;
}
</style>
