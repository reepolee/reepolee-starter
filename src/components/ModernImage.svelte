<script>
  import { webp as _webp, avif as _avif, jpeg as _jpeg } from "@/helpers/helpers";
  import viewport from "@/actions/viewport";
  export let src;
  export let alt;
  export let visible = false;
  export let loaded = false;
  let imgElement;
  let sizes = "(max-width: 360px) 300px, (max-width: 640px) 400px, (max-width: 960px) 800px, (max-width: 1600px) 1200px, 5000px";
</script>

<picture>
  <source type="image/avif" srcset="{_avif(src, 300)} 300w, {_avif(src, 400)} 400w, {_avif(src, 800)} 800w, {_avif(src, 1200)} 1200w, {_avif(src, 1920)}" {sizes} />
  <source type="image/webp" srcset="{_webp(src, 300)} 300w, {_webp(src, 400)} 400w, {_webp(src, 800)} 800w, {_webp(src, 1200)} 1200w, {_webp(src, 1920)}" {sizes} />
  <source srcset="{_jpeg(src, 300)} 300w, {_jpeg(src, 400)} 400w, {_jpeg(src, 800)} 800w, {_jpeg(src, 1200)} 1200w, {_jpeg(src, 1920)}" {sizes} />
  <img
    {src}
    {alt}
    loading="lazy"
    class={$$props.class}
    bind:this={imgElement}
    use:viewport
    on:load={() => {
      loaded = true;
    }}
    on:enterViewport={() => {
      visible = true;
    }}
    on:exitViewport={() => (visible = false)}
  />
</picture>
<!-- <p>width: {w}px, ratio: {r}</p> -->
