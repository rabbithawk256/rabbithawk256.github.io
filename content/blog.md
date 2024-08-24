---
title: Blog
layout: pages/content.njk
permalink: /blog.html
eleventyNavigation:
  key: "Blog"
  order: 0
mastheadEntry: 3
---
<br>
{%- for post in collections.blog -%}
<div class="post-background" style="padding: var(--space-s) 0; background: linear-gradient(90deg, var(--bg) 10%, rgba(0, 0, 0, 0)) 100%, url({{post.data.headlineImage}})">
  <a class="post-title no-decoration" href="{{post.url}}">{{post.data.title}}</a>
  <p class="post-info no-decoration">{{post.date | 8601format}}</p>
  <div style=":first-child { margin-right: 0 }">
    {%- for tag in post.data.tags -%}
    <div class="tag-pill"> {{ tag }} </div>
    {%- endfor -%}
  </div>
</div>
{%- endfor -%}