<template>
    <div class="list container text-center m-5" style="max-width: 720px;">
        <h1 class="mb-5 font-weight-bold">LIST</h1>
        <div class="card mx-auto mb-5 border-0 shadow" @click="$router.push('/view')">
            <div class="card-body">
                <h5 class="card-title font-weight-normal mb-3">Card title</h5>
                <p class="card-text font-weight-light">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text text-right"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

        <div class="card mx-auto mb-5 border-0 shadow">
            <div class="card-body">
                <h5 class="card-title font-weight-normal mb-3">Card title</h5>
                <p class="card-text font-weight-light">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text text-right"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

        <div class="card mx-auto mb-5 border-0 shadow">
            <div class="card-body">
                <h5 class="card-title font-weight-normal mb-3">Card title</h5>
                <p class="card-text font-weight-light">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text text-right"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

        <img :src="require('@/assets/plus.png')" @click="$router.push('/add')">
    </div>
</template>

<script>

export default {
	name: 'List'
}
</script>

<style lang="scss" scoped>
.card, img {
    cursor: pointer;
}
</style>
