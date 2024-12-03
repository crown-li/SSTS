<script>
	import Counter from './Counter.svelte';
	import welcome from '../lib/images/svelte-welcome.webp';
	import welcome_fallback from '../lib/images/svelte-logo.svg';
	import { supabase } from '../lib/supabase'

	async function getData() {
		const { data, error } = await supabase
			.from('your_table')
			.select('*')
		
		if (error) console.error('Error:', error)
		else console.log('Data:', data)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<div class="flex mt-10 mb-10 justify-center bg-gray-100">
		<h1 class="text-4xl font-bold text-[#6a8093]">
			Hello Tailwind CSS!
		</h1>
	</div>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
