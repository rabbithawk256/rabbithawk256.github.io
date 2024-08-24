---
title: Work
layout: pages/index.njk
mastheadEntry: 4
---
<div class="grid" style="--columns: 3; gap: var(--space-xs); grid-auto-rows: calc(var(--space-xl)*5.5);">
	{%- for post in collections.work -%}
	<a href="{{post.url}}">
		<div style="background: url({{post.data.card}});" class="fill-parent centre-children-horizontally">
			<div class="logo fill-parent" style="background: url({{post.data.logo}});"></div>
		</div>
	</a>
	{%- endfor -%}
</div>
<style>
	.logo {
		background-position: 50% !important;
		background-repeat: no-repeat !important; 
		transition: 0.05s;
		background-size: 70% !important;
	}
	.logo:hover, .logo:focus {
		background-size: 75% !important;
		transition: 0.05s;
		filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))
		}
</style>