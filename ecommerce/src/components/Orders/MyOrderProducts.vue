<template>
  <tr>
    <th scope="row"><img :src="product.product.img" alt=""></th>
    <td>{{ product.product.title }}</td>
    <td>{{ product.product.itemNumber }}</td>
    <td>{{ product.quantity }}</td>
    <td>$ {{ product.amount }}</td>
  </tr>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
img {
  height: 7rem;
}
</style>