<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<style>
    .banner-image {
        width: 105%;
        margin-top: 30px;
        margin-bottom: 100px;
        margin-left: -8px;
        margin-right: 0px;
    }
</style>

<script>
    import Header from "../components/Header/+index.svelte";
    import Filters from '../components/Filters/+index.svelte'
    import Content from '../components/Content/+index.svelte'
    import Footer from '../components/Footer/+index.svelte'
</script>

<Header />
<!-- svelte-ignore a11y-img-redundant-alt -->
<img class="banner-image" src="https://templesofindia.org/assets/compressed/tofi-banner.jpg" alt="banner-image" />
<Filters />
<Content />
<Footer />
