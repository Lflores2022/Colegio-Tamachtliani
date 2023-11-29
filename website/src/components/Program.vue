<template>
    <h1>Programas Academicos</h1>
    <div class="container">
        <div class="card">
            <img src="/kinder.jpg" alt="kinder" class="card__image">
            <div class="card__info">
                <h2 class="card__info-title">Kinder</h2>
                <p class="card__info-text">El área preescolar, reconocemos que la primera experiencia escolar es fundamental
                    para el desarrollo óptimo de cada niño. Por ello, nos esforzamos en crear un entorno que sea Cálido,
                    Placentero Y Enriquecedor.
                    <br>
                    Orientamos nuestro trabajo considerando los intereses y necesidades individuales de los niños,
                    garantizando así un aprendizaje significativo, motivador y perdurable. Todas nuestras actividades están
                    diseñadas como parte de una RUTINA clara y familiar para los niños, brindándoles seguridad y la
                    oportunidad de planificar, anticipar y organizar sus pensamientos.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card__info">
                <h2 class="card__info-title">Primaria</h2>
                <p class="card__info-text">En la Escuela Primaria Tlamachtiani, nos dedicamos a que los contenidos del
                    programa sean significativos, interesantes, motivadores y fomenten el pensamiento crítico en nuestros
                    alumnos. Nuestra filosofía se centra en ellos, sus intereses y capacidades.
                    <br>
                    La metodología constructivista en la Escuela Primaria Tlamachtiani parte de las experiencias
                    individuales de los niños, permitiéndoles construir su conocimiento a través de la interacción con sus
                    compañeros.
                </p>
            </div>
            <img src="/primaria.jpg" alt="Primaria" class="card__image">
        </div>
        <div class="card">
            <img src="/ingles.jpg" alt="Ingles" class="card__image">
            <div class="card__info">
                <h2 class="card__info-title">Inglés</h2>
                <p class="card__info-text">En el Colegio Tlamachtiani, nos llena de entusiasmo presentar nuestra propuesta
                    de educación bilingüe. Observamos a los niños y niñas participando con confianza, motivación y alegría
                    durante la mitad de la jornada en inglés y la otra mitad en español.
                    <br>
                    Mediante la implementación del Programa de Educación Bilingüe en Tlamachtiani, los estudiantes
                    desarrollan su pensamiento al aprender a procesar información en dos idiomas, familiarizándose con una
                    segunda lengua (L2) y comunicándose gradual y naturalmente.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card__info">
                <h2 class="card__info-title">Deportes</h2>
                <p class="card__info-text">
                    En el ámbito deportivo de Tlamachtiani, nos enorgullece destacar la inclusión de actividades que van más
                    allá de lo convencional. En particular, nos emociona presentar la práctica del yoga como uno de nuestros
                    principales temas. Reconocemos la importancia de brindar a los niños y niñas experiencias deportivas que
                    no solo fortalezcan su cuerpo, sino que también contribuyan a su bienestar emocional y mental.
                    <br>
                    El yoga se ha convertido en un pilar fundamental en nuestras actividades deportivas, ya que ofrece a los
                    estudiantes una herramienta efectiva para relajarse y encontrar equilibrio en medio de las demandas
                    académicas y cotidianas. Nuestro enfoque va más allá de simplemente enseñar poses; integramos el yoga
                    como una práctica que motiva a los niños y niñas, fomentando la conexión entre mente y cuerpo.

                </p>
            </div>
            <img src="/deportes.jpg" alt="Deportes" class="card__image">
        </div>
    </div>
</template>

<style scoped>
h1 {
    margin-top: 2.5rem;
    text-align: center;
    font-size: 4rem;
}

.container {
    margin: 1rem auto;
    width: 90%;
    padding: 1.5rem 2rem;
}

.container .card {
    margin-top: 1.8rem;
    padding: 1rem 2rem;
    background-color: rgb(190, 190, 190);
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(36, 36, 36);
}

.container .card .card__image {
    width: 30%;
}

.card__info {
    width: 50%;
}

.card__info-title {
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 1rem;
}

.card__info-text {
    text-align: left;
    line-height: 25px;
}</style>
