<template>
    <div v-if="data" class="list container text-center m-5" style="max-width: 720px;">
        <img class="float-right" :src="require('@/assets/close.png')" @click="$router.push('/')">
        <h1 class="mb-5 font-weight-bold">VIEW</h1>

        <div class="card mx-auto mb-5 border-0 shadow">
            <div class="card-body">
                <h5 class="card-title font-weight-normal mb-3">{{ data.title }}</h5>
                <p class="card-text font-weight-light">{{ data.content }}</p>
                <p class="card-text text-right"><small class="text-muted">{{ data.date }}</small></p>
            </div>
        </div>

        <div class="text-right">
            <button class="btn btn-outline-info mr-2" @click="$router.push(`/update/${data.id}`)">Update</button>
            <button class="btn btn-outline-danger" @click="remove">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: ['id'],
	name: 'View',

	data () {
		return {
			data: null
		}
	},

	computed: mapGetters({
		list: 'getList'
	}),

	created () {
		this.data = this.list.find(i => i.id === parseInt(this.id))
		if (!this.data) this.$router.push('/notfound')
	},

	methods: {
		remove () {
			this.$store.commit('remove', this.id)
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
img {
    cursor: pointer;
}
</style>
