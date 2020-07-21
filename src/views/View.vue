<template>
    <div class="list container text-center m-5" style="max-width: 720px;">
        <img class="float-right" :src="require('@/assets/close.png')" @click="$router.go(-1)">
        <h1 class="mb-5 font-weight-bold">VIEW</h1>

        <div class="card mx-auto mb-5 border-0 shadow" @click="$router.push('/view')">
            <div class="card-body">
                <h5 class="card-title font-weight-normal mb-3">Card title</h5>
                <p class="card-text font-weight-light">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text text-right"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

        <div class="text-right">
            <button class="btn btn-outline-info mr-2" @click="$router.push('/update')">Update</button>
            <button class="btn btn-outline-danger">Delete</button>
        </div>
    </div>
</template>

<script>

export default {
	name: 'View',

	methods: {
		lala () {
			alert(111)
		}
	}
}
</script>

<style lang="scss" scoped>
.card, img, .date{
    cursor: pointer;
}
</style>
