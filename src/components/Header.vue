<script setup lang="ts">
	function redirect(postion) {
	  // TODO 
	}
</script>

<template>
	<div class="container-flex">
		<nav class="fixed-top align-center navbar navbar-expand-lg navbar-dark bg-dark">
			<span class="navbar-brand mb-0 h1">Tarffie Developer</span>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" @click="redirect(home)"> Home </a>
					</li>
					<li class="nav-item">
						<a class="nav-link"@click="redirect(about)"> About </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="redirect(contact)"> Contact </a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
