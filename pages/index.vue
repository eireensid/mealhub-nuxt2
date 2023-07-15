<template>
	<div class="page">
		<CommentsTable />
	</div>
</template>

<script>
import CommentsTable from '~/components/CommentsTable.vue'

export default {
	name: 'IndexPage',
	components: { CommentsTable }
}
</script>
