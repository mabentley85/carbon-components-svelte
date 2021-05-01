<script>
    export let segment = undefined;
  
    import {
      Content,
      Breadcrumb,
      BreadcrumbItem,
      Grid,
      Row,
      Column,
      Tabs,
      TabContent,
      Tab,
      Select,
      SelectItem,
    } from "carbon-components-svelte";
    import Header from "$lib/Header.svelte";
    import Theme from "$lib/Theme.svelte";

    //import 'carbon-components-svelte/css/all.scss';
    import "carbon-components-svelte/css/all.css";
  </script>
  
  <Theme persist theme="g10">
    <Header segment="{segment}" />
    <Content style="background: none; padding: 1rem">
      <Grid>
        <slot />
      </Grid>
    </Content>
  </Theme>