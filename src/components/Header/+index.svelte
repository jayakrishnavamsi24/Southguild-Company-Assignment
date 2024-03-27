<script>
    import './index.css'
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<div class="header">
    <span class="material-icons">menu</span>
    <div class="temple-logo-container">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png" alt="temple-image"/>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="page-title"> Temples of India </a>
    </div>
    <span class="material-icons">search</span>
</div>
