<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    users: [
      {id: 1, company_id: 1, name: 'John', age: 40, profile: 'Loves GoLang and Typescript' },
      {id: 2, company_id: 2, name: 'David', age: 42, profile: 'Loves Java and C#' },
    ]
  })
})
</script>

<template>
  <div>
    <h2>User List</h2>

    <div>
      <div style="padding: 10px 0px; border-bottom: 1px solid grey;">
        <h3>John (at Google)</h3>
        <p>
          <b>40</b> Loves GoLang and Typescript
        </p>
        <button>remove</button>
      </div>
    </div>
  </div>
</template>
