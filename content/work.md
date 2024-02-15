---
title: Work
layout: pages/work-index.njk
---

# {{ title }}

<br>

<div class="work-grid">
	{%- for post in collections.work -%}
	<a href="{{post.url}}">
		<div class="workgrid-cell">
			<img src="{{post.data.card}}" class="cardBG">
			<img src="{{post.data.logo}}" class="cardLogo">
		</div>
	</a>
	{%- endfor -%}
</div>	