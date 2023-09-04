<template>
  <div>
    <div v-for="list in playLists" :key="list.id">
        <div class="single">
            <div class="thumbnail">
                <img :src="list.coverUrl" alt="">
            </div>
            <div class="info">
                <h3>{{list.title}}</h3>
                <p> Created By {{list.userName}}</p>
            </div>
            <div class="song-number">
                <p>{{ list.songs.length }} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['playLists']
}
</script>

<style scoped>
.single {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: white;
    margin: 16px 0;
    transition: all ease 0.2s;
}

.single:hover {
    box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
}

.thumbnail {
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 10px;
}

img {
    max-width: 150%;
    max-height: 150%;
    display: block;
}

.info {
    margin: 0 30px;
}

.song-number {
    margin-left: auto;
}
</style>