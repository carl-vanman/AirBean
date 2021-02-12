<template>
  <div class="container">
        <div :class="{cartBackground: cartBoard.active}"></div>
        <button @click="cartBoard.active = !cartBoard.active">
            <img src="../assets/bag.svg" alt="">
            <div class="itemCount">
                <p class="itemCount__num">7</p>
            </div>
        </button>
        <article v-if="cartBoard.active" class="cartBoard">
                <header>
                    <h2>Din Beställning</h2>
                </header>
                    <section>
                        <ul>
                            <li>
                                <h4>BryggKaffe</h4>
                                <p>98kr</p>
                            </li>
                        </ul>
                    </section>
        </article>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cartBoard: {
                active: false
            }
        }
    }
}

</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    button {
        align-self: flex-end;
        background-color: var(--airBean-brown);
        border: none;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        cursor: pointer;

        position: relative;
        z-index: 2;
    }

    button:focus {outline:0;}

    .itemCount {
        background-color: var(--airBean-orange);
        width: 22px;
        height: 22px;
        border-radius: 100%;

        position: absolute;
        top: 0;
        right: 0;
    }

    .itemCount__num {
        color: white;
        font-weight: bold;
        margin: 4px 0 0;
    }

    /* Item */

    ul {
        list-style: none;
    }
    ul, li {
        margin: 0;
        padding: 0;
    }

    /* CartBoard */

    .cartBoard {
        padding: 15px;
        background-color: white;
        position: relative;
        border-radius: 3px;
        min-width: 340px;
        height: min-content;
        z-index: 3;
    }

    .cartBoard::before {
        content: '';
        width: 20px;
        height: 10px;

        position: absolute;
        background-color: white;
        top: -10px;
        right: 20px;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        z-index: 3;
    }

    .cartBackground {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
</style>