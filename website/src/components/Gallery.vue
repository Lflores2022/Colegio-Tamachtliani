

<template>
  <section class="gallery">
    <div class="container">
      <div class="grid">
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img src="https://source.unsplash.com/8b1cWDyvT7Y" />

          </figure>
        </div>
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img src="https://source.unsplash.com/5VXH4RG88gc" />

          </figure>
        </div>
        <div class="column-xs-12 column-md-4">
          <figure class="img-container">
            <img src="https://source.unsplash.com/XtUd5SiX464">

          </figure>
        </div>
        <div class="column-xs-12 column-md-6">
          <figure class="img-container">
            <img src="https://source.unsplash.com/JYGnB9gTCls" />

          </figure>
        </div>
        <div class="column-xs-12 column-md-6">
          <figure class="img-container">
            <img src="https://source.unsplash.com/-RBuQ2PK_L8" />

          </figure>
        </div>
        <div class="column-xs-12">
          <figure class="img-container">
            <img src="https://source.unsplash.com/P44RIGl9V54" />

          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#highlight {
  color: #ea8478;
  font-size: 1.25rem;
}

.gallery {
  padding: 0 0 4rem 0;
}

.img-container {
  width: 100%;
  height: 500px;
  cursor: pointer;
  overflow: hidden;

  &:hover .img-content-hover {
    display: block;
  }
}

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
