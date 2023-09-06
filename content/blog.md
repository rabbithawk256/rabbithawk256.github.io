---
title: Blog
layout: pages/content.njk
permalink: /blog.html
eleventyNavigation:
  key: "Blog"
  order: 0
---
# {{ title }}  

<br>
{%- for post in collections.blog -%}
<a class="post-title" href="{{post.url}}">{{post.data.title}}</a>
<p class="post-info">Published {{post.date | 8601format}} · Tags: {{ post.data.tags }}</p>
{%- endfor -%}
