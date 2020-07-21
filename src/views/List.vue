<template>
    <div class="list container text-center m-5" style="max-width: 720px;">
        <h1 class="mb-5 font-weight-bold">LIST</h1>

        <div v-if="list.length">
            <div
                class="card mx-auto mb-5 border-0 shadow"
                @click="$router.push(`/view/${item.id}`)"
                v-for="(item, key) in list"
                :key="key"
            >
                <div class="card-body">
                    <h5 class="card-title font-weight-normal mb-3">{{ item.title }}</h5>
                    <p class="card-text font-weight-light">{{ item.content }}</p>
                    <p class="card-text text-right"><small class="text-muted">{{ item.date }}</small></p>
                </div>
            </div>

            <img :src="require('@/assets/plus.png')" @click="$router.push('/add')">
        </div>

        <h3
            v-else
            class="font-weight-normal"
        >
            No record found, you can add
            <span class="text-info" @click="$router.push('/add')">here</span>
        </h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'List',

	computed: mapGetters({
		list: 'getList'
	})
}
</script>

<style lang="scss" scoped>
.card, img, span {
    cursor: pointer;
}
</style>
